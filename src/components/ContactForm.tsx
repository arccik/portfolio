import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function GetInTouch() {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          "service_yfy9lhi",
          "template_ptgz2zi",
          form.current,
          "Jw_4qKrCMb51r0hSf"
        )
        .then(
          (result) => {
            console.log(result.text);
            setIsEmailSent(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  if (isEmailSent)
    return <p className="text-center text-5xl bg-base-300">Email Sent</p>;
  return (
    <div className="flex flex-col items-center justify-end md:justify-center w-full h-screen bg-base-100">
      <div className="text-center" id="contact">
        <p className="font-medium text-xl text-secondary">Contact me</p>
      </div>
      <h1 className="text-3xl font-bold text-center pb-10">
        Got an idea? Feel free to reach out for collabs
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="form-control w-full max-w-xs flex flex-col justify-between gap-5"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="input input-bordered input-primary w-full max-w-xs"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <textarea
          name="message"
          className="textarea textarea-bordered textarea-primary w-full max-w-xs"
          placeholder="Message"
        ></textarea>
        <button className="btn btn-primary block">Send</button>
      </form>
    </div>
  );
}
