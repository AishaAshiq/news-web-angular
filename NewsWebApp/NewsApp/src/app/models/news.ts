export interface Source{
    "id" : string;
    "name" : string;
}

export interface News{
  "author" : string;
  "content" : string;
  "description" : string;
  "publishedAt" : string;
  "source" : Array<Source>;
  "title" : string;
  "url" : string;
  "urlToImage" : string;  
}