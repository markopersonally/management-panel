import { useState } from "react";
import {
  IoSettingsOutline,
  IoPersonOutline,
  IoCartOutline,
  IoDocumentTextOutline,
} from "react-icons/io5";

export default function Component() {
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <IoSettingsOutline className="text-primary" />
        Settings
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="border rounded-lg p-4 shadow">
          <div className="mb-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <IoPersonOutline className="text-primary" />
              User Settings
            </h2>
            <p className="text-sm text-gray-500">
              Manage your account preferences
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Enable Notifications</span>
              <input
                type="checkbox"
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
                className="form-checkbox rounded text-primary"
              />
            </div>
            <div className="flex items-center justify-between">
              <span>Dark Mode</span>
              <input
                disabled
                type="checkbox"
                className="form-checkbox rounded text-primary"
              />
            </div>
            <button className="w-full bg-primary text-white py-2 px-4 rounded">
              Update Profile
            </button>
          </div>
        </div>

        <div className="border rounded-lg p-4 shadow">
          <div className="mb-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <IoCartOutline className="text-primary" />
              Product Settings
            </h2>
            <p className="text-sm text-gray-500">
              Manage your product preferences
            </p>
          </div>
          <p className="mb-4">
            Customize how products are displayed and managed in your account.
          </p>
          <button className="w-full border border-primary text-primary py-2 px-4 rounded">
            Manage Products
          </button>
        </div>

        <div className="border rounded-lg p-4 shadow">
          <div className="mb-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <IoDocumentTextOutline className="text-primary" />
              Data Management
            </h2>
            <p className="text-sm text-gray-500">
              Control your data and privacy
            </p>
          </div>
          <p className="mb-4">
            Review and manage how your data is collected and used.
          </p>
          <button className="w-full border border-primary text-primary py-2 px-4 rounded">
            Data Privacy Settings
          </button>
        </div>
      </div>
    </div>
  );
}
