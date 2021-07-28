export interface IPage<T=any> {
  id: string
  uid: string
  url: string
  type: string
  href: string
  tags: string[]
  first_publication_date: string
  last_publication_date: string
  linked_documents: any[]
  lang: string
  alternate_languages: string[]
  data: T
}
