import H2 from "./UI/H2.jsx";
import Section from "./UI/Section.jsx";
import { IoSettingsOutline } from "react-icons/io5";

export default function Settings() {
  return (
    <Section>
      <H2>
        <IoSettingsOutline />
        Settings
      </H2>
      <p>Adjust your settings here.</p>
    </Section>
  );
}
