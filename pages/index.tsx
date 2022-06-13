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
    imageSrc: "/images/home/writer.webp",
    altText: "Writing editor",
    heading: "Distraction-free writing",
    text: `Streamlined for any creative writing document without the bloated extras like "Mail
      Merge"`,
    link: "/features#writer",
  },
  {
    imageSrc: "/images/home/notes.webp",
    altText:
      "Close-up of notes section open while on the writing editor is open",
    heading: "Accessible note-taking",
    text: `Anywhere in the application, you can access your notes.
      No more swapping between applications and losing your flow`,
    link: "/features#writer",
  },
  {
    imageSrc: "/images/home/projects.webp",
    altText: "List of writing projects and a project summary card",
    heading: "Clean project management",
    text: `View summary and list information on all of your projects,
      organized by in-progress, completed, and archived`,
    link: "/features#projects",
  },
  {
    imageSrc: "/images/home/progress.webp",
    altText: "Dashboard with graphs of writing progress",
    heading: "Robust tracking for goals, progress, & data visualizations",
    text: `The hardest part about writing is keeping at it.
      Easily set and modify goals and visualize your progress`,
    link: "/features#goals",
  },
];

const Home: React.FC<{ articles: Article[] }> = ({ articles }) => {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Vislit</title>
        <meta
          name="description"
          content="Vislit is free and open source desktop creative writing software. It allows writers to manage multiple writing projects, take notes, and set and track goals"
        />
      </Head>

      <section className="flex flex-col lg:flex-row self-center w-full 2xl:w-10/12">
        <div className="mr-0 lg:mr-12 w-full lg:w-2/3 self-center mb-8 xl:mb-0">
          <LogoTitle />
          <h2 className="mt-12 mb-6">the app for writers</h2>
          <p className="text-lg max-w-lg mb-6">
            Write and manage short stories, novels, poems, or any writing
            project. Keep your notes, goals, and documents organized and
            accessible.
          </p>

          <div className="card flex flex-col md:flex-row px-5 py-5 items-center max-w-2xl">
            <p className="max-w-md md:w-1/2 mb-4 md:mb-0 mr-0 md:mr-4">
              Vislit is free and open source software made by a creative writer.
              Powerful writing software should be available to anyone who wants
              to finish that first novel or fifth.
            </p>

            <div className="w-1/2 flex flex-col items-center">
              <Link href="/download">
                <a className="bg-black flex flex-col items-center px-4 py-2 rounded-md cursor-pointer">
                  <span className="text-2xl font-bold">Download</span>
                  <div className="bg-primary font-black text-3xl my-2 px-3 py-1 rounded-sm">
                    TBD
                  </div>
                  <span>Linux, Mac, Windows</span>
                </a>
              </Link>
              <Link href="/features">
                <a className="text-2xl font-bold text-center mt-2">
                  all features
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="relative place-self-center w-full h-[300px] lg:h-[520px]">
          <Image
            src={"/images/home/hero.webp"}
            layout="fill"
            objectFit="contain"
            alt={"Vislit's summary page with note editor open"}
          />
        </div>
      </section>

      <section className="w-5/6 max-w-5xl mt-16 self-center">
        <h2 className="mb-4">latest news</h2>

        <div className="card flex flex-col px-6 py-5 h-full md:flex-row">
          <div className="flex flex-col md:flex-row">
            <div className="place-self-center mb-2 md:mb-0">
              <Image
                src={articles[0].image}
                height={175}
                width={175}
                objectFit="cover"
                alt={articles[0].altText}
              />
            </div>
            <div className="flex flex-col justify-between ml-3 max-w-sm">
              <div className="flex flex-col">
                <h3>{articles[0].title}</h3>
                <p className="my-4">{articles[0].headline}</p>
                <span className="text-sm">{articles[0].date}</span>
              </div>
              <Link href={`/news/${articles[0].id}`}>
                <a className="font-bold text-right">Read this article</a>
              </Link>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="hidden md:block w-1 bg-black rounded-full mx-8"
          />
          <div
            aria-hidden="true"
            className="block md:hidden w-full bg-black rounded-full my-8 h-1"
          />

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="mb-4">Recent news</h3>
              <ul>
                {articles.map(({ id, title }, index) =>
                  // skip first article as it's already being displayed
                  index === 0 ? null : (
                    <li
                      key={id}
                      className="underline cursor-pointer text-md font-bold"
                    >
                      <Link href={`/news/${id}`}>
                        <a>{title}</a>
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="self-center cursor-pointer bg-primary py-2 px-3 font-bold rounded-sm mt-8 md:mt-0">
              <Link href={`/news`}>
                <a>all news</a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="self-center w-5/6 max-w-screen-xl">
        <h2 className="mt-16 mb-6">the new way to write</h2>
        <p className="text-lg max-w-md mb-6">
          With a clean, simple interface designed to keep you writing. Only the
          features needed for productivity.
        </p>

        <div className="flex-col flex lg:grid gap-10 grid-cols-2">
          {cards.map(({ imageSrc, altText, heading, text, link }, index) => (
            <Link key={index} href={link}>
              <a className="my-5 md:my-0">
                <ImageTextOverlay
                  imageSrc={imageSrc}
                  altText={altText}
                  heading={heading}
                  text={text}
                />
              </a>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
