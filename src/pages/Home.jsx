import { useEffect } from "react";
function Home() {
  useEffect(() => {
    document.title = `Home | Sahih al-Bukhari`;
  }, []);
  return (
    <div>
      <div className="flex justify-center">
        <img
          src="/logo.png"
          alt="web site logo image"
          width={200}
          height={200}
        />
      </div>
      <div className="text-center text-base mt-4 mb-8 leading-relaxed text-black md:leading-loose md:text-xl">
        <span className="font-bold">
          Abu ʿAbd Allah Muhammad ibn Ismaʿil ibn Ibrahim al-Juʿfi al-Bukhari{" "}
        </span>
        أبو عبد الله محمد بن إسماعيل بن إبرهيم الجعفي البخاري (July 810 – 1
        September 870) was a 9th-century Muslim muhaddith who is widely regarded
        as the most important hadith scholar in the history of Sunni Islam.
        Al-Bukhariʿs extant works include the hadith collection{" "}
        <span className="font-bold">
          Sahih Al-Bukhari, al-Tarikh al-Kabir, and al-Adab al-Mufrad.
        </span>{" "}
        Al-Bukhari began learning hadith at a young age. He travelled across the
        Abbasid Caliphate and learned under several influential contemporary
        scholars. Bukhari memorized thousands of hadith narrations, compiling
        the Sahih al-Bukhari in 846. He spent the rest of his life teaching the
        hadith he had collected. Towards the end of his life, Bukhari moved to
        Khartank, near Samarkand. Sahih al-Bukhari is revered as the most
        important hadith collection in Sunni Islam. Sahih al-Bukhari and Sahih
        Muslim, the hadith collection of Al-Bukhariʿs student{" "}
        <span className="font-bold">Muslim ibn al-Hajjaj (Imam Muslim)</span>,
        are together known as the Sahihayn and are regarded by Sunnis as the
        most authentic books after the <span className="font-bold">Qur'an</span>
        . It is part of the Kutub al-Sittah, the six most highly regarded
        collections of hadith in Sunni Islam.
      </div>
    </div>
  );
}

export default Home;
