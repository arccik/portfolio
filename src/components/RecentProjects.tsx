import Card from "./Card";
import data from "../data/projects.json";


export default function RecentProjects() {
  return (
    <div className="bg-base-300 min-h-screen md:flex  md:items-center overflow-auto">
      <div className="carousel-indicator text-center p-5">
        <h1 className="text-4xl font-bold">Projects</h1>
        <span className="text-secondary text-xs font-light">
          (More coming soon)
        </span>
      </div>
      <div className="carousel rounded-box flex flex-col md:flex-row gap-10 m-2">
        {data.map((project) => (
          <>
            <div key={project.title} className="carousel-item">
              <Card
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                key={project.id}
              />
            </div>
            <div className="divider md:hidden"></div>
          </>
        ))}
      </div>
    </div>
  );
}
