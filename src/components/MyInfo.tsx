import { CiLocationOn } from "react-icons/ci";
import { socialLinks } from "../data/socialLinks";

export default function MyInfo() {
  return (
    <section className="shrink-0 space-y-4 lg:space-y-8 lg:w-[350px] xl:w-[500px] p-6 lg:p-16 lg:pr-0 xl:pr-16 md:overflow-auto">
      <div className="flex gap-4 lg:gap-8 lg:flex-col justify-start items-start">
        <span className="relative shrink-0">
          <img
            alt="marclou profile picture"
            width="176"
            height="176"
            decoding="async"
            data-nimg="1"
            className="w-20 h-20 lg:w-44 lg:h-44 rounded-full object-cover"
            style={{ color: "transparent" }}
            src="/assets/images/just-me.jpg"
          />
          <div className="absolute inset-0 rounded-full shadow-[0_0_0px_1px_rgba(0,0,0,0.06)]"></div>
        </span>
        <div className="flex-1">
          <h1 className="font-bold lg:font-extrabold text-xl lg:text-4xl mb-1 lg:mb-3">
            Artur Lozovski
          </h1>
          <div className="flex flex-col lg:flex-row gap-1 lg:gap-4">
            <h2 className="flex gap-1 items-center">
              <CiLocationOn />

              <span className="text-base-content/80">London</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="reactMarkDown lg:text-lg leading-relaxed -space-y-4">
        <p>
          I'm a software engineer based in London, specialising in building
          exceptional digital experiences.
        </p>
      </div>

      <div className="">
        <div className="divider px-6 my-0 lg:hidden"></div>
        <ul className="flex justify-center items-center gap-2 lg:gap-4 lg:justify-start flex-wrap max-lg:p-6 w-full">
          {socialLinks.map((item, index) => (
            <li key={index}>
              <a
                className="btn btn-square btn-ghost group"
                href={item.link}
                target="_blank"
                aria-label={`Open link to ${item.name}`}
              >
                <span className="transform duration-200 group-hover:scale-110 fill-base-content">
                  <item.icon className="size-6" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
