import { useTranslation } from "react-i18next";

const Amac = () => {
  const { t } = useTranslation();
  return (
    <div className=" flex flex-col gap-6 mt-6 items-center wrapper ">
      <h2 className="font-bold text-4xl text-blue-400 uppercase ">
        {t("dernegimizin_amacı")}
      </h2>
      <p className="text-slate-500  text-xl ">{t("amac_text")}</p>
      <p className="text-slate-500  text-xl">{t("amac_text2")}</p>
      <p className="text-slate-500  text-xl">{t("amac_text3")}</p>
      <p className="text-slate-500 text-xl ">{t("amac_text4")}</p>
    </div>
  );
};

export default Amac;
