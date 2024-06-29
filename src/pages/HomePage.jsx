import H1 from "../components/UI/H1.jsx";
import Section from "../components/UI/Section.jsx";
import { RxHome } from "react-icons/rx";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaUsersLine } from "react-icons/fa6";
import { FaTasks } from "react-icons/fa";

export default function Home() {
  const boxInfoWrapper = "flex gap-4 text-xl ";
  const boxInfo =
    "p-4 w-[300px] h-[150px] bg-orange-400 text-orange-100 font-bold uppercase flex justify-center rounded-lg";
  const boxInfoData = "flex items-center ";
  const icon = "h-max p-2 border-2 border-orange-100 rounded-xl";
  const boxProducts = "mt-10 p-10 w-[350px] border-2 bg-slate-300 rounded-3xl";
  const h3Products = "p-2 text-center font-bold";
  const divItemProducts = "mt-4 flex gap-4 items-center";
  const imgProducts = "w-[25px] h-[25px] rounded-full";

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
          <img className={imgProducts} src="" alt="" />
          <p>something</p>
        </div>
        <div className={divItemProducts}>
          <img className={imgProducts} src="" alt="" />
          <p>something</p>
        </div>
        <div className={divItemProducts}>
          <img className={imgProducts} src="" alt="" />
          <p>something</p>
        </div>
        <div className={divItemProducts}>
          <img className={imgProducts} src="" alt="" />
          <p>something</p>
        </div>
        <div className={divItemProducts}>
          <img className={imgProducts} src="" alt="" />
          <p>something</p>
        </div>
      </div>
    </Section>
  );
}
