/* eslint-disable react/prop-types */
import { memo } from "react";
import Wrapper from "./ItemWrapper";
import Pagination from "./Pagination";

const List = memo(function List({ items, isHadith, pagination }) {
  return (
    <>
      <div className="list">
        {items.map((item) => (
          <Wrapper
            key={item.id}
            isHadith={isHadith}
            content={item}
          />
        ))}
      </div>
      <div className="flex justify-center">
        {isHadith && items.length > 0 && (
          <Pagination
            pagination={pagination}
            onClickPrev={() => {
              console.log("prev");
            }}
            onClickNext={() => {
              console.log("next");
            }}
          />
        )}
      </div>
    </>
  );
});
export default List;
