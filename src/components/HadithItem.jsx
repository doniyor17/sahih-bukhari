/* eslint-disable react/prop-types */

function HadithItem({ hadith }) {
  function textShorter(text, size = 200) {
    if (text?.length > size) {
      return text?.slice(0, size) + `...`;
    }
    return text;
  }
  return (
    <div className="item">
      <span>{textShorter(hadith?.hadithEnglish)}</span>
    </div>
  );
}

export default HadithItem;
