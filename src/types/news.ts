export interface Multimedia {
  rank: number;
  subtype: string;
  caption: null | string;
  credit: null | string;
  type: string;
  url: string;
  height: number;
  width: number;
  legacy?: {
    xlarge?: string;
    xlargewidth?: number;
    xlargeheight?: number;
  };
  subType: string;
  crop_name: string;
}

export interface NewsArticle {
  abstract: string;
  web_url: string;
  snippet: string;
  lead_paragraph: string;
  source: string;
  multimedia: Multimedia[];
}

export interface Meta {
  hits: number;
  offset: number;
  time: number;
}

export interface NewsApiResponse {
  docs: NewsArticle[];
  meta: Meta;
}
