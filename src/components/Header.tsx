import { useRef } from "react";
import ContactForm from "./ContactForm";

export default function Header() {
  const modalRef = useRef<HTMLDialogElement>(null);
  const handleContactButtonClick = () => {
    modalRef.current?.showModal();
  };
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
            <button
              className="btn btn-sm btn-primary"
              onClick={handleContactButtonClick}
            >
              Contact Me
            </button>
            <dialog
              ref={modalRef}
              id="my_modal_1"
              className="modal flex justify-center"
            >
              <div className="modal-box">
                <ContactForm />
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </li>
        </ul>
      </div>
    </header>
  );
}
