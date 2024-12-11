/* eslint-disable react/prop-types */

function HadithItem({ hadith }) {
  function textShorter(text, size = 200) {
    if (text?.length > size) {
      return text?.slice(0, size) + `...`;
    }
    return text;
  }
  return (
    <div className="item flex flex-col justify-between">
      <span>{textShorter(hadith?.hadithEnglish)}</span>
    </div>
  );
}

export default HadithItem;
