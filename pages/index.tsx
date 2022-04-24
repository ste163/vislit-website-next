import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Article, getArticles } from "../api";
import ImageTextOverlay from "../components/ImageTextOverlay";
import LogoTitle from "../components/LogoTitle";

export const getStaticProps = () => {
  return {
    props: {
      articles: getArticles(0), // need more articles to properly get the counts
    },
  };
};

const cards = [
  {
    imageSrc: "/images/test-image.png",
    altText: "test",
    heading: `Distraction-free writing`,
    text: `For any sized document with everything you expect from Microsoft
      Word or Google Docs, but without the bloated extras like "Mail
      Merge"`,
  },
  {
    imageSrc: "/images/test-image.png",
    altText: "test",
    heading: `Notes anywhere`,
    text: `Anywhere in the application, you can access your notes.
      No swapping between programs to find character references`,
  },
  {
    imageSrc: "/images/test-image.png",
    altText: "test",
    heading: `Project management`,
    text: `View summary and list information on all of your projects,
      organized by currently in progress, completed, and archived`,
  },
  {
    imageSrc: "/images/test-image.png",
    altText: "test",
    heading: `Goals, Progress, Visualizations`,
    text: `The hardest part about writing is keeping at it.
      Easily set and modify goals and visualize your progress"`,
  },
];

const Home: React.FC<{ articles: Article[] }> = ({ articles }) => {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Vislit</title>
      </Head>

      <section className="flex flex-col self-center w-11/12 lg:flex-row">
        <div className="mr-12  w-1/2 self-center">
          <LogoTitle />
          <h2 className="mt-12 mb-6">the app for writers</h2>
          <p className="text-lg max-w-lg mb-6">
            Write and manage short stories, novels, poems, or any writing
            project. Keep your notes, goals, and documents cleanly organized and
            accessible.
          </p>

          <div className="card flex px-5 py-5 items-center max-w-2xl">
            <p className="w-1/2 mr-4">
              Vislit is free and open source software made by a creative writer.
              Quality writing software should be available to anyone who wants
              to finish that first novel or tenth.
            </p>

            <div className="w-1/2 flex flex-col items-center">
              <Link href="/download">
                <div className="bg-black flex flex-col items-center px-4 py-2 rounded-md cursor-pointer">
                  <span className="text-2xl font-bold">Download</span>
                  <div className="bg-primary font-black text-3xl my-2 px-3 py-1 rounded-sm">
                    v1.0
                  </div>
                  <span>Linux, Mac, Windows</span>
                </div>
              </Link>
              <Link href="/features">
                <span className="cursor-pointer text-2xl font-bold text-center mt-2">
                  Learn more
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-1/2 block">
          <Image
            src={"/images/test-image.png"}
            layout="responsive"
            height={300}
            width={400}
            alt={"test"}
          />
        </div>
      </section>

      <section className="mt-16 self-center">
        <h2 className="mb-4">Latest news</h2>

        <div className="card flex px-6 py-5 h-full">
          <div className="flex">
            <Image
              className="w-1/2"
              src={articles[0].image}
              height={175}
              width={175}
              alt={articles[0].altText}
            />
            <div className="flex flex-col  justify-between ml-3">
              <div className="flex flex-col">
                <h3>{articles[0].title}</h3>
                <p className="my-4">{articles[0].headline}</p>
                <span className="text-sm">{articles[0].date}</span>
              </div>
              <Link href={`/news/${articles[0].id}`}>
                <span className="cursor-pointer font-bold text-right">
                  Read more
                </span>
              </Link>
            </div>
          </div>

          <div className="w-2 bg-black rounded-full mx-8" />

          <div className="flex flex-col justify-between">
            <div>
              {articles.map(({ id, title }, index) =>
                // skip first article as it's already being displayed
                index === 0 ? null : (
                  <div
                    key={id}
                    className="underline cursor-pointer text-md font-bold"
                  >
                    <Link href={`/news/${id}`}>
                      <div>
                        <a>{title}</a>
                      </div>
                    </Link>
                  </div>
                )
              )}
            </div>
            <div className="self-center cursor-pointer bg-primary py-2 px-3 font-bold rounded-sm">
              <Link href={`/news`}>
                <span>See all news</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="self-center w-5/6 max-w-screen-xl">
        <h2 className="mt-16 mb-6">The new way to write</h2>
        <p className="text-lg max-w-lg mb-6">
          With a clean, simple interface designed to keep you writing and only
          the features needed for productivity.
        </p>

        <div className="lg:grid gap-10 grid-cols-2 md:flex flex-col">
          {cards.map(({ imageSrc, altText, heading, text }, index) => (
            <div key={index} className="md:my-0 sm:my-10">
              <ImageTextOverlay
                imageSrc={imageSrc}
                altText={altText}
                heading={heading}
                text={text}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
