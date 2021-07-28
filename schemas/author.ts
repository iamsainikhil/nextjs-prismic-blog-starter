import { RichTextBlock } from "prismic-reactjs";

import { IImage } from ".";

export interface IAuthor {
  uid: string
  name: string
  bio: RichTextBlock[]
  avatar: IImage
  social_links: SocialLink[]
}

export interface SocialLink {
  platform_name: string
  platform_url: string
}
