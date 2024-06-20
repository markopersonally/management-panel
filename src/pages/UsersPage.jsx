import H1 from "../components/UI/H1.jsx";
import Section from "../components/UI/Section.jsx";
import { FaRegUser } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

export default function Users() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("form send");
  }

  return (
    <Section>
      <H1>
        <FaRegUser />
        Users
      </H1>
      <div className="m-10 bg-neutral-500 shadow-2xl border-2 border-neutral-700 w-[200px] h-[200px] flex flex-col gap-4 text-xl justify-center items-center hover:scale-95 duration-300">
        <h3>Create User</h3>
        <button onClick={handleSubmit} className="text-3xl">
          <FaPlus />
        </button>
      </div>
    </Section>
  );
}
