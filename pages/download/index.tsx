import Head from "next/head";
import Card from "../../components/Card";

const Download = () => (
  <>
    <Head>
      <title>Download | Vislit </title>
    </Head>
    <div className="flex flex-col items-center">
      <Card header="Download">
        <p>
          Vislit is currently in development, but will be available soon. See
          the roadmap (anchor link) for the current trajectory.
        </p>
      </Card>
    </div>
  </>
);

export default Download;
