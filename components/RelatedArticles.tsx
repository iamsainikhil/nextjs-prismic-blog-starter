import { Fragment } from "react"

import Listing from "./Listing"
import { IPage, IArticleCategory } from "../schemas"

interface RelatedArticlesProps {
  uid: string
  categories: { category: IArticleCategory }[]
  tags: string[]
  related: IPage[]
}

const RelatedArticles = ({
  uid,
  categories,
  tags: articleTags,
  related,
}: RelatedArticlesProps) => {
  // get slugs from categories of the current article
  const articleSlugs = categories.map(({ category }) => category.slug)
  console.info(articleSlugs)
  let relatedArticles = []

  relatedArticles = related
    .filter((article) => article.uid !== uid) // remove current article from articles list
    .map((article) => {
      const { categories } = article.data;
      const { tags } = article;
      let categoryMatch = false;
      let tagMatch = false;

      // check article categories slug inclluded in articleSlugs
      console.info(categories)
      categories.forEach(({ category }) => {
        if (articleSlugs.includes(category.slug)) {
          categoryMatch = true
        }
      })

      // check article tag included in articleTags
      tags.forEach((tag) => {
        if (articleTags.includes(tag)) {
          tagMatch = true;
        }
      })

      if (categoryMatch || tagMatch) {
        return article
      }
    })
    .filter((article) => article !== undefined) // for articles that don't match both category & tag will be undefined
    .slice(0, 3) // limit relatedArticles number to 3 or any number of your choice

  return (
    <Fragment>
      <h3 sx={{ textAlign: "center", variant: "styles.h3" }}>
        Related Articles
      </h3>
      <div>
        {relatedArticles.length > 0 ? (
          <Listing articles={relatedArticles} />
        ) : (
          <p
            style={{
              textAlign: "center",
              fontStyle: "italic",
            }}
          >
            No related articles found!
          </p>
        )}
      </div>
    </Fragment>
  )
}

export default RelatedArticles
