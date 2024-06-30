import H1 from "../components/UI/H1.jsx";
import Section from "../components/UI/Section.jsx";
import { RxHome } from "react-icons/rx";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaUsersLine } from "react-icons/fa6";
import { FaTasks } from "react-icons/fa";

import item1 from "../images/aparat.jpg";
import item2 from "../images/checked_295743.png";
import item3 from "../images/cookies_164659.png";
import item4 from "../images/cup.jpg";
import item5 from "../images/knife.jpg";
import item6 from "../images/pad.jpg";
import item7 from "../images/security_2592258.png";

export default function Home() {
  const boxInfoWrapper = "flex gap-4 text-xl flex-wrap";
  const boxInfo =
    "p-4 w-[300px] h-[150px] bg-orange-400 text-orange-100 font-bold uppercase flex justify-center rounded-lg";
  const boxInfoData = "flex items-center ";
  const icon = "h-max p-2 border-2 border-orange-100 rounded-xl";
  const boxProducts =
    "my-10 p-10 w-[350px] h-[300px] border-2 bg-slate-300 rounded-3xl overflow-y-auto";
  const h3Products = "p-2 text-center font-bold ";
  const divItemProducts =
    "my-4 p-2 flex gap-4 items-center border-2 border-slate-900 rounded-xl shadow-xl bg-slate-100 ";
  const imgProducts =
    "w-[35px] h-[35px] rounded-full border-2 border-slate-900 shadow-2xl";
  const titleProducts = "font-bold capitalize";

  return (
    <Section>
      <H1>
        <RxHome />
        Home
      </H1>
      <div className={boxInfoWrapper}>
        <div className={boxInfo}>
          <h3>products</h3>
          <span className={boxInfoData}>170</span>
          <div className={icon}>
            <MdOutlineProductionQuantityLimits />
          </div>
        </div>
        <div className={boxInfo}>
          <h3>total customers</h3>
          <span className={boxInfoData}>21470</span>
          <div className={icon}>
            <FaUsersLine />
          </div>
        </div>
        <div className={boxInfo}>
          <h3>task progress</h3>
          <span className={boxInfoData}>77%</span>
          <div className={icon}>
            <FaTasks />
          </div>
        </div>
      </div>
      <div className={boxProducts}>
        <h3 className={h3Products}>Top Products:</h3>
        <div className={divItemProducts}>
          <img className={imgProducts} src={item1} alt="camera" />
          <p className={titleProducts}>camera</p>
        </div>
        <div className={divItemProducts}>
          <img className={imgProducts} src={item2} alt="board" />
          <p className={titleProducts}>board</p>
        </div>
        <div className={divItemProducts}>
          <img className={imgProducts} src={item3} alt="cookies" />
          <p className={titleProducts}>cookies</p>
        </div>
        <div className={divItemProducts}>
          <img className={imgProducts} src={item4} alt="cup" />
          <p className={titleProducts}>cup</p>
        </div>
        <div className={divItemProducts}>
          <img className={imgProducts} src={item5} alt="knife" />
          <p className={titleProducts}>knife</p>
        </div>
        <div className={divItemProducts}>
          <img className={imgProducts} src={item6} alt="pad" />
          <p className={titleProducts}>pad</p>
        </div>
        <div className={divItemProducts}>
          <img className={imgProducts} src={item7} alt="padlock" />
          <p className={titleProducts}>padlock</p>
        </div>
      </div>
    </Section>
  );
}
