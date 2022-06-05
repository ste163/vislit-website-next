import Head from "next/head";
import Link from "next/link";
import Card from "../../components/Card";

const Download = () => (
  <>
    <Head>
      <title>Download | Vislit </title>
    </Head>
    <div className="flex flex-col items-center">
      <div className="max-w-2xl">
        <Card header="Download">
          <p>
            Vislit is currently in development, but will be available soon. See
            the{" "}
            <Link href="/features#roadmap">
              <a className="underline">roadmap</a>
            </Link>
            !
          </p>
        </Card>
      </div>
    </div>
  </>
);

export default Download;
