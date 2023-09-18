import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import "~/styles/globals.css";
import ContactFooter from "../components/ContactFooter";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import TopBanner from "../components/TopBanner";
import { useRouter } from "next/router";
import previewImage from "../assets/logoRectangle.png";
// import favicon from "../../public/favicon.ico";

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
        <meta name="description" content={t.RootMetaDescription} />
        <meta property="og:image" content={previewImage.src} key="ogimage" />
        <meta property="og:url" content="https://cerenovka.sk/" />
        <meta property="og:locale" content="sk_SK" />
        <meta property="og:site_name" content={t.AboutPageHeading} />
        <meta property="og:description" content={t.RootMetaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={t.RootTitle} />
        <link
          rel="icon"
          type="image/x-icon"
          href="https://cerenovka.sk/favicon.ico"
        ></link>
        <link
          rel="apple-touch-icon"
          href="/favicon-180x180.png"
          type="image/png"
        />
        <meta name="msapplication-TileImage" content="/favicon-270x270.png" />
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
