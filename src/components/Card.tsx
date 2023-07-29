import { BsGithub, BsGlobe } from "react-icons/bs";

type Props = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  githubLink?: string;
};

export default function Card({
  title,
  description,
  image,
  tags,
  link,
  githubLink,
}: Props) {
  return (
    <div className="card md:w-96 w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex">
          <h2 className="card-title justify-start">{title}</h2>
          <div className="ml-auto flex flex-row gap-10">
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noreferrer">
                <div className="tooltip tooltip-open" data-tip="GitHub">
                  <BsGithub size={20} />
                </div>
              </a>
            )}
            {link && (
              <a href={link} target="_blank" rel="noreferrer">
                <div className="tooltip tooltip-open " data-tip="Link">
                  <BsGlobe size={20} />
                </div>
              </a>
            )}
          </div>
        </div>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {tags.map((tag) => (
            <div key={tag} className="badge badge-primary">
              {tag}
            </div>
          ))}
        </div>
      </div>
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
    </div>
  );
}
