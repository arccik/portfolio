import Card from "./Card";
import data from "../data/projects.json";
import React from "react";

export default function RecentProjects() {
  return (
    <div className="bg-base-300 min-h-screen md:flex  md:items-center overflow-auto justify-center">
      <div className="carousel-indicator text-center p-5">
        <h1 className="text-4xl font-bold">Projects</h1>
        <span className="text-secondary text-xs font-light text-ellipsis">
          From inception to production.
        </span>
      </div>
      <div className="carousel rounded-box flex flex-wrap m-10 gap-4">
        {data.map((project) => (
          <React.Fragment key={project.title}>
            <div className="carousel-item w-[350px] h-[400px]">
              <Card
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                key={project.id}
                link={project.link}
                githubLink={project.github_link}
              />
            </div>
            <div className="divider md:hidden"></div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
