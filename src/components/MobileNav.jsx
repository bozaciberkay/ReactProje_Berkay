import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import OutsideClickHandler from "react-outside-click-handler";
import Dil from "./Dil";

const MobileNav = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(false);
  const [item, setItem] = useState({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
  });
  const handle = () => {
    // const mobile = document.getElementById("ss");
    // mobile.classList.add("left-0");
    setActive((prev) => !prev);
  };
  return (
    <div className="block md:hidden  ">
      <div
        className=" border p-2  rounded-lg group z-50 sticky "
        onClick={handle}
      >
        {active ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 group-hover:scale-110 transition-all cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 group-hover:scale-110 transition-all cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        )}
      </div>
      <div
        className={`bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 absolute top-0  -right-[100%] w-full h-full  flex  justify-center transition-all ease-in-out duration-500 ${
          active && "-translate-x-full "
        }`}
        // className="bg-red-400 absolute top-0  -left-[100%] w-full h-full  flex items-center justifiy-center"
      >
        <nav className="flex items-center flex-col gap-8 mt-24 ">
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
              console.log("outside");
            }}
          >
            {/* DERNEK BAŞLANGIÇ */}

            <div className="flex items-center  gap-1 justify-center cursor-pointer  relative group  ">
              <div
                className="flex items-center gap-1  hover:text-red-400  cursor-pointer"
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
                <div className="absolute top-12 -left-[10] bg-white  flex-col gap-6 py-3 px-3  z-50  shadow-2xl rounded-lg flex w-48 text-sm uppercase  ">
                  <a
                    href="#hakkimizda"
                    onClick={() => {
                      handle();
                    }}
                    className="hover:underline"
                  >
                    {t("hakkımızda")}
                  </a>
                  <a
                    href="#amac"
                    onClick={() => {
                      handle();
                    }}
                    className="hover:underline"
                  >
                    {t("dernegimizin_amacı")}
                  </a>
                  <a
                    href="#teams"
                    onClick={() => {
                      handle();
                    }}
                    className="hover:underline"
                  >
                    {t("yonetim")}
                  </a>
                  <a>{t("bylaws")}</a>
                  <a>{t("baskan")}</a>
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
              // onClick={() => {
              //   setItem((prev) => ({
              //     ...prev,
              //     item2: true,
              //   }));
              // }}
            >
              <div
                className="flex items-center gap-1  hover:text-red-400  cursor-pointer"
                onClick={() => {
                  setItem((prev) => ({
                    item1: false,
                    item3: false,
                    item4: false,
                    item5: false,
                    item2: !prev.item2,
                  }));
                  console.log("fggg");
                }}
              >
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
                <div className="absolute top-12 -left-[10]  bg-white  z-50 flex-col gap-4 py-3 px-3  shadow-2xl rounded-lg flex w-[280px] text-sm uppercase">
                  <a
                    href="#hakkimizda"
                    onClick={() => {
                      handle();
                    }}
                    className="hover:underline"
                  >
                    {t("tarihçe")}
                  </a>
                  <a
                    href="#nedir"
                    onClick={() => {
                      handle();
                    }}
                    className="hover:underline"
                  >
                    {t("nedir")}
                  </a>
                  <a
                    href="#üretim"
                    onClick={() => {
                      handle();
                    }}
                    className="hover:underline"
                  >
                    {t("pps")}
                  </a>
                  <a className="hover:underline">{t("nvs")}</a>
                  <a className="hover:underline">{t("ys")}</a>
                  <a className="hover:underline">{t("aa")}</a>
                  <a className="hover:underline">{t("ssd")}</a>
                  <a className="hover:underline">{t("sst")}</a>
                  <a className="hover:underline">{t("ssa")}</a>
                  <a className="hover:underline">{t("sa")}</a>
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
              // onClick={() => {
              //   setItem((prev) => ({
              //     ...prev,
              //     item2: true,
              //   }));
              // }}
            >
              <div
                className="flex items-center gap-1  hover:text-red-400  cursor-pointer"
                onClick={() => {
                  setItem((prev) => ({
                    item1: false,
                    item2: false,
                    item4: false,
                    item5: false,
                    item3: !prev.item3,
                  }));
                  console.log("fggg");
                }}
              >
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
                <div className="absolute top-12 -left-[10]  bg-white  z-50 flex-col gap-6 py-3 px-3  shadow-2xl rounded-lg flex w-48 text-sm uppercase">
                  <a
                    href="#sel"
                    onClick={() => {
                      handle();
                    }}
                    className="hover:bg-slate-600"
                  >
                    {t("video")}
                  </a>

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
              // onClick={() => {
              //   setItem((prev) => ({
              //     ...prev,
              //     item2: true,
              //   }));
              // }}
            >
              <div
                className="flex items-center gap-1  hover:text-red-400  cursor-pointer"
                onClick={() => {
                  setItem((prev) => ({
                    item1: false,
                    item3: false,
                    item2: false,
                    item5: false,
                    item4: !prev.item4,
                  }));
                  console.log("fggg");
                }}
              >
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
                <div className="absolute top-12 -left-[10]  bg-white  z-50 flex-col gap-6 py-3 px-3  shadow-2xl rounded-lg flex w-48 text-sm uppercase">
                  <a
                    href="#sel"
                    onClick={() => {
                      handle();
                    }}
                    className="hover:bg-slate-600"
                  >
                    {t("developer")}
                  </a>

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
              // onClick={() => {
              //   setItem((prev) => ({
              //     ...prev,
              //     item2: true,
              //   }));
              // }}
            >
              <div
                className="flex items-center gap-1  hover:text-red-400  cursor-pointer"
                onClick={() => {
                  setItem((prev) => ({
                    item1: false,
                    item3: false,
                    item2: false,
                    item4: false,
                    item5: !prev.item5,
                  }));
                  console.log("fggg");
                }}
              >
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
                <div className="absolute top-12 -left-[10]  bg-white  z-50 flex-col gap-6 py-3 px-3  shadow-2xl rounded-lg flex w-48 text-sm uppercase">
                  <a
                    href="#sel"
                    onClick={() => {
                      handle();
                    }}
                    className="hover:bg-slate-600"
                  >
                    {t("email")}
                  </a>

                  <a>{t("location")}</a>
                </div>
              )}
            </div>
            {/* </OutsideClickHandler> */}
            <Dil />
            {/* İLETİŞİM BİTİŞ*/}
          </OutsideClickHandler>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
