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
      <meta
        name="description"
        content="Vislit's core features are its project management, stream-lined writing editor, built-in note-taker, and the ability to set and track writing goals."
      />
    </Head>

    <div className="flex flex-col items-center">
      <div className="flex flex-col mb-4 md:mb-10 xl:flex-row">
        <div className="hidden xl:block">
          <GraphicFeature />
        </div>

        <div className="w-11/12 xl:w-1/2 ml-0 xl:ml-12 max-w-2xl">
          <h1 className="mb-4">Only the essentials</h1>
          <p className="mb-4">
            Many creative writing tools are too niche or overloaded with
            features that are too complex and intimidating. Vislit aims to be a
            simple, opinionated replacement for Word, Google Docs, OneNote, etc.
            One application focused only for creative writing.
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
              while viewing your progress dashboard.
            </li>
            <li>
              <strong>Goal-setting</strong> to define your work. Set word count
              goals for how much you'd like to write along with whether
              proofreading, editing, or revising is included towards goal
              completion.
            </li>
            <li>
              <strong>Track progress</strong> for any amount of days of the
              month. Log your work: whether that's writing 2,000 words or
              proofreading 20 pages.
            </li>
            <li>
              <strong>Visualize</strong> your progress in a dashboard and
              receive suggestions on how you can improve.
            </li>
          </ul>
        </div>
      </div>

      <CardFeature
        id="projects"
        header="Projects at the core"
        imageSrc="/images/home/projects.webp"
        imageAlt="List of writing projects and a project summary card"
        className="mb-12 items-center lg:items-stretch"
        isReverse
      >
        <p>
          Each project has its own document files, note files, goals, and
          progress. By keeping them separate and organized automatically, you'll
          always be able to find old work and stay focused on the current.
          Finished a project? Set it is as completed. Not going to finish that
          story, but don't want to delete it? Archive it.
        </p>
      </CardFeature>

      <CardFeature
        id="writer"
        header="Minimalist writing and note taking"
        imageSrc="/images/home/notes.webp"
        imageAlt="A note is open next to the writing editor"
        className="mb-12 items-center lg:items-stretch"
      >
        <p className="mb-8">
          Most features in well-known writing software like Word and Google Docs
          are geared for office work or live collaboration. Vislit includes only
          what's necessary for efficient, solo creative writing, making the
          interface uncluttered, simple, and fast.
        </p>
        <p>
          By integrating note-taking, you no longer need to manage files or jump
          to another program. Stay in the flow by having your notes side-by-side
          with your main story.
        </p>
      </CardFeature>

      <CardFeature
        id="goals"
        header="Set your writing goals"
        imageSrc="/images/home/goals.webp"
        imageAlt="Table showing current goal and all previous goals"
        className="mb-12 items-center lg:items-stretch"
        isReverse
      >
        <p className="mb-8">
          The best way to finish anything is by setting a goal. That's why
          Vislit allows for easy goal management. If you set an ambitious goal
          of writing 1000 words every day (about four or five pages), but find
          that's too much, modify your goal. Vislit will keep a log of every
          change.
        </p>
        <p>
          Maybe you didn't write 1000 words, but you spent an hour proofreading,
          editing, or revising. That's great, too! That work can optionally
          count towards goal completion.
        </p>
      </CardFeature>

      <CardFeature
        id="progress"
        header="See your progress"
        imageSrc="/images/home/progress.webp"
        imageAlt="Dashboard with graphs of writing progress"
        className="mb-12 items-center lg:items-stretch"
      >
        <p className="mb-8">
          Not only will you have more pages, but as you enter your progress,
          your visualization dashboard will develop, giving you insight into how
          you write and the best times you write.
        </p>
        <p>
          Make changes to increase your goals or relax them if it's too much.
          Vislit suggests modifications to your goals if you consistently exceed
          or miss them.
        </p>
      </CardFeature>

      <CardFeature
        id="privacy"
        header="Security and data privacy"
        imageSrc="/images/home/writer.webp"
        imageAlt="Writing editor"
        className="mb-12 items-center lg:items-stretch"
        isReverse
      >
        <p>
          Vislit is secure and private by design. The entire source code used to
          create Vislit is freely available for review, scrutiny, and
          improvement on{" "}
          <a
            className="underline"
            href="https://github.com/ste163/vislit"
            target={"_blank"}
            rel="noreferrer"
          >
            Github
          </a>
          .
        </p>

        <p className="my-8">
          If you try Vislit, but decide it isn't for you, no worries! Vislit
          saves your documents and notes as HTML files that can be imported into
          any other writing editor. Its database is stored in JSON, another
          standard and highly transferrable data format.
        </p>

        <p className="mb-8">
          Vislit only connects to the internet when it's checking for updated
          versions and knows nothing about you or your data.
        </p>

        <p>
          If you'd like to use Vislit on multiple computers or with the cloud,
          set Vislit to save its database in Google Drive, Dropbox, OneDrive, or
          any cloud syncing service.
        </p>
      </CardFeature>

      <Card className={"mb-12 flex flex-col lg:flex-row"}>
        <div id="roadmap" className="max-w-xs mr-0 lg:mr-12">
          <h2>Roadmap</h2>
          <p>
            After version 1.0 release, roadmap could readjust based on user
            feedback.
          </p>

          <p className="my-4">
            To see real-time progress, visit the{" "}
            <a
              className="underline"
              href="https://github.com/ste163/vislit/projects"
              target={"_blank"}
              rel="noreferrer"
            >
              Github Project page
            </a>
            .
          </p>

          <p>
            Have a suggestion on what features you'd like to see in a future
            release, add a suggestion in the{" "}
            <a
              className="underline"
              href="https://github.com/ste163/vislit/discussions"
              target={"_blank"}
              rel="noreferrer"
            >
              Discussion section on Github
            </a>
            ! (This requires signing up for a free Github account.)
          </p>
        </div>

        <ul className="mt-8 lg:mt-0 min-w-max">
          {/* TODO: move these to an object that we map over */}
          <li className="timeline-bullet flex items-center relative">
            <h3 className="timeline-header w-24 text-right">2021</h3>
            <div className="bg-primary border-4 border-primary rounded-full w-8 h-8 mx-4 flex place-content-center">
              <div className="pt-[3px] pl-[1px] scale-75">
                <IconCheckmark />
              </div>
            </div>
            <div>Functioning prototype</div>
          </li>

          <li className="timeline-bullet flex items-center relative">
            <h3 className="timeline-header w-24 text-right">mid-2022</h3>
            <div className="border-4 border-primary rounded-full w-8 h-8 mx-4 flex place-content-center"></div>
            <div>Implement final designs</div>
          </li>

          <li className="timeline-bullet flex items-center relative">
            <h3 className="timeline-header w-24 text-right">late-2022</h3>
            <div className="border-4 border-primary rounded-full w-8 h-8 mx-4 flex place-content-center"></div>
            <div>Test release(s)</div>
          </li>

          <li className="timeline-bullet flex items-center relative">
            <h3 className="timeline-header w-24 text-right whitespace-nowrap">
              early-2023
            </h3>
            <div className="border-4 border-primary rounded-full w-8 h-8 mx-4 flex place-content-center"></div>
            <div>1.0 release</div>
          </li>

          <li className="timeline-bullet flex items-center relative">
            <h3 className="timeline-header w-24 text-right">2023+</h3>
            <div className="border-4 border-primary rounded-full w-8 h-8 mx-4 flex place-content-center"></div>
            <div>Thesaurus integration</div>
          </li>

          <li className="timeline-bullet flex items-center relative">
            <div className="timeline-header w-24 text-right"></div>
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
            <a className="bg-black flex flex-col items-center px-4 py-2 rounded-md cursor-pointer">
              <span className="text-2xl font-bold">Download</span>
              <div className="bg-primary font-black text-3xl my-2 px-3 py-1 rounded-sm">
                TBD
              </div>
              <span>Linux, Mac, Windows</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  </>
);

export default Features;
