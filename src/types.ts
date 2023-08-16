export interface NewsArticle {
  title: string;
  author: string;
  published_date: string;
  published_date_precision: string;
  link: string;
  clean_url: string;
  excerpt: string;
  summary: string;
  rights: string;
  rank: number;
  topic: string;
  country: string;
  language: string;
  authors: string;
  media: string;
  is_opinion: boolean;
  twitter_account: string;
  _score: null | number;
  _id: string;
}
