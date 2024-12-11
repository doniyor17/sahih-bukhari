/* eslint-disable react/prop-types */
import { memo } from "react";
import Wrapper from "./ItemWrapper";

const List = memo(function List({ items, isHadith }) {
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
    </>
  );
});
export default List;
