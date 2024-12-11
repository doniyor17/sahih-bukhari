/* eslint-disable react-hooks/exhaustive-deps */
import { useHadith } from "../context/HadithContext";
import { useParams } from "react-router";
import { useEffect } from "react";

import List from "../components/List";
import Empty from "../components/base/Empty";
import Error from "../components/base/Error";
import Loader from "../components/base/Loader";
import BackButton from "../components/base/Button";

function Hadiths() {
  const { chapterId, chapterName } = useParams();
  const { isLoading, error, hadiths, fetchHadiths, fetchChapterHadiths } =
    useHadith();

  useEffect(() => {
    if (!chapterId) fetchHadiths();
    else fetchChapterHadiths(chapterId);
  }, []);

  useEffect(() => {
    document.title = `Hadiths | Sahih al-Bukhari`;
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <Error message={error} />}
      {hadiths.length <= 0 && !error ? (
        <Empty />
      ) : (
        <>
          <BackButton isBack />
          <h2 className="my-3 text-center font-bold text-black text-[20px] sm:text-[32px]">
            {chapterName ? <span>Chapter: {chapterName}</span> : "All hadiths"}
          </h2>

          <List
            items={hadiths}
            isHadith
          />
        </>
      )}
    </div>
  );
}

export default Hadiths;
