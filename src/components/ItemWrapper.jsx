import { Link } from "react-router";

import HadithItem from "./HadithItem";
import ChapterItem from "./ChapterItem";

/* eslint-disable react/prop-types */
function Wrapper({ content, isHadith }) {
  return (
    <Link
      className="item_wrapper min-h-[130px]"
      key={content.id}
      to={`${
        isHadith
          ? `/hadiths/${content.bookSlug}/${content.hadithNumber}`
          : `/chapters/${content.id}/${content.chapterEnglish}`
      }`}
    >
      {isHadith ? (
        <HadithItem hadith={content} />
      ) : (
        <ChapterItem chapter={content} />
      )}
    </Link>
  );
}

export default Wrapper;
