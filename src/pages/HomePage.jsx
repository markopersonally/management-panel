import { RxHome } from "react-icons/rx";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaUsersLine } from "react-icons/fa6";
import { FaTasks } from "react-icons/fa";

import item1 from "../images/aparat.jpg";
import item2 from "../images/checked_295743.png";
import item3 from "../images/cookies_164659.png";
import item4 from "../images/cup.jpg";
import item5 from "../images/knife.jpg";
import item6 from "../images/pad.jpg";
import item7 from "../images/security_2592258.png";

export default function Home() {
  const products = [
    { img: item1, name: "camera" },
    { img: item2, name: "board" },
    { img: item3, name: "cookies" },
    { img: item4, name: "cup" },
    { img: item5, name: "knife" },
    { img: item6, name: "pad" },
    { img: item7, name: "padlock" },
  ];

  return (
    <section className="container mx-auto px-4 py-8 bg-gradient-to-br from-blue-50 to-teal-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 flex items-center gap-2 text-blue-700">
        <RxHome className="text-teal-500" />
        Home
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <InfoBox
          title="Products"
          value="170"
          icon={<MdOutlineProductionQuantityLimits />}
        />
        <InfoBox
          title="Total Customers"
          value="21,470"
          icon={<FaUsersLine />}
        />
        <InfoBox title="Task Progress" value="77%" icon={<FaTasks />} />
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 border border-teal-200">
        <h3 className="text-xl font-semibold mb-4 text-blue-700">
          Top Products:
        </h3>
        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-4">
          {products.map((product, index) => (
            <ProductItem key={index} img={product.img} name={product.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoBox({ title, value, icon }) {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg shadow-lg p-6 flex items-center justify-between text-white">
      <div>
        <h3 className="text-sm font-medium text-blue-100 uppercase">{title}</h3>
        <span className="text-3xl font-bold">{value}</span>
      </div>
      <div className="text-3xl bg-white/20 p-3 rounded-full">{icon}</div>
    </div>
  );
}

function ProductItem({ img, name }) {
  return (
    <div className="flex items-center gap-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-4 transition-all hover:shadow-md hover:from-blue-100 hover:to-teal-100">
      <img
        src={img}
        alt={name}
        className="w-12 h-12 rounded-full object-cover border-2 border-teal-300"
      />
      <p className="font-medium capitalize text-blue-700">{name}</p>
    </div>
  );
}
