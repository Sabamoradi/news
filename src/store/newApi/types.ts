// types . . .


export interface SourceItem{
  id:number,
  name:string
}
export interface NewsApiData {
  author: string | null;
  content: string;
  description: string | null;
  publishedAt: string;
  source: SourceItem;
  title: string;
  url: string;
  urlToImage: string | null;
}
