import H2 from "./UI/H2.jsx";
import Section from "./UI/Section.jsx";
import { FaRegUser } from "react-icons/fa";

export default function Users() {
  return (
    <Section>
      <H2>
        <FaRegUser />
        Users
      </H2>
      <p>Manage your users here.</p>
    </Section>
  );
}
