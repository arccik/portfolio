import ContactFormModal from "./ContactFormModal";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      className=" p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar shadow-lg navbar-center base-300  border-primary border-b rounded-box">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl font-extrabold">
            Artur<span className="text-primary">Lozovski</span>
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <ContactFormModal />
            </li>
          </ul>
        </div>
      </div>
    </motion.header>
  );
}
