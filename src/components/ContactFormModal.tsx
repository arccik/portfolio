const EMAIL = import.meta.env.VITE_EMAIL;

export default function Modal() {
  return (
    <div>
      <button className="btn btn-sm">
        <a href={`mailto:${EMAIL}`}>Contact Me</a>
      </button>
    </div>
  );
}
