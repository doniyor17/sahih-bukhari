import { useEffect } from "react";
import { useParams } from "react-router";

import { useChapter } from "../context/ChapterContext";

import List from "../components/List";
import Empty from "../components/base/Empty";
import Error from "../components/base/Error";
import Loader from "../components/base/Loader";

function Chapter() {
  const { slug } = useParams();
  const { isLoading, error, chapters, fetchChapters } = useChapter();

  useEffect(() => {
    fetchChapters(slug);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  useEffect(() => {
    document.title = `Chapters | Sahih al-Bukhari`;
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <Error message={error} />}
      {chapters.length <= 0 && !error ? (
        <Empty />
      ) : (
        <List
          items={chapters}
          isHadith={false}
        />
      )}
    </div>
  );
}

export default Chapter;
