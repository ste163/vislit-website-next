import Head from "next/head";
import Card from "../../components/Card";

const About = () => (
  <>
    <Head>
      <title>About | Vislit </title>
    </Head>
    <Card header="The software">
      <p className="mb-4">
        Vislit is free and open source software licensed under the AGPL 3
        license. This license gives you the freedom to use and modify Vislit
        anyway you see fit. It's yours forever! The only ask is that if you make
        code improvements and want to release your own version, you make those
        changes also under the AGPL 3 license so that Vislit stays free forever.
      </p>
      <p>
        Vislit is developed using the Electron framework, which many well known
        companies use, like Slack, Discord, and Facebook. This allows for easy
        cross-platform development with a consistent user experience. It will
        also allow for more flexibilty in the future for say, a web-browser
        based version of Vislit.
      </p>
    </Card>

    <Card header="Questions or found a bug?" className="my-8">
      <p>
        Github issues and discussions are the primary area for directing all bug
        reports and questions. It requires a free account to create. If enough
        similar questions come up, a FAQ page will be added to this website.
      </p>
    </Card>

    <Card header="Special thanks">
      <p>
        Vislit would not be possible without the wealth of amazing open source
        projects available, namely: Electron, Vue, Node, TypeScript, Lowdb, and
        more.
      </p>

      <p className="my-4">
        The base project was scaffolded uses catawa93's fantastic
        vite-electron-builder, but has since been modified to suite Vislit's
        needs.
      </p>

      <p>Shannon Swenton for logo design</p>
    </Card>
  </>
);

export default About;
