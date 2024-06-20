import IMG_DATA from "../data";

export default function ImageCard({ id, title, image }) {
  return (
    <div id={id} className="bg-white p-4 rounded shadow">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded mb-2"
      />
      <h3 className="text-xl mb-2">{title}</h3>
    </div>
  );
}
