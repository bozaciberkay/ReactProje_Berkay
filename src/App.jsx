import { useTranslation } from "react-i18next";
import Amac from "./components/Amac";
import Hakkimizda from "./components/Hakkimizda";
import Navbar from "./components/Navbar";
import Nedir from "./components/Nedir";
import Proses from "./components/Proses";
import Tarihce from "./components/Tarihçe";
import Teams from "./components/Teams";

const App = () => {
  const { i18n } = useTranslation();
  return (
    <>
      {/* <Navbar /> */}
      {/* className=" h-[100vh] w-full bg-[url('/homepage.png')] bg-cover bg-center" */}
      <main className="antialiased ">
        <Navbar />
        <div
          className={`h-[100vh] w-full  ${
            i18n.language === "tr"
              ? "bg-[url(trimg.png)] "
              : "bg-[url(enimg.png)]"
          } bg-cover bg-center  `}
        ></div>
        {/* <section className="backdrop-brightness-50 ">
          <div
            className={`h-[100vh] w-full  ${
              i18n.language === "tr"
                ? "bg-[url(trimg.png)] "
                : "bg-[url(enimg.png)]"
            } bg-cover bg-center  `}
          >
          
          </div>
        </section> */}
        <section id="hakkimizda">
          <Hakkimizda />
        </section>
        <section id="amac">
          <Amac />
        </section>
        <section id="tarihçe">
          <Tarihce />
        </section>
        <section id="nedir">
          <Nedir />
        </section>
        <section id="üretim">
          <Proses />
        </section>
        <section id="teams">
          <Teams />
        </section>
      </main>
    </>
  );
};

export default App;
