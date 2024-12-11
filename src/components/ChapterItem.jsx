/* eslint-disable react/prop-types */

function ChapterItem({ chapter }) {
  function textShorter(text, size) {
    if (text.length > size) {
      return text?.slice(0, size) + `...`;
    }
    return text;
  }
  return (
    <div className="item min-h-[130px]">
      <div className="flex flex-col">
        <h4 className="mb-1 text-sm sm:text-xl font-bold">
          {textShorter(chapter.chapterEnglish, 40)}
        </h4>
        <p className="mb-1">
          <span className="font-bold mr-1">Chapter number:</span>
          <span>{chapter.chapterNumber}</span>
        </p>
      </div>
    </div>
  );
}

export default ChapterItem;
