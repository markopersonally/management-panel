import H1 from "../components/UI/H1.jsx";
import Section from "../components/UI/Section.jsx";
import { BsPencil } from "react-icons/bs";

export default function Dashboard() {
  return (
    <Section>
      <H1>
        <BsPencil />
        Dashboard
      </H1>
      <p>Welcome to the admin dashboard!</p>
    </Section>
  );
}
