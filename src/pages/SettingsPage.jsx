// import { useState } from "react";
import Input from "../components/UI/Input.jsx";
import H1 from "../components/UI/H1.jsx";
import Section from "../components/UI/Section.jsx";
import { IoSettingsOutline } from "react-icons/io5";

const formStyle = "w-full rounded-3xl ml-10 p-10 bg-slate-500";

export default function Settings() {
  // const [enteredValues, setEnteredValues] = useState({
  //   email: "",
  //   password: "",
  // });

  return (
    <Section>
      <H1>
        <IoSettingsOutline />
        Settings
      </H1>
      <form className={formStyle}>
        <Input label="First Name" id="firstName" type="text" name="firstName" />
        <Input label="Last Name" id="lastName" type="text" name="lastName" />
        <Input label="Username" id="username" type="text" name="username" />
        <Input label="Email" id="email" type="email" name="email" />
      </form>
    </Section>
  );
}
