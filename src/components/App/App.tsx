import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchNotes } from "../../services/noteService";
import css from "./App.module.css";
import NoteList from "../NoteList/NoteList";
import { useState } from "react";
import Pagination from "../Pagination/Pagination";
import Modal from "../Modal/Modal";
import NoteForm from "../NoteForm/NoteForm";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function App() {
  const [page, setPage] = useState<number>(1);
  const [perPage] = useState<number>(12);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const { data, isLoading, isError, isSuccess, isFetching } = useQuery({
    queryKey: ["notes", page],
    queryFn: () => fetchNotes(page, perPage),
    placeholderData: keepPreviousData,
  });

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        <button onClick={openModal} className={css.button}>
          Create note +
        </button>
        {isModalOpen && (
          <Modal onClose={closeModal}>
            <NoteForm onClose={closeModal} />
          </Modal>
        )}
        {/* SearchBox */}
        {/* Create note button */}
        {(isLoading || isFetching) && (
          <strong>
            <Loader />
          </strong>
        )}
        {isError && (
          <p>
            <ErrorMessage />
          </p>
        )}
        {isSuccess && data.totalPages > 1 && (
          <Pagination
            currentPage={page}
            totalPage={data.totalPages}
            onPageChange={handlePageChange}
          />
        )}

        {isSuccess && data.notes.length > 0 && <NoteList notes={data.notes} />}
      </header>
    </div>
  );
}

export default App;
