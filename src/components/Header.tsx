import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="navbar bg-base-100">
      <motion.div
        initial={{ scale: 0, x: -100 }}
        animate={{ x: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="flex-1"
      >
        <a className="btn btn-ghost normal-case text-xl">
          Artur's <span className="text-primary">Portfolio</span>
        </a>
      </motion.div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
