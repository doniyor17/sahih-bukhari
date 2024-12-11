/* eslint-disable react/prop-types */
function Pagination({ onClickPrev, onClickNext }) {
  return (
    <div className="w-full">
      <div className="pagination">
        <button
          onClick={onClickPrev}
          className="btn"
        >
          Previous
        </button>
        <button
          onClick={onClickNext}
          className="btn"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
