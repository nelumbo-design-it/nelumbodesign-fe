export interface BLOG_POST_INTERFACE {
  id: string;
  data: Date;
  title: string;
  description: string;
  list_paragraph: Listparagraph[];
  image: string;
}

export interface Listparagraph {
  title: string;
  description: string;
}