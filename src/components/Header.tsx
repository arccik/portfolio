import ContactFormModal from "./ContactFormModal";

export default function Header() {
  return (
    <header className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">
          Artur's <span className="text-primary">Portfolio</span>
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <ContactFormModal />
          </li>
        </ul>
      </div>
    </header>
  );
}
