import { useState } from "react";
import Input from "../components/UI/Input.jsx";
import H1 from "../components/UI/H1.jsx";
import Section from "../components/UI/Section.jsx";
import { IoSettingsOutline } from "react-icons/io5";

const formStyle = "w-full rounded-3xl ml-10 p-10 bg-slate-500";

export default function Settings({ setShowForm, onAddUser }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddUser(formData);
  }

  return (
    <Section>
      <H1>
        <IoSettingsOutline />
        Settings
      </H1>
      <div>
        <h3>change data</h3>
      </div>
    </Section>
  );
}
