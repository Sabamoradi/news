export const newsApiCategories = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",

];

export interface SourceConfig{
  id:number,
  title:string
}

export const sourcesConfig = [
  {
    id:1,
    title:"News.org"
  },
  {
    id:2,
    title:"Guardian"
  },
  {
    id:3,
    title:"New York Times"
  },
]

export interface MenuItem{
  id:number,
  route:string,
  title:string
}
export const menuItem  = [
  {
    id:1,
    route:'/',
    title:"Home"
  },
  {
    id:2,
    route:'/you',
    title:"For You"
  },
  
]