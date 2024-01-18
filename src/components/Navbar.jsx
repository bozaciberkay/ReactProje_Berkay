import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import MobileNav from "./MobileNav";
import { useTranslation } from "react-i18next";
import Dil from "./Dil";

const Navbar = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  const { t } = useTranslation();
  const [item, setItem] = useState({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
  });

  return (
    <div
      className={` border-b shadow-lg  fixed top-0 left-0 z-[999] w-full ${
        "bg-white"
      } `}
    >
      {/* className="border-b shadow-lg bg-transparent fixed top-0 left-0 z-[999] w-full "> */}
      <header className=" wrapper flex  items-center  justify-between !py-1   text-xl  font-bold  ">
        {/* <h1 className="  text-2xl font-bold bg-clip-text bg-gradient-to-r from-rose-500 via-red-400 to-red-500 text-transparent">
          PASSAD
        </h1> */}

        {/* <button onClick={() => clickHanlde("en")}>en</button>
        <button onClick={() => clickHanlde("tr")}>tr</button> */}
        <img
          src="logo.png"
          alt="PASSAD"
          width={150}
          height={60}
       
        />
        <MobileNav />
        <nav className="hidden md:flex items-center gap-3 lg:8 ">
          {/* DERNEK BAŞLANGIÇ */}
          <OutsideClickHandler
            display="contents"
            onOutsideClick={() => {
              setItem({
                item1: false,
                item2: false,
                item3: false,
                item4: false,
                item5: false,
              });
            }}
          >
            <div
              className="flex items-center  gap-1 justify-center cursor-pointer  relative group "
              onClick={() => {
                setItem((prev) => ({
                  item2: false,
                  item3: false,
                  item4: false,
                  item5: false,
                  item1: !prev.item1,
                }));
              }}
            >
              <div className="flex items-center gap-1  hover:text-blue-400  cursor-pointer">
                {t("dernek")}
                <ChevronDown
                  // className=" w-5  transition-all ease-in mt-1  "
                  className={`w-5   transition-all ease-in mt-1   ${
                    item.item1 && "rotate-180"
                  }`}
                  strokeWidth={1}
                />
              </div>

              {item.item1 && (
                <div className="absolute top-12 -left-10 bg-white  flex-col gap-6 py-3 px-3   shadow-2xl rounded-lg flex w-48 text-sm uppercase  ">
                  <a href="#hakkimizda" className="hover:underline">
                    {" "}
                    {t("hakkımızda")}
                  </a>
                  <a href="#amac" className="hover:underline">
                    {" "}
                    {t("dernegimizin_amacı")}
                  </a>
                  <a href="#teams" className="hover:underline">
                    {t("yonetim")}
                  </a>
                  <a className="hover:underline">{t("bylaws")}</a>
                  <a className="hover:underline">{t("baskan")}</a>
                </div>
              )}
            </div>

            {/* DERNEK BİTİŞ */}

            {/* PASLANMAZ ÇELİK BAŞLANGIÇ */}
            {/* <OutsideClickHandler
            onOutsideClick={() => {
              setItem({
                item1: false,
                item2: false,
                item3: false,
                item4: false,
                item5: false,
              });
            }}
          > */}
            <div
              className="flex items-center  gap-1 justify-center cursor-pointer  relative group "
              onClick={() => {
                setItem((prev) => ({
                  item1: false,
                  item3: false,
                  item4: false,
                  item5: false,
                  item2: !prev.item2,
                }));
              }}
            >
              <div className="flex items-center gap-1  hover:text-blue-400  cursor-pointer">
                {t("paslanmaz_celik")}
                <ChevronDown
                  // className=" w-5  transition-all ease-in mt-1  "
                  className={`w-5   transition-all ease-in mt-1   ${
                    item.item2 && "rotate-180"
                  }`}
                  strokeWidth={1}
                />
              </div>

              {item.item2 && (
                <div className="absolute top-12 -left-[10]  bg-white  flex-col gap-4 py-3 px-3  shadow-2xl rounded-lg flex w-52 text-sm uppercase">
                  <a href="#tarihçe">{t("tarihçe")}</a>
                  <a href="#nedir">{t("nedir")}</a>
                  <a href="#üretim">{t("pps")}</a>
                  <a>{t("nvs")}</a>
                  <a>{t("ys")}</a>
                  <a>{t("aa")}</a>
                  <a>{t("ssd")}</a>
                  <a>{t("sst")}</a>
                  <a>{t("ssa")}</a>
                  <a>{t("sa")}</a>
                </div>
              )}
            </div>
            {/* </OutsideClickHandler> */}
            {/* PASLANMAZ ÇELİK BİTİŞ */}
            {/* HABERLER BAŞLANGIÇ*/}
            {/* <OutsideClickHandler
            onOutsideClick={() => {
              setItem({
                item1: false,
                item2: false,
                item3: false,
                item4: false,
                item5: false,
              });
            }}
          > */}
            <div
              className="flex items-center  gap-1 justify-center cursor-pointer  relative group "
              onClick={() => {
                setItem((prev) => ({
                  item1: false,
                  item2: false,
                  item4: false,
                  item5: false,
                  item3: !prev.item3,
                }));
              }}
            >
              <div className="flex items-center gap-1  hover:text-blue-400  cursor-pointer">
                {t("haberler")}
                <ChevronDown
                  // className=" w-5  transition-all ease-in mt-1  "
                  className={`w-5   transition-all ease-in mt-1   ${
                    item.item3 && "rotate-180"
                  }`}
                  strokeWidth={1}
                />
              </div>

              {item.item3 && (
                <div className="absolute top-12 -left-[10] bg-white  flex-col gap-6 py-3 px-3  shadow-2xl rounded-lg flex w-48 text-sm uppercase">
                  <a>{t("video")}</a>
                  <a>{t("dergiler")}</a>
                  <a>{t("gazete")}</a>
                </div>
              )}
            </div>
            {/* </OutsideClickHandler> */}
            {/* HABERLER BİTİŞ*/}
            {/* BAĞLANTILAR BAŞLANIÇ*/}
            {/* <OutsideClickHandler
            onOutsideClick={() => {
              setItem({
                item1: false,
                item2: false,
                item3: false,
                item4: false,
                item5: false,
              });
            }}
          > */}
            <div
              className="flex items-center  gap-1 justify-center cursor-pointer  relative group "
              onClick={() => {
                setItem((prev) => ({
                  item1: false,
                  item3: false,
                  item2: false,
                  item5: false,
                  item4: !prev.item4,
                }));
              }}
            >
              <div className="flex items-center gap-1  hover:text-blue-400  cursor-pointer">
                {t("link")}
                <ChevronDown
                  // className=" w-5  transition-all ease-in mt-1  "
                  className={`w-5   transition-all ease-in mt-1   ${
                    item.item4 && "rotate-180"
                  }`}
                  strokeWidth={1}
                />
              </div>

              {item.item4 && (
                <div className="absolute top-12 -left-[10] bg-white  flex-col gap-6 py-3 px-3  shadow-2xl rounded-lg flex w-48 text-sm uppercase">
                  <a>{t("developer")}</a>
                  <a>{t("üye")}</a>
                  <a>{t("online")}</a>
                  <a>{t("fuar")}</a>
                </div>
              )}
            </div>
            {/* </OutsideClickHandler> */}

            {/* BAĞLANTILAR BİTİŞ*/}
            {/* İLETŞİM BİTİŞ*/}
            {/* <OutsideClickHandler
            onOutsideClick={() => {
              setItem({
                item1: false,
                item2: false,
                item3: false,
                item4: false,
                item5: false,
              });
            }}
          > */}
            <div
              className="flex items-center  gap-1 justify-center cursor-pointer  relative group "
              onClick={() => {
                setItem((prev) => ({
                  item1: false,
                  item3: false,
                  item4: false,
                  item2: false,
                  item5: !prev.item5,
                }));
              }}
            >
              <div className="flex items-center gap-1  hover:text-blue-400  cursor-pointer">
                {t("iletişim")}
                <ChevronDown
                  // className=" w-5  transition-all ease-in mt-1  "
                  className={`w-5   transition-all ease-in mt-1   ${
                    item.item5 && "rotate-180"
                  }`}
                  strokeWidth={1}
                />
              </div>

              {item.item5 && (
                <div className="absolute top-12 -left-[100%] bg-white  flex-col gap-6 py-3 px-3  shadow-2xl rounded-lg flex w-48 text-sm uppercase r">
                  <a>{t("email")}</a>
                  <a>{t("location")}</a>
                </div>
              )}
            </div>
            {/* </OutsideClickHandler> */}

            {/* İLETİŞİM BİTİŞ*/}
          </OutsideClickHandler>
          <Dil />
        </nav>
      </header>
    </div>
  );
};

export default Navbar;

{
  /* <div className="flex items-center  gap-1 justify-center cursor-pointer  relative group ">
          <div className="hover:text-red-400 ">Dernek</div>
          <ChevronDown
            className=" w-5  group-hover:rotate-180 transition-all ease-in"
            strokeWidth={1}
          />

          <div className="absolute top-12 -left-[100%] bg-slate-400  flex-col gap-6 py-5 px-10 -translate-x-10  shadow-2xl rounded-lg flex">
            <div>Hakkımızda</div>
            <div>Hakkımızda</div>
            <div>Hakkımızda</div>
            <div>Hakkımızda</div>
          </div>

          
        </div> */
}
