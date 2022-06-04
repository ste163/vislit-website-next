import Head from "next/head";
import Link from "next/link";
import Card from "../../components/Card";
import CardFeature from "../../components/CardFeature";
import GraphicFeature from "../../components/GraphicFeature";
import IconCheckmark from "../../components/IconCheckmark";

const Features = () => (
  <>
    <Head>
      <title>Features | Vislit </title>
    </Head>

    <div className="flex flex-col items-center">
      <div className="flex flex-col w-4/5 mb-4 md:mb-10 lg:flex-row xl:w-3/4">
        <div className="hidden lg:block">
          <GraphicFeature />
        </div>

        <div className="w-11/12 xl:w-1/2 ml-12">
          <h1 className="mb-4">Only the essentials</h1>
          <p className="mb-4">
            Many creative writing tools are extremely niche, adding yet another
            piece of software to use, or overloaded with features you don't use.
            Vislit aims to be simple and opinionated for productive writing.
          </p>
          <ul className="bullet-list list-disc pl-8">
            <li>
              <strong>Project management</strong> is the core. Each project is
              organized for you and contains its own documents, notes, goals,
              and progress.
            </li>
            <li>
              <strong>Writing editor</strong> contains common formatting
              options, spell-checking, file backups, and support for any page
              amount.
            </li>
            <li>
              <strong>Note-taking</strong> anywhere in the application, whether
              in the middle of a writing session or if you have a great idea
              while viewing your dashboard.
            </li>
            <li>
              <strong>Goal-setting</strong> to count all your work. Set word
              count goals for how much you'd like to write along with whether
              proofreading, editing, or revising also counts towards goal
              completion.
            </li>
            <li>
              <strong>Track progress</strong> for any amount of days of the
              month. Log your work whether that's writing 2,000 words or
              proofreading 5,000.
            </li>
            <li>
              <strong>Visualize</strong> your progress in a dashboard and
              receive suggestions on how you can improve on your goals.
            </li>
          </ul>
        </div>
      </div>

      <CardFeature
        header="Projects at the core"
        className="mb-12 items-center lg:items-stretch"
        isReverse
      >
        <p>
          Each project you create has its own document files, note files, goals,
          and progress. By keeping them separate and organized automatically,
          you'll always be able to find old work and stay focused on the
          current. Finished a project? Set it is as completed. Not going to
          finish that story, but don't want to delete it? Archive it.
        </p>
      </CardFeature>

      <CardFeature
        header="Minimalist writing and note taking"
        className="mb-12 items-center lg:items-stretch"
      >
        <p className="mb-8">
          Most features in well-known writing software (like Word and Google
          Docs) are geared for office work or live collaboration. This can be
          great in some situations, but Vislit includes only what's necessary
          for efficient creative writing, making the interface uncluttered,
          simple, and fast.
        </p>
        <p>
          By integrating note-taking, you no longer need to manage multiple
          files or jump to another program. And by having notes available from
          anywhere on the app, you can reference them in the middle of a writing
          session without losing your place.
        </p>
      </CardFeature>

      <CardFeature
        header="Set your writing goals"
        className="mb-12 items-center lg:items-stretch"
        isReverse
      >
        <p className="mb-8">
          The best way to finish anything is by setting a goal. That's why
          Vislit allows for easy goal setting. If you set an ambitious goal of
          writing 1000 words every day (about 4 or 5 pages), but find that's too
          much, you can modify your goal. You'll be able to keep track of your
          previous goals in the goal log to see how you've changed over time.
        </p>
        <p>
          Maybe you didn't write 1000 words every day, but you spent an hour
          proofreading, editing, or revising? That's great, too! Those can count
          towards goal completion so you track of all of your hard work!
        </p>
      </CardFeature>

      <CardFeature
        header="See your progress"
        className="mb-12 items-center lg:items-stretch"
      >
        <p>
          Not only will you have more pages, but as you enter your progress,
          your visualization dashboard will develop, giving you insight into how
          you write and the best times you write. Make changes to increase your
          goals or relax them if it's too much.
        </p>
      </CardFeature>

      <CardFeature
        header="Security and data privacy"
        className="mb-12 items-center lg:items-stretch"
        isReverse
      >
        <p>
          Vislit is secure and private by design. The entire source code used to
          create Vislit is freely available for review, scrutiny, and
          improvement on{" "}
          <a className="underline" href="https://github.com/ste163/vislit">
            Github
          </a>
          .
        </p>

        <p className="my-8">
          Vislit saves your documents and notes as HTML files that can be
          imported into any writing editor. Its local database is stored in
          JSON, another standard and highly transferrable data format.
        </p>

        <p className="mb-8">
          Vislit only connects to the internet when it's checking for updated
          versions and knows nothing about your data.
        </p>

        <p>
          If you'd like to use Vislit on multiple computers, you can store your
          data in a Google Drive, Dropbox, OneDrive, or any other cloud syncing
          service.
        </p>
      </CardFeature>

      <Card className={"mb-12 flex flex-col lg:flex-row"}>
        <div className="max-w-sm mr-0 lg:mr-8">
          <h2>Roadmap</h2>
          <p>
            After version 1.0 release, roadmap could readjust based on user
            feedback.
          </p>

          <p className="my-4">
            To see real-time progress on what's being worked on, visit the{" "}
            <a
              className="underline"
              href="https://github.com/ste163/vislit/projects"
            >
              Github Project page
            </a>
            .
          </p>

          <p>
            Have a suggestion on what features you'd like to see in a future
            release, add a topic in the{" "}
            <a
              className="underline"
              href="https://github.com/ste163/vislit/discussions"
            >
              Discussion section on Github
            </a>
            ! (This requires signing up for a free Github account.)
          </p>
        </div>

        <ul className="mt-8 lg:mt-0">
          <li className="timeline-bullet flex items-center relative">
            <h3 className="w-48">2021</h3>
            <div className="bg-primary border-4 border-primary rounded-full w-8 h-8 mx-4 flex place-content-center">
              <div className="pt-[3px] pl-[1px] scale-75">
                <IconCheckmark />
              </div>
            </div>
            <div>Functioning prototype</div>
          </li>

          <li className="timeline-bullet flex items-center relative">
            <h3 className="w-48">mid-2022</h3>
            <div className="border-4 border-primary rounded-full w-8 h-8 mx-4 flex place-content-center"></div>
            <div>Implement final designs</div>
          </li>

          <li className="timeline-bullet flex items-center relative">
            <h3 className="w-48">late-2022</h3>
            <div className="border-4 border-primary rounded-full w-8 h-8 mx-4 flex place-content-center"></div>
            <div>Test release(s)</div>
          </li>

          <li className="timeline-bullet flex items-center relative">
            <h3 className="w-48">late-2022/early-2023</h3>
            <div className="border-4 border-primary rounded-full w-8 h-8 mx-4 flex place-content-center"></div>
            <div>1.0 release</div>
          </li>

          <li className="timeline-bullet flex items-center relative">
            <h3 className="w-48">2023+</h3>
            <div className="border-4 border-primary rounded-full w-8 h-8 mx-4 flex place-content-center"></div>
            <div>Thesaurus integration</div>
          </li>

          <li className="timeline-bullet flex items-center relative">
            <div className="w-48"></div>
            <div className="border-4 border-primary rounded-full w-8 h-8 mx-4 flex place-content-center"></div>
            <div>Note-canvas, project stages</div>
          </li>
        </ul>
      </Card>

      <div className="bg-gray flex justify-center w-full py-5 max-w-xl rounded-md">
        <div className="w-1/2 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-center mb-3">
            Ready to start writing?
          </h2>
          <Link href="/download">
            <div className="bg-black flex flex-col items-center px-4 py-2 rounded-md cursor-pointer">
              <span className="text-2xl font-bold">Download</span>
              <div className="bg-primary font-black text-3xl my-2 px-3 py-1 rounded-sm">
                v1.0
              </div>
              <span>Linux, Mac, Windows</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </>
);

export default Features;
