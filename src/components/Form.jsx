import { useState } from "react";

const formStyle =
  "fixed inset-0 w-full max-w-lg mx-auto h-auto flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-xl border border-gray-300 m-4 md:m-0";

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
    <form className={formStyle} onSubmit={handleSubmit}>
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">
        User Settings
      </h2>
      <div className="w-full mb-4">
        <label
          htmlFor="firstName"
          className="block text-sm font-medium text-gray-600 mb-1"
        >
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        />
      </div>
      <div className="w-full mb-4">
        <label
          htmlFor="lastName"
          className="block text-sm font-medium text-gray-600 mb-1"
        >
          Last Name
        </label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        />
      </div>
      <div className="w-full mb-4">
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-600 mb-1"
        >
          Username
        </label>
        <input
          id="username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        />
      </div>
      <div className="w-full mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-600 mb-1"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        />
      </div>
      <div className="flex justify-end mt-4 w-full">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 mr-2"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={() => setShowForm(false)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
