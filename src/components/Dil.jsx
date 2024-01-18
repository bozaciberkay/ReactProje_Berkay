import { useTranslation } from "react-i18next";

const Dil = () => {
  const { i18n } = useTranslation();
  const clickHanlde = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div className="flex items-center text-sm gap-1">
      <button onClick={() => clickHanlde("tr")}>TR |</button>
      <button onClick={() => clickHanlde("en")}>EN</button>
    </div>
    // <select
    //   name="select"
    //   id="select "
    //   className="border-none outline-none bg-transparent text-sm"
    //   onChange={(e) => clickHanlde(e.target.value)}
    // >
    //   <option value={"kk"} hidden>
    //     TR
    //   </option>
    //   <option className="" value="tr">
    //     TR
    //   </option>
    //   <option value="en">EN</option>
    // </select>
  );
};

export default Dil;
