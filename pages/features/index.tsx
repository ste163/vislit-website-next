import Head from "next/head";
import Link from "next/link";
import CardFeature from "../../components/CardFeature";
import GraphicFeature from "../../components/GraphicFeature";

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
            Many creative writing tools are extremely niche or overloaded with
            features. Vislit aims to be as simple as possible, so you can focus
            on writing.
          </p>
          <ul className="list-disc pl-8">
            <li>
              <strong>Project management</strong>. At Vislit's core are
              projects. Each project contains its own documents, notes, goals,
              and progress. All the organization is handled for you.
            </li>
            <li>
              <strong>Writing editor</strong>. It contains the most-used
              formatting options, the ability to scale to any page size, and has
              easy file backups.
            </li>
            <li>
              <strong>Notes</strong>. Open you project notes anywhere in Vislit.
              Whether that's if you're in the middle of a writing session or if
              you have a great idea from the progress table.
            </li>
            <li>
              <strong>Goals</strong>. All your work counts towards your goal, so
              track it! Set word count goals for how much you'd like to write
              along with whether proofreading, editing, or revising also counts
              towards goal completion.
            </li>
            <li>
              <strong>Progress</strong>. For every day of the month, track what
              you did whether that's write 2,000 words or proofread 10,000.
            </li>
            <li>
              <strong>Visualization</strong>. See your progress in a dashboard
              and receive suggestions on how you can improve on your goals.
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
          improvement on Github (link).
        </p>

        <p>
          Vislit saves your documents and notes as HTML files which can be
          imported into any writing editor. Its local database is stored in
          JSON, another standard and highly transferrable data format.
        </p>

        <p>
          Vislit only connects to the internet when it's checking for updated
          versions and knows nothing about your data.
        </p>

        <p>
          If you'd like to use Vislit on multiple computers, you can store your
          data in a Google Drive, Dropbox, or any other cloud syncing service,
          and it all "just works!"
        </p>
      </CardFeature>

      <div>timeline</div>

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
