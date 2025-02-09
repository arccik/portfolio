import ContactFormModal from "./ContactFormModal";

export default function Header() {
  return (
    <header className=" p-4">
      <div className="navbar bg-base-100 shadow-lg navbar-center  border-primary border-b rounded-box">
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
      </div>
    </header>
  );
}
