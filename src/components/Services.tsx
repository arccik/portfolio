import services from "../data/services.json";
import {
  PiStrategyFill,
  PiTreePalmBold,
  PiBoundingBoxBold,
} from "react-icons/pi";

export default function Services() {
  const icons = [<PiStrategyFill />, <PiTreePalmBold />, <PiBoundingBoxBold />];
  return (
    <section className="md:flex md:flex-col md:justify-center items-center  bg-base-300">
      <div className="carousel-indicator text-center p-5">
        <h1 className="text-4xl font-bold">Services</h1>
      </div>

      <div className="flex lg:flex-row flex-col flex-wrap justify-center gap-4 place-items-center pb-5">
        {services.map((item, index) => (
          <div
            key={item.title}
            className="card md:w-96 m-2 h-72 bg-base-100 shadow-xl hover:bg-base-300 group"
          >
            <div className="card-body">
              <div className="text-5xl group-hover:text-secondary">
                {icons[index]}
              </div>
              <h2 className="card-title group-hover:text-secondary hover:text-secondary">
                {item.title}
              </h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
