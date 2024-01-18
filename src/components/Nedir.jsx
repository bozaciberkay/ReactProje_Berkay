import { useTranslation } from "react-i18next";

const Nedir = () => {
  const { t } = useTranslation();
  return (
    <div className=" flex flex-col gap-6 mt-6 items-center wrapper ">
      <h2 className="font-bold text-4xl text-blue-400 uppercase ">
        {t("nedir")}
      </h2>
      <p className="text-slate-500  text-xl">{t("nedir_text")}</p>
    </div>
  );
};

export default Nedir;
