import H1 from "../components/UI/H1.jsx";
import Section from "../components/UI/Section.jsx";
import { RxHome } from "react-icons/rx";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaUsersLine } from "react-icons/fa6";
import { FaTasks } from "react-icons/fa";

export default function Home() {
  const boxInfoWrapper = "flex gap-4 text-xl";
  const boxInfo =
    "w-[300px] h-[150px] text-orange-900 bg-orange-400 flex justify-center ";
  const boxInfoData = "flex items-center";
  const icon = "h-max p-2 border-2 border-orange-900 rounded-xl";

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
    </Section>
  );
}
