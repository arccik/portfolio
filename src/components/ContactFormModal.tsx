const EMAIL = import.meta.env.VITE_EMAIL;

export default function Modal() {
  return (
    <div>
      <button className="btn btn-sm btn-primary">
        <a href={`mailto:${EMAIL}`}>Contact Me</a>
      </button>
    </div>
  );
}
