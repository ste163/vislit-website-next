import Head from "next/head";
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
            the roadmap (anchor link) for the current trajectory.
          </p>
        </Card>
      </div>
    </div>
  </>
);

export default Download;
