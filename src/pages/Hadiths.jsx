/* eslint-disable react-hooks/exhaustive-deps */
import { useHadith } from "../context/HadithContext";
import { useParams, useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

import List from "../components/List";
import Empty from "../components/base/Empty";
import Error from "../components/base/Error";
import Loader from "../components/base/Loader";
import BackButton from "../components/base/Button";

function Hadiths() {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page"));
  const perPage = Number(searchParams.get("per_page"));

  const { chapterId, chapterName } = useParams();
  const [text, setText] = useState("");
  const {
    isLoading,
    error,
    hadiths,
    pagination,
    fetchHadiths,
    fetchChapterHadiths,
  } = useHadith();

  const [value] = useDebounce(text, 1000);

  useEffect(() => {
    if (!chapterId) fetchHadiths({ page, perPage, search: value });
    else fetchChapterHadiths({ chapterId, page, perPage, search: value });
  }, [page, perPage, value]);

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

          <div className="flex items-center justify-center">
            <input
              type="text"
              className="text-colorTheme px-2 py-1 border rounded-lg outline-none focus:border-colorTheme w-full"
              placeholder={"Search..."}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </div>

          <List
            items={hadiths}
            isHadith
            pagination={pagination}
          />
        </>
      )}
    </div>
  );
}

export default Hadiths;
