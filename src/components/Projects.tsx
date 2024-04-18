import Card from "./Card";
import data from "../data/projects.json";
import React from "react";

export default function RecentProjects() {
  return (
    <section className="overflow-scroll md:h-[calc(100vh-60px)] rounded-tl-xl">
      <div className="p-5 text-center">
        <h1 className="font-bold lg:font-semibold text-xl lg:text-4xl mb-1 lg:mb-3">
          Projects
        </h1>
        <span className="text-secondary text-ellipsis text-md md:text-2xl font-thin m-5 ml-0">
          From inception to production.
        </span>
      </div>
      <div className="bg-base-300">
        <div className="rounded-box flex flex-wrap p-2 md:p-10 justify-center gap-4">
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
      </div>
    </section>
  );
}
