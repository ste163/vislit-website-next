import Head from "next/head";
import Image from "next/image";
import { Article, getAllArticleIds, getArticleById } from "../../api";

export const getStaticPaths = () => {
  return {
    paths: getAllArticleIds(),
    fallback: false,
  };
};

export const getStaticProps = ({ params: { id } }) => {
  return {
    props: {
      article: getArticleById(id),
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
      <figure className="flex flex-col w-fit">
        <Image src={image} width={500} height={500} alt={altText} />
        <figcaption className="text-right italic">{altText}</figcaption>
      </figure>

      <h1>{title}</h1>
      <p>{date}</p>
      <h2>{headline}</h2>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </>
  );
};

export default NewsArticle;
