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
      <div>
        <h3>Change Data</h3>
        <div>
          <label htmlFor="setting1">Setting 1:</label>
          <input type="text" id="setting1" name="setting1" />
        </div>
        <div>
          <label htmlFor="setting2">Setting 2:</label>
          <input type="text" id="setting2" name="setting2" />
        </div>
        <div>
          <label htmlFor="setting3">Setting 3:</label>
          <input type="text" id="setting3" name="setting3" />
        </div>
        <div>
          <label htmlFor="setting4">Setting 4:</label>
          <input type="text" id="setting4" name="setting4" />
        </div>
        <div>
          <label htmlFor="setting5">Setting 5:</label>
          <input type="text" id="setting5" name="setting5" />
        </div>
        <div>
          <label htmlFor="setting6">Setting 6:</label>
          <input type="text" id="setting6" name="setting6" />
        </div>
      </div>
    </Section>
  );
}
