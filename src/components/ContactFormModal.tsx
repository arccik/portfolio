import { useRef } from "react";
import ContactForm from "./ContactForm";
export default function Modal() {
  const modalRef = useRef<HTMLDialogElement>(null);
  const handleContactButtonClick = () => {
    modalRef.current?.showModal();
  };
  return (
    <div>
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
          <div className="modal-action top-0">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
