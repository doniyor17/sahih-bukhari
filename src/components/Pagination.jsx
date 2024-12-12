/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router";

function Pagination({ onClickPrev, onClickNext, pagination }) {
  const [searchParams, setSearchParams] = useSearchParams();

  if (!pagination) return null;
  const { perPage, currentPage, lastPage, total } = pagination;

  function selectPage(page) {
    return () => {
      searchParams.set("page", page);
      setSearchParams(searchParams);
    };
  }

  function handlePerPage(e) {
    if (total / Number(e.target.value) > lastPage) return;
    if (e.key === "Enter" && e.target.value > 0 && e.target.value < 100) {
      searchParams.set("per_page", e.target.value);
      setSearchParams(searchParams);
    }
  }
  return (
    <div className="flex justify-center items-center mt-3 mb-2">
      <div className="pagination">
        <button
          onClick={onClickPrev}
          className="btn"
        >
          <span className="fa-solid fa-arrow-left"></span>
        </button>
        {Array(Math.ceil(total / perPage) > 5 ? 5 : Math.ceil(total / perPage))
          .fill(0)
          .map((_, index) => {
            if (index === 2) {
              return (
                <span
                  className="text-colorDark mx-4 text-xl"
                  key={index}
                >
                  {"..."}
                </span>
              );
            }
            if (index === 3) {
              return (
                <button
                  key={index}
                  className={`btn ${
                    lastPage - 1 === currentPage ? "activepage" : ""
                  }`}
                  onClick={selectPage(lastPage - 1)}
                >
                  {lastPage - 1}
                </button>
              );
            }
            if (index === 4) {
              return (
                <button
                  key={index}
                  className={`btn ${
                    lastPage === currentPage ? "activepage" : ""
                  }`}
                  onClick={selectPage(lastPage)}
                >
                  {lastPage}
                </button>
              );
            }
            return (
              <button
                key={index}
                className={`btn ${
                  index + 1 === currentPage ? "activepage" : ""
                }`}
                onClick={selectPage(index + 1)}
              >
                {index + 1}
              </button>
            );
          })}
        <button
          onClick={onClickNext}
          className="btn"
        >
          <span className="fa-solid fa-arrow-right"></span>
        </button>
      </div>
      <div className="text-colorDark text-lg ml-3">
        <span>Per page/</span>{" "}
        <input
          type="text"
          placeholder={perPage}
          className="outline-none rounded-lg px-2 py-1 w-[40px]"
          onKeyDown={handlePerPage}
        />
      </div>
    </div>
  );
}

export default Pagination;
