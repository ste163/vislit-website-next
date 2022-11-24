import Head from "next/head";
import Link from "next/link";
import Card from "../../components/Card";

const Download = () => (
  <>
    <Head>
      <title>Download | Vislit </title>
      <meta
        name="description"
        content="Download Vislit or checkout the development roadmap"
      />
    </Head>
    <div className="flex flex-col items-center">
      <div className="max-w-2xl">
        <Card header="Download">
          <p>
            Vislit is currently in development, but will be available soon. See
            the{" "}
            <Link href="/features#roadmap" className="underline">
              roadmap
            </Link>
            !
          </p>
        </Card>
      </div>
    </div>
  </>
);

export default Download;
