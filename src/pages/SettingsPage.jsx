import H1 from "../components/UI/H1.jsx";
import Section from "../components/UI/Section.jsx";
import { IoSettingsOutline } from "react-icons/io5";

export default function Settings() {
  return (
    <Section>
      <H1>
        <IoSettingsOutline />
        Settings
      </H1>
      <p>Adjust your settings here.</p>
    </Section>
  );
}
