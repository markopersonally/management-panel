import H1 from "../components/UI/H1.jsx";
import Section from "../components/UI/Section.jsx";
import { RxHome } from "react-icons/rx";

export default function Home() {
  return (
    <Section>
      <H1>
        <RxHome />
        Home
      </H1>
    </Section>
  );
}
