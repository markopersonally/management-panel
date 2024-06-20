import H1 from "../components/UI/H1.jsx";
import Section from "../components/UI/Section.jsx";
import ImageCard from "../components/ImageCard.jsx";
import { RxHome } from "react-icons/rx";
import DATA from "../data.js"

export default function Home() {
  return (
    <Section>
      <H1>
        <RxHome />
        Home
      </H1>
      <div className="p-6 bg-gray-100 text-center flex-1">
        <h2 className="text-2xl font-semibold mb-4">Menagment panel</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {DATA.map((item) => (
            <ImageCard key={item.id} title={item.title} image={item.image} />
          ))}
        </div>
      </div>
    </Section>
  );
}
