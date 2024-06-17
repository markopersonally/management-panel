import H2 from "./UI/H2.jsx";
import Section from "./UI/Section.jsx";
import { BsPencil } from "react-icons/bs";

export default function Dashboard() {
  return (
    <Section>
      <H2>
        <BsPencil />
        Dashboard
      </H2>
      <p>Welcome to the admin dashboard!</p>
    </Section>
  );
}
