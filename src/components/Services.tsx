import services from "../data/services.json";

export default function Services() {
  return (
    <section className="h-screen md:flex md:flex-col justify-center items-center  bg-base-300">
      <div className="text-center">
        <p className="font-medium text-xl text-secondary">Services</p>
      </div>
      <h1 className="text-5xl font-bold text-center pb-10">
        I can help you with
      </h1>
      <div className="flex md:flex-row flex-col gap-4">
        {services.map((item, index) => (
          <div
            key={index}
            className="card w-full md:w-96 bg-base-100 shadow-xl hover:bg-black"
          >
            <div className="card-body">
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
