import { RichTextBlock } from "prismic-reactjs";
import { ICategory } from "./category";

import { IImage } from "./image";

export interface IArticle {
  uid: string
  created: string
  modified: string
  title: RichTextBlock[]
  excerpt: RichTextBlock[]
  read_time: string
  article_image: IImage
  body: string
  categories: IArticleCategory[]
}

export interface IArticleCategory extends ICategory {
  slug: string
}