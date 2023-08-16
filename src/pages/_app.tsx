import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import "~/styles/globals.css";
import ContactFooter from "../components/ContactFooter";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import TopBanner from "../components/TopBanner";
import { useRouter } from "next/router";
import previewImage from "../assets/logo.png";

import en from "../locales/en";
import sk from "../locales/sk";
import pl from "../locales/pl";

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "sk" ? sk : locale === "en" ? en : pl;
  return (
    <>
      <Head>
        <title>{t.RootTitle}</title>
        <meta name="description" content={t.RootMetaDescription}></meta>
        <meta property="og:image" content={previewImage.src} key="ogimage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <TopBanner />
        <NavBar />
      </header>
      <div id="page-body">
        <Component {...pageProps} />
      </div>
      <ContactFooter />
      <Footer />
    </>
  );
};

export default MyApp;
