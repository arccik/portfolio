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
    <div className="card md:w-96 w-full bg-base-200 shadow-xl group">
      <div className="card-body">
        <div className="flex">
          <h2 className="card-title justify-start">{title}</h2>
          {(link || githubLink) && (
            <div className="ml-auto flex flex-row gap-4 duration-500 group-active:scale-125 group-active:animate-bounce  text-nowrap transition-all relative after:content-['Click_Me'] after:absolute after:bottom-8 after:left-0 after:right-0 after:text-xs after:opacity-0 group-active:after:opacity-100 after:transition-opacity ">
              {githubLink && (
                <a
                  href={githubLink}
                  className=" text-primary  hover:scale-105"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="tooltip " data-tip="GitHub">
                    <BsGithub size={20} />
                  </div>
                </a>
              )}
              {link && (
                <a
                  href={link}
                  className="text-primary-focus hover:scale-105"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="tooltip  " data-tip="Visit website">
                    <BsGlobe size={20} />
                  </div>
                </a>
              )}
            </div>
          )}
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
