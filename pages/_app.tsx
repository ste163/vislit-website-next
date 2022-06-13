import PlausibleProvider from "next-plausible";
import Layout from "../components/Layout";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <PlausibleProvider
      domain="vislit-website.vercel.app"
      trackOutboundLinks={true}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PlausibleProvider>
  );
}

export default App;
