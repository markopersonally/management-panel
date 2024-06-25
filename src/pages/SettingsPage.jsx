import H1 from "../components/UI/H1.jsx";
import Section from "../components/UI/Section.jsx";
import { IoSettingsOutline } from "react-icons/io5";

export default function Settings() {
  const boxChange = "mt-4 p-4 bg-slate-300";

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
