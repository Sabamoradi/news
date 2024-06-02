// types . . .

export interface State {
  status: "idle" | "loading" | "failed";
}

export interface TimesData {
  abstract: string;
  adx_keywords: string;
  asset_id: number;
  byline: string;
  column: null;
  des_facet: string[];
  eta_id: number;
  geo_facet: any[];
  id: number;
  media: any;
  nytdsection: string;
  org_facet: string[];
  per_facet: any[];
  published_date: string;
  section: string;
  source: string;
  subsection: string;
  title: string;
  type: string;
  updated: string;
  uri: string;
  url: string;
}
