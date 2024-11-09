import { useState } from "react";
import { FaRegUser, FaPlus, FaSpinner } from "react-icons/fa";
import Form from "../components/Form.jsx";

export default function UsersPage() {
  const [showForm, setShowForm] = useState(false);
  const [users, setUsers] = useState([]);
  const [isAddingUser, setIsAddingUser] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleCreateUser() {
    setShowForm(true);
  }

  function handleAddUser(newUser) {
    if (
      !newUser.firstName.trim() ||
      !newUser.lastName.trim() ||
      !newUser.username.trim() ||
      !newUser.email.trim()
    ) {
      setErrorMessage("All fields are required.");
      return;
    }
    setErrorMessage("");
    setIsAddingUser(true);
    setTimeout(() => {
      setUsers([...users, newUser]);
      setShowForm(false);
      setIsAddingUser(false);
    }, 1000);
  }

  return (
    <section className="p-6">
      <h1 className="text-3xl font-semibold mb-6 flex items-center gap-2 text-gray-700">
        <FaRegUser className="text-blue-500" />
        Users
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user, index) => (
          <div
            key={index}
            className="p-4 bg-white text-gray-700 shadow-md rounded-lg border border-gray-300 flex flex-col items-center hover:shadow-lg transform hover:-translate-y-1 transition-transform duration-300"
          >
            <h3 className="text-lg font-medium">{user.username}</h3>
          </div>
        ))}
        <div
          className="p-4 bg-gray-100 text-gray-600 shadow-md rounded-lg border border-gray-300 flex flex-col items-center justify-center hover:bg-gray-200 transform hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
          onClick={handleCreateUser}
        >
          <h3 className="text-lg font-medium mb-2">Create User</h3>
          <button className="text-2xl text-blue-500">
            <FaPlus />
          </button>
        </div>
      </div>
      {showForm && (
        <div>
          <Form setShowForm={setShowForm} onAddUser={handleAddUser} />
          {errorMessage && (
            <p className="mt-4 text-red-500 text-sm">{errorMessage}</p>
          )}
        </div>
      )}
      {isAddingUser && (
        <div className="flex justify-center items-center mt-4">
          <FaSpinner className="animate-spin text-blue-500 text-2xl" />
          <span className="ml-2 text-blue-500">Adding user...</span>
        </div>
      )}
    </section>
  );
}
