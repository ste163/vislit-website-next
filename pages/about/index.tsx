import Head from "next/head";
import Card from "../../components/Card";

const About = () => (
  <>
    <Head>
      <title>About | Vislit </title>
    </Head>

    <div className="flex flex-col items-center">
      <div className="max-w-2xl">
        <Card header="The software">
          <p className="mb-8">
            Vislit is free and open source software licensed under the{" "}
            <a
              className="underline"
              href="https://www.gnu.org/licenses/agpl-3.0.en.html"
            >
              AGPL-3 license
            </a>
            . This license gives you the freedom to use and modify Vislit anyway
            you see fit. It's yours forever! The only ask is that if you make
            code improvements and want to release your own version, you make
            those changes also under the{" "}
            <a
              className="underline"
              href="https://www.gnu.org/licenses/agpl-3.0.en.html"
            >
              AGPL-3 license
            </a>{" "}
            so that Vislit stays free forever.
          </p>
          <p>
            Vislit is developed using the Electron framework, also used by
            Slack, Discord, and Facebook. This allows for easy cross-platform
            development with a consistent user experience.
          </p>
        </Card>

        <Card header="Questions or found a bug?" className="my-8">
          <p>
            Github issues and discussions are the primary area for directing all
            bug reports and questions. It requires a free account to create. If
            enough similar questions come up, a FAQ page will be added to this
            website.
          </p>
        </Card>

        <Card header="Special thanks">
          <p>
            Vislit would not be possible without the wealth of amazing open
            source projects, a few used in Vislit: Electron, Vue, Vite, Node,
            TypeScript, Lowdb.
          </p>
          <p className="my-8">
            The base project was scaffolded uses catawa93's fantastic
            vite-electron-builder, but has since been modified to suite Vislit's
            needs.
          </p>
          <p>Shannon Swenton for logo design</p>
        </Card>
      </div>
    </div>
  </>
);

export default About;
