import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface Article {
  id: string;
  slug: string;
  metaDescription: string;
  title: string;
  headline: string;
  image: string;
  altText: string;
  date: string;
  contentHtml: string;
}

const articlesDirectory = join(process.cwd(), "_articles");

/**
 * Get all ids for fetching per article by id route
 * @returns array of {params: id}
 */
export const getAllArticleIds = () =>
  readdirSync(articlesDirectory).map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });

/**
 * Returns articles sorted by most recent.
 * Adding a count returns that count  of most recent articles.
 * @param count optional number of articles to return
 * @returns Article array
 */
export const getArticles = (count?: number): Article[] => {
  const fileNames = readdirSync(articlesDirectory);
  const allArticles: Article[] = fileNames.map((fileName) => {
    // remove the .md extension
    const id = fileName.replace(/\.md$/, "");
    const fullPath = join(articlesDirectory, fileName);
    const fileData = readFileSync(fullPath, "utf8");
    // parse metadata
    const {
      data: { slug, metaDescription, title, headline, image, altText, date },
      content,
    } = matter(fileData);
    // convert markdown to html
    const processedContent = remark().use(html).processSync(content).toString();
    return {
      id,
      slug,
      metaDescription,
      title,
      headline,
      image,
      altText,
      date,
      contentHtml: processedContent,
    };
  });

  const sortedArticles = allArticles.sort(({ date: a }, { date: b }) => {
    if (a < b) return 1;
    else if (a > b) return -1;
    else return 0;
  });

  // making a copy as splice affects the actual array
  const copy = [...sortedArticles];
  return copy.splice(count, sortedArticles.length);
};

/**
 * Return single article by id
 * @param id string
 */
export const getArticleById = (id: string): Article => {
  const fullPath = join(articlesDirectory, `${id}.md`);
  const fileData = readFileSync(fullPath, "utf8");
  const {
    data: { slug, metaDescription, title, headline, image, altText, date },
    content,
  } = matter(fileData);
  const processedContent = remark().use(html).processSync(content).toString();

  return {
    id,
    metaDescription,
    slug,
    title,
    headline,
    image,
    altText,
    date,
    contentHtml: processedContent,
  };
};
