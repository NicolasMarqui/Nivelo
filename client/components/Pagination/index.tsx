import { PaginationWrapper } from "./Pagination.style";

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    handleClick: (i: number) => any;
}

const Pagination = ({
    totalPages,
    currentPage,
    handleClick,
}: PaginationProps) => {
    return (
        <PaginationWrapper>
            {totalPages === 1 ? (
                <h6>Você chegou ao fim...</h6>
            ) : (
                <ul>
                    {Array(totalPages)
                        .fill("")
                        .map((el, i) => (
                            <li
                                onClick={() => handleClick(i + 1)}
                                className={`${
                                    currentPage === i + 1
                                        ? "pagination__active"
                                        : ""
                                }`}
                            >
                                <p>{i + 1}</p>
                            </li>
                        ))}
                </ul>
            )}
        </PaginationWrapper>
    );
};

export default Pagination;
