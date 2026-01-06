import axios from "axios";
import type { Note, CreateNote } from "../types/note";

axios.defaults.baseURL = "https://notehub-public.goit.study/api";

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export const fetchNotes = async (
  page: number,
  perPage: number
): Promise<FetchNotesResponse> => {
  const response = await axios.get<FetchNotesResponse>("/notes", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImN2ZmhuODFAZ21haWwuY29tIiwiaWF0IjoxNzY3NjkyNjMwfQ.CBsuKeSHwKXqySHiBLowPjyltXsyXieIgaIa_cTgCTI",
    },
    params: { page, perPage },
  });

  return response.data;
};

export const createNote = async (payload: CreateNote): Promise<Note> => {
  const response = await axios.post("/notes", payload, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImN2ZmhuODFAZ21haWwuY29tIiwiaWF0IjoxNzY3NjkyNjMwfQ.CBsuKeSHwKXqySHiBLowPjyltXsyXieIgaIa_cTgCTI",
    },
  });
  return response.data;
};

//export const deleteNote = async (): Promise<void> => {};
