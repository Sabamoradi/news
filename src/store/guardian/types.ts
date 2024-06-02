// types . . .

export interface State {
  status: "idle" | "loading" | "failed";
}

export interface GuardianData {
  author: string;
  apiUrl: string;
  id: string;
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
  sectionId: string;
  sectionName: string;
  type: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;

}
