import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import type { Article } from "./Article";

/**
 * Returns articles sorted by most recent.
 * Adding a count returns that count  of most recent articles.
 * @param count optional number of articles to return
 * @returns
 */
export function getArticles(count?: number): Article[] {
  const articlesDirectory = join(process.cwd(), "articles");
  const fileNames = readdirSync(articlesDirectory);

  const allArticles: Article[] = fileNames.map((fileName) => {
    // remove the .md extension
    const id = fileName.replace(/\.md$/, "");
    const fullPath = join(articlesDirectory, fileName);
    const fileContents = readFileSync(fullPath, "utf8");
    // parse metadata/frontmatter
    const {
      data: { slug, title, headline, image, date },
    } = matter(fileContents);

    return {
      id,
      slug,
      title,
      headline,
      image,
      date,
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
}
