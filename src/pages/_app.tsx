import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import "~/styles/globals.css";
import ContactFooter from "./ContactFooter";
import Footer from "./Footer";
import NavBar from "./NavBar";
import TopBanner from "./TopBanner";
import { useRouter } from "next/router";

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <>
      <Head>
        <title>Apartmány Cereňovka</title>
        <meta
          name="description"
          content="Apartmány Cereňovka - ubytovanie v súkromí v obci Ižipovce, v blízkosti Liptovskej Mary, Liptovského Mikuláša."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sriracha&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <TopBanner />
      <NavBar />
      <div id="page-body">
        <Component {...pageProps} />
      </div>
      <ContactFooter />
      <Footer />
    </>
  );
};

export default MyApp;
