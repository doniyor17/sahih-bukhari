import { useEffect } from "react";
function About() {
  useEffect(() => {
    document.title = `About | Sahih al-Bukhari`;
  }, []);
  return (
    <div className="h1 mt-5 text-black">
      <h2 className="text-center text-[20px] md:text-[32px]">About</h2>
      <div className="text-[16px] md:text-[20px] mt-6 font-semibold mb-6">
        <p className="mb-2">
          May Allah give victory to Muslims in Palestine, Rohingiya, Kashmir and
          everywhere in the world
        </p>
        <p className="mb-2">
          This web site developed for seek Allah`s blessings
        </p>
        <p>Please, make dua if you find this site is helpful</p>
      </div>
      <p className="text-[16px] md:text-[20px] mt-6 font-semibold">
        We used materials of{" "}
        <a
          className="underline text-blue-700"
          href="https://www.hadithapi.com/"
          target="_blank"
        >
          hadithapi.com
        </a>{" "}
        to get hadiths, chapters May Allah reward them with good
      </p>
    </div>
  );
}

export default About;
