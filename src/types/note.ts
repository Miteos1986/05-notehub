export interface Note {
  id: string;
  title: string;
  content: string;
  tag: string;
  created: string; // or Date
  updated: string; // or Date
}

export interface CreateNote {
  title: string;
  content: string;
  tag: string;
}
