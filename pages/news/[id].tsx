import Head from "next/head";
import Image from "next/image";
import { Article, getAllArticleIds, getArticleById } from "../../api";

export const getStaticPaths = () => {
  return {
    paths: getAllArticleIds(), // convert to getAllArticleSlugs
    fallback: false,
  };
};

export const getStaticProps = ({ params: { id } }) => {
  return {
    props: {
      article: getArticleById(id), // convert to getArticleBySlug
    },
  };
};

const NewsArticle: React.FC<{ article: Article }> = ({
  article: { title, image, altText, headline, date, contentHtml },
}) => {
  return (
    <>
      <Head>
        <title>{title} | Vislit</title>
      </Head>

      <div className="flex flex-col place-items-center">
        <figure className="flex flex-col w-fit">
          <Image
            src={image}
            width={600}
            height={500}
            layout="intrinsic"
            objectFit="cover"
            alt={altText}
          />
          <figcaption className="text-right italic">{altText}</figcaption>
        </figure>

        <div className="max-w-4xl">
          <h1 className="mt-6 mb-2">{title}</h1>
          <p className="italic">{date}</p>
          <h2 className="mt-4">{headline}</h2>
          <div
            className="leading-relaxed article-spacing max-w-2xl"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </div>
    </>
  );
};

export default NewsArticle;
