// import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import Lottie from "lottie-react";
// import animationData from "../assets/lottie/email-send.json";

// export default function ContactForm() {
//   const [isEmailSent, setIsEmailSent] = useState(false);
//   const form = useRef<HTMLFormElement | null>(null);

//   const sendEmail = () => {
//     if (form.current) {
//       emailjs
//         .sendForm(
//           "service_yfy9lhi",
//           "template_ptgz2zi",
//           form.current,
//           "Jw_4qKrCMb51r0hSf"
//         )
//         .then(
//           (result) => {
//             console.log(result.text);
//             setIsEmailSent(true);
//           },
//           (error) => {
//             console.log(error.text);
//           }
//         );
//     }
//   };
//   if (isEmailSent) {
//     return (
//       <div>
//         <p className="text-center text-4xl mt-10">Email Sent</p>
//         <Lottie animationData={animationData} width={500} height={500} />
//       </div>
//     );
//   }
//   return (
//     <div className="flex flex-col items-center justify-end md:justify-center w-full h-full  pb-10 bg-white">
//       <div className="carousel-indicator text-center p-5 " id="contact">
//         <h1 className="text-4xl font-bold">Contact me</h1>
//         <span className="text-secondary text-xs font-light">
//           Got an idea? Feel free to reach out for collabs
//         </span>
//       </div>

//       <form
//         ref={form}
//         className="form-control w-full max-w-xs flex flex-col justify-between gap-5"
//       >
//         <input
//           type="text"
//           name="name"
//           required
//           placeholder="Your Name"
//           className="input input-bordered input-primary w-full max-w-xs"
//         />

//         <input
//           type="email"
//           name="email"
//           required
//           placeholder="Your Email"
//           className="input input-bordered input-primary w-full max-w-xs"
//         />
//         <textarea
//           required
//           name="message"
//           className="textarea textarea-bordered textarea-primary w-full max-w-xs"
//           placeholder="Message"
//         ></textarea>
//         <button
//           onClick={sendEmail}
//           className="btn btn-primary block"
//           type="button"
//         >
//           Send
//         </button>
//       </form>
//     </div>
//   );
// }
