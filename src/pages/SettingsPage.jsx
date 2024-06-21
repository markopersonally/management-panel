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
      <form className={formStyle}>
        <Input
          label="First Name"
          id="firstName"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <Input
          label="Last Name"
          id="lastName"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <Input
          label="Username"
          id="username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <button
          onClick={handleSubmit}
          className="mt-4 bg-blue-500 text-white p-2 rounded"
        >
          Submit
        </button>
        <button
          onClick={() => setShowForm(false)}
          className="mt-4 bg-red-500 text-white p-2 rounded ml-2"
        >
          Cancel
        </button>
      </form>
    </Section>
  );
}
