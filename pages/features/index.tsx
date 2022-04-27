import Head from "next/head";
import Link from "next/link";
import CardFeature from "../../components/CardFeature";
import GraphicFeature from "../../components/GraphicFeature";

const Features = () => (
  <>
    <Head>
      <title>Features | Vislit </title>
    </Head>

    <div className="flex">
      <GraphicFeature />

      <div className="w-1/2">
        <h1>Only the essentials</h1>
        <p>
          Too many writing tools are general purpose or have so many features
          they're overwhelming. Vislit aims to be as simple as possible, so you
          can focus on writing, while allowing for managing projects, documents,
          folders, and notes easily.
        </p>
        <p>
          Vislit focuses on being as simple as possible. - Project management.
          The core of Vislit is that it keeps your writing projects separated.
          By selecting or starting a new project, you only see documents, notes,
          goals, and progress for that project. - Minimal writing editor. For
          the most used formatting needs and easy file backups. - Global note
          editor. Have any of your project notes available anywhere - Goals. Set
          word count goals for every day, week, or month. - Progress. Track
          whether you proofread, edited, revised, along with how many words you
          write - Visualization. See your progress in a dashboard and receive
          suggestions on how you can improve on your goals
        </p>
      </div>
    </div>

    <CardFeature header="Projects at the core" isReverse className={"mb-12"}>
      <p>
        Each project you create has its own document files, note files, goals,
        and progress. By keeping them separate and organized automatically,
        you'll always be able to find old work and stay focused on the current.
        Finished a project? Set it is as completed. Not going to finish that
        story, but don't want to delete it? Archive it.
      </p>
    </CardFeature>

    <CardFeature
      header="Minimalist writing and note taking"
      className={"mb-12"}
    >
      <p className="mb-8">
        Most features in well-known writing software (like Word and Google Docs)
        are geared for office work or live collaboration. This can be great in
        some situations, but Vislit includes only what's necessary for efficient
        creative writing, making the interface uncluttered, simple, and fast.
      </p>
      <p>
        By integrating note-taking, you no longer need to manage multiple files
        or jump to another program. And by having notes available from anywhere
        on the app, you can reference them in the middle of a writing session
        without losing your place.
      </p>
    </CardFeature>

    <CardFeature
      header="Minimalist writing and note taking"
      isReverse
      className={"mb-12"}
    >
      <p className="mb-8">
        The best way to finish anything is by setting a goal. That's why Vislit
        allows for easy goal setting. If you set an ambitious goal of writing
        1000 words every day (about 4 or 5 pages), but find that's too much, you
        can modify your goal. You'll be able to keep track of your previous
        goals in the goal log to see how you've changed over time.
      </p>
      <p>
        Maybe you didn't write 1000 words every day, but you spent an hour
        proofreading, editing, or revising? That's great, too! Those can count
        towards goal completion so you track of all of your hard work!
      </p>
    </CardFeature>

    <CardFeature header="See your progress" className={"mb-12"}>
      <p>
        Not only will you have more pages, but as you enter your progress, your
        visualization dashboard will develop, giving you insight into how you
        write and the best times you write. Make changes to increase your goals
        or relax them if it's too much.
      </p>
    </CardFeature>

    <div>timeline</div>

    {/* Center the download card on page */}
    <div className="bg-gray flex justify-center py-5 max-w-xl rounded-md">
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
  </>
);

export default Features;
