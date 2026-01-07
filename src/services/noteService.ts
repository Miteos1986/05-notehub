import axios from "axios";
import type { Note, CreateNote } from "../types/note";

axios.defaults.baseURL = "https://notehub-public.goit.study/api";
const TOKEN = import.meta.env.VITE_NOTEHUB_TOKEN;

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export const fetchNotes = async (
  page: number,
  perPage: number,
  search: string
): Promise<FetchNotesResponse> => {
  const response = await axios.get<FetchNotesResponse>("/notes", {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    params: { page, perPage, search },
  });

  return response.data;
};

export const createNote = async (payload: CreateNote): Promise<Note> => {
  const response = await axios.post("/notes", payload, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  return response.data;
};

export const deleteNote = async (noteId: Note["id"]): Promise<Note> => {
  const response = await axios.delete<Note>(`/notes/${noteId}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  return response.data;
};
