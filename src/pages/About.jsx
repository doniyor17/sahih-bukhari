import { useEffect } from "react";
function About() {
  useEffect(() => {
    document.title = `About | Sahih al-Bukhari`;
  }, []);
  return (
    <div className="mt-5 text-black text-center">
      <h2 className="text-center text-[20px] md:text-[32px]">About</h2>
      <div className="text-[16px] md:text-[20px] mt-6 mb-6">
        <p className="mb-4">
          May Allah give victory to Muslims in Palestine, Rohingya, Kashmir and
          everywhere in the world <br /> اللهم انصر المسلمين في فلسطين،
          والروهينجا، وكشمير، وفي كل مكان في العالم.
        </p>
        <p className="mb-4">
          This web site developed for seek of Allah pleasure and free. <br /> تم
          تطوير هذا الموقع لوجه الله تعالى وهو مجاني.
        </p>
        <p>
          Remember in your duas and prayers. <br /> يرجى تذكرنا في دعائكم
        </p>
        <p className="text-[16px] md:text-[20px] mt-6">
          We used materials of{" "}
          <a
            className="underline text-blue-700"
            href="https://www.hadithapi.com/"
            target="_blank"
          >
            hadithapi.com
          </a>{" "}
          , May Allah reward them with good.
          <br /> استخدمنا مواد من الموقع المذكور أعلاه ,جزاهم الله خيرًا.
        </p>
      </div>
    </div>
  );
}

export default About;
