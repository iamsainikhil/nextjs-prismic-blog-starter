import { Language } from "prism-react-renderer"
import { RichTextBlock } from "prismic-reactjs"
import { ISlice, ICategory, IImage } from "."

export interface IArticle {
  uid: string
  created: string
  modified: string
  title: RichTextBlock[]
  excerpt: RichTextBlock[]
  read_time: string
  article_image: IImage
  body: ISlice[]
  categories: {
    category: IArticleCategory
  }[]
}

export interface IArticleMeta {
  website_title: RichTextBlock[]
  website_description: RichTextBlock[]
  website_url: string
  website_image: {
    alt: string
    fluid: string
    url: string
  }
}

export interface IArticleCategory extends ICategory {
  id: string
  type: string
  slug: string
  tags: string[]
  lang: Language
  link_type: string
}
