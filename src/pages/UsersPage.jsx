import H1 from "../components/UI/H1.jsx";
import Section from "../components/UI/Section.jsx";
import { FaRegUser } from "react-icons/fa";



export default function Users() {
  return (
    <Section>
      <H1>
        <FaRegUser />
        Users
      </H1>
      <p>Manage your users here.</p>
    </Section>
  );
}
