import Card from "./Card";
import data from "../data/projects.json";
import React from "react";

export default function RecentProjects() {
  return (
    <section className="bg-base-300">
      <div className="carousel-indicator p-5 md:p-10">
        <h1 className="text-4xl md:text-5xl font-medium">Projects</h1>
        <span className="text-secondary  text-ellipsis text-xl md:text-2xl font-thin m-5 ml-0">
          From inception to production.
        </span>
      </div>
      <div className="bg-base-300 md:flex   overflow-auto justify-center">
        <div className="carousel rounded-box flex flex-wrap p-2 md:p-10 justify-center gap-4">
          {data.map((project) => (
            <React.Fragment key={project.title}>
              <div>
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
      </div>{" "}
    </section>
  );
}
