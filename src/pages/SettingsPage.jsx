import H1 from "../components/UI/H1.jsx";
import Section from "../components/UI/Section.jsx";
import { IoSettingsOutline } from "react-icons/io5";

export default function Settings() {
  const boxChange = "mt-4 p-4 bg-slate-300 border-2 border-slate-400 hover:bg-slate-400 duration-500 cursor-pointer";

  return (
    <Section>
      <H1>
        <IoSettingsOutline />
        Settings
      </H1>
      <div className={boxChange}>
        <h3>Change Data</h3>
      </div>
      <div className={boxChange}>
        <h3>Change Product</h3>
      </div>
      <div className={boxChange}>
        <h3>Change User</h3>
      </div>
    </Section>
  );
}
