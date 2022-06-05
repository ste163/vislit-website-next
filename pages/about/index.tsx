import Head from "next/head";
import Card from "../../components/Card";

const About = () => (
  <>
    <Head>
      <title>About | Vislit </title>
      <meta
        name="description"
        content="Vislit is free and open source software licensed user the AGPL-3 license and is developed with the Electron framework."
      />
    </Head>

    <div className="flex flex-col items-center">
      <div className="max-w-2xl">
        <Card header="The software">
          <p className="mb-8">
            Vislit is free and open source software licensed under the{" "}
            <a
              className="underline"
              href="https://www.gnu.org/licenses/agpl-3.0.en.html"
              target={"_blank"}
              rel="noreferrer"
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
              target={"_blank"}
              rel="noreferrer"
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
            Github{" "}
            <a
              className="underline"
              href="https://github.com/ste163/vislit/issues"
              target={"_blank"}
              rel="noreferrer"
            >
              issues
            </a>{" "}
            and{" "}
            <a
              className="underline"
              href="https://github.com/ste163/vislit/discussions"
              target={"_blank"}
              rel="noreferrer"
            >
              discussions
            </a>{" "}
            are the primary area for directing all bug reports and questions.
          </p>
        </Card>

        <Card header="Special thanks">
          <p>
            Vislit would not be possible without the wealth of amazing open
            source projects available like: Electron, Vue, Vite, Node,
            TypeScript, and Lowdb.
          </p>
          <p className="my-8">
            The base project was scaffolded using{" "}
            <a
              className="underline"
              href="https://github.com/cawa-93"
              target={"_blank"}
              rel="noreferrer"
            >
              {" "}
              cawa-93's
            </a>{" "}
            fantastic
            <a
              className="underline"
              href="https://github.com/cawa-93/vite-electron-builder"
              target={"_blank"}
              rel="noreferrer"
            >
              {" "}
              vite-electron-builder
            </a>
            , but has since been modified to suite Vislit's needs.
          </p>
          <p>Shannon Swenton for logo design.</p>
        </Card>
      </div>
    </div>
  </>
);

export default About;
