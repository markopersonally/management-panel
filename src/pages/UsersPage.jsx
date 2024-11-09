import { useState } from "react";
import { FaRegUser, FaPlus } from "react-icons/fa";
import Form from "../components/Form.jsx";

export default function UsersPage() {
  const [showForm, setShowForm] = useState(false);
  const [users, setUsers] = useState([]);

  function handleCreateUser() {
    setShowForm(true);
  }

  function handleAddUser(newUser) {
    setUsers([...users, newUser]);
    setShowForm(false);
  }

  return (
    <section>
      <h1>
        <FaRegUser />
        Users
      </h1>
      <div className="flex flex-wrap w-full">
        {users.map((user, index) => (
          <div
            key={index}
            className="m-10 bg-slate-500 text-slate-200 shadow-2xl border-2 border-slate-700 w-[200px] h-[200px] flex flex-col gap-4 text-xl justify-center items-center hover:scale-95 duration-300"
          >
            <h3>{user.username}</h3>
          </div>
        ))}
        <div className="m-10 bg-slate-500 text-slate-200 shadow-2xl border-2 border-slate-700 w-[200px] h-[200px] flex flex-col gap-4 text-xl justify-center items-center hover:scale-95 duration-300">
          <h3>Create User</h3>
          <button onClick={handleCreateUser} className="text-3xl">
            <FaPlus />
          </button>
        </div>
      </div>
      {/* {showForm && <Form setShowForm={setShowForm} onAddUser={handleAddUser} />} */}
    </section>
  );
}
