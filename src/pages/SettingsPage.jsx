import { useState } from "react";
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
      <form>
        <div>
          <label>first name</label>
          <input type="text" />
        </div>
        <div>
          <label>last name</label>
          <input type="text" />
        </div>
        <div>
          <label>username</label>
          <input type="text" />
        </div>
        <div>
          <label>email</label>
          <input type="email" />
        </div>
        <div>
          <label>password</label>
          <input type="password" />
        </div>
        <button>save</button>
      </form>
    </Section>
  );
}
