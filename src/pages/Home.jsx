import { useEffect } from "react";
import { Link } from "react-router";

function Home() {
  useEffect(() => {
    document.title = `Home | Sahih al-Bukhari`;
  }, []);
  return (
    <>
      <div className="text-center text-base mt-6 mb-8 leading-relaxed text-black md:leading-loose md:text-xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
        quam saepe voluptatibus quidem velit earum neque nemo enim esse
        corporis, libero nam sapiente officiis quasi blanditiis aliquid magni
        necessitatibus nostrum tempora reiciendis doloribus iusto est. Dolore
        natus est error veniam?
      </div>
      <div className="flex items-center w-full flex-col sm:w-1/2 sm:flex-row justify-around mx-auto">
        <Link
          to="/chapters"
          className="btn mb-3 sm:mb-0"
        >
          <h2 className="text-[16px] md:text-[24px] ">Chapters</h2>
        </Link>
        <Link
          to="/hadiths"
          className="btn"
        >
          <h2 className="text-[16px] md:text-[24px]">All hadiths</h2>
        </Link>
      </div>
    </>
  );
}

export default Home;
