import css from "./Pagination.module.css";
import ReactPaginate from "react-paginate";

export interface ReactPaginateProps {
  currentPage: number;
  totalPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPage,
  onPageChange,
}: ReactPaginateProps) => {
  return (
    <ReactPaginate
      pageCount={totalPage}
      forcePage={currentPage - 1}
      onPageChange={({ selected }) => onPageChange(selected + 1)}
      containerClassName={css.pagination}
      activeClassName={css.active}
      nextLabel="→"
      previousLabel="←"
    />
  );
};

export default Pagination;
