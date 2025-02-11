import Card from "./Card";
import data from "../data/projects.json";


// export default function RecentProjects() {
//   return (
//     <motion.section
//       className="p-6 lg:p-12 lg:pt-16 lg:pb-16 "
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="p-5 text-center mb-3">
//         <h1 className="font-extrabold text-2xl lg:text-5xl mb-2 lg:mb-4">
//           Explore My Projects
//         </h1>
//         <p className="text-lg lg:text-xl text-primary">
//           Click an icon to dive into my projects
//         </p>
//       </div>
//       <motion.div
//         className="rounded-box flex flex-wrap p-2 sm:justify-center gap-4 flex-grow"
//         initial={{ y: 50, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//       >
//         {data.map((project: any) => (
//           <React.Fragment key={project.title}>
//             <div>
//               <Card
//                 title={project.title}
//                 description={project.description}
//                 image={project.image}
//                 tags={project.tags}
//                 key={project.id}
//                 link={project.link}
//                 githubLink={project.github_link}
//               />
//             </div>
//             <div className="divider md:hidden"></div>
//           </React.Fragment>
//         ))}
//       </motion.div>
//     </motion.section>
//   );
// }


import { motion } from "framer-motion";

export default function Services() {
  return (
    <motion.section
      className="md:flex md:flex-col md:justify-center items-center mt-10 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="p-5 text-center mb-3"
      >
        <h1 className="font-extrabold text-2xl lg:text-5xl mb-2 lg:mb-4">
          Explore My Projects
        </h1>
        <p className="text-lg lg:text-xl text-primary">
          Click an icon to dive into my projects
        </p>
      </motion.div>
      <motion.div
        className="flex lg:flex-row flex-col flex-wrap justify-center gap-4 place-items-center pb-5 flex-grow"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {data.map((project: any) => (
          <motion.div
            key={project.title}
            className="card bg-base-100 shadow-xl hover:bg-base-300 group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <Card
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              key={project.id}
              link={project.link}
              githubLink={project.github_link}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
