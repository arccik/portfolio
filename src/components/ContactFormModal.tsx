const EMAIL = import.meta.env.VITE_EMAIL;

export default function Modal() {
  return (
    <button className="btn btn-sm btn-outline btn-primary">
      <a href={`mailto:${EMAIL}`}>Contact Me</a>
    </button>
  );
}
