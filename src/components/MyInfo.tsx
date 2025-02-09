import { CiLocationOn } from "react-icons/ci";
import { socialLinks } from "../data/socialLinks";

export default function MyInfo() {
  return (
    <section className="p-10 lg:p-20 lg:pt-24 lg:pb-24">
      <div className="flex lg:flex-row flex-col gap-8 lg:gap-16 items-center">
        <div className="flex flex-col items-center">
          <span className="relative shrink-0">
            <img
              alt="marclou profile picture"
              width="140"
              height="140"
              decoding="async"
              data-nimg="1"
              className="w-28 h-28 lg:w-36 lg:h-36 rounded-full object-cover border-4 border-base-300 p-1"
              style={{ color: "transparent" }}
              src="/assets/images/just-me.jpg"
            />
            <div className="absolute inset-0 rounded-full shadow-[0_0_0px_1px_rgba(0,0,0,0.06)]"></div>
          </span>
          <ul className="flex justify-center items-center gap-2 lg:gap-4 lg:justify-start flex-wrap w-full mt-4">
            {socialLinks.map((item, index) => (
              <li key={index}>
                <a
                  className="btn btn-square btn-ghost group"
                  href={item.link}
                  target="_blank"
                  aria-label={`Open link to ${item.name}`}
                >
                  <span className="transform duration-200 group-hover:scale-110 fill-base-content">
                    <item.icon className="size-5 lg:size-6" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="font-bold lg:font-extrabold text-2xl lg:text-5xl mb-2 lg:mb-4">
            Artur Lozovski
          </h1>
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-6">
            <h2 className="flex gap-2 items-center">
              <CiLocationOn className="size-5 lg:size-6" />
              <span className="text-base-content/80 text-lg lg:text-xl">
                London
              </span>
            </h2>
          </div>
          <p className="mt-4 lg:mt-6 text-lg lg:text-xl">
            I'm a software engineer based in London, specialising in building
            exceptional digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
