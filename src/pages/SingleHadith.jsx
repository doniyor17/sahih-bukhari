import { useEffect } from "react";
import { useParams } from "react-router";
import { useHadith } from "../context/HadithContext";

import Loader from "../components/base/Loader";
import Error from "../components/base/Error";
import Button from "../components/base/Button";
function SingleHadith() {
  const { slug, hadithNumber } = useParams();
  const { hadith, isLoading, error, fetchSingleHadith } = useHadith();

  useEffect(() => {
    document.title = `Hadith | ${hadith?.chapter.chapterArabic}`;
  }, [hadith]);

  useEffect(() => {
    fetchSingleHadith(slug, hadithNumber);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, hadithNumber]);

  return (
    <>
      {isLoading && <Loader />}
      {error && !hadith && <Error message={error} />}
      <div className="mb-4 text-black">
        <Button isBack />
        <h2 className="h2 mb-2 mt-4">
          <span>Chapter: </span>
          <span>
            {hadith?.chapter.chapterArabic +
              " - " +
              hadith?.chapter.chapterEnglish}
          </span>
        </h2>
        <p className="mb-2">{hadith?.englishNarrator}</p>
        <p className="text-right mb-2 text-lg leading-loose">
          {hadith?.hadithArabic}
        </p>
        <p className="text-lg mb-4">{hadith?.hadithEnglish}</p>
        <p className="font-bold">Status: {hadith?.status}</p>
      </div>
    </>
  );
}

export default SingleHadith;
