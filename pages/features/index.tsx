import Head from "next/head";
import CardFeature from "../../components/CardFeature";
import GraphicFeature from "../../components/GraphicFeature";

const Features = () => (
  <>
    <Head>
      <title>Features | Vislit </title>
    </Head>

    <div className="flex">
      <GraphicFeature />
      <h1>Only the essentials</h1>
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

    <div>download card</div>
  </>
);

export default Features;
