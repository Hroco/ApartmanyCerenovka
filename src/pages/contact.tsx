/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/prefer-for-of */
import React, { useRef } from "react";
import BannerImg from "../components/BannerImg";
import emailjs from "@emailjs/browser";

import en from "../locales/en";
import sk from "../locales/sk";
import pl from "../locales/pl";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Contact() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "sk" ? sk : locale === "en" ? en : pl;
  /* const [name, setName] = useState('');
  const [nameError, setNameError] = useState(null);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [subject, setSubject] = useState('');
  const [subjectError, setSubjectError] = useState(null);
  const [message, setMessage] = useState('');
  const [messageError, setMessageError] = useState(null);*/
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElements = e.currentTarget.elements;

    // Validate each input field
    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i] as HTMLInputElement;
      if (!element.checkValidity()) {
        // Handle validation error
        console.log(`Validation error: ${element.name}`);
        return;
      }
    }

    emailjs
      .sendForm(
        "service_lyx7agx",
        "template_83xjb8l",
        e.currentTarget,
        "KA58ds_SwnbxGQjJi"
      )
      .then(
        (result) => {
          // console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    // e.currentTarget.reset();
  };
  return (
    <>
      <Head>
        <title>{t.ContactTitle}</title>
      </Head>
      <div className="main-panel">
        <BannerImg text={t.ContactBanner} />
        <div className="main-panel-inside container">
          <h5>{t.ContactHeading}&nbsp;</h5>
          <form ref={form} onSubmit={sendEmail}>
            <p>{t.ContactName}</p>
            <p>
              <span>
                <input type="text" name="user_name" required />
              </span>
            </p>
            <p>{t.ContactEmail}</p>
            <p>
              <span>
                <input type="email" name="user_email" required />
              </span>
            </p>
            <p>{t.ContactSubject}</p>
            <p>
              <span>
                <input type="text" name="user_subject"></input>
              </span>
            </p>
            <p>{t.ContactMessage}</p>
            <p>
              <span>
                <textarea name="message" cols={40} rows={10}></textarea>
              </span>
            </p>
            <p>
              <span>
                <input type="submit" value={t.ContactSend} />
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
