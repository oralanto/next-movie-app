import Link from "next/link";
import "./styles.css";
import Layout from "../components/Layout";
import ContextProvider from "../lib/Context";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Link href="/">
        <h1>Movie Database App</h1>
      </Link>
      <ContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContextProvider>
    </>
  );
}
