import React, {useRef} from "react";
import emailjs from "@emailjs/browser";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bkyb474",
        "template_mil4286",
        form.current,
        "9WLQF4UncTzQi6s_r"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          form.current.reset();
          window.alert("Response has been submitted.");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="">
      <div className="lg:flex p-10">
        <div className="lg:w-1/2 flex flex-col gap-9 items-center md:p-14 ">
          <div>
            <h1 className="text-3xl font-medium">Let's Collaborate</h1>
          </div>
          <div>
            <p>
              I'm hyped to hear about your project and how I can help you
              achieve communication goals that are nothing short of epic.
              Whether you need help crafting compelling content, honing your
              writing skills, or seeking industry-specific training solutions,
              I'm your guy!
            </p>
          </div>
          <div className="flex gap-14">
            <div className="flex items-center gap-2">
              <div>
                <FaPhone />
              </div>
              <div>
                <p>0529658184</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <MdEmail />
              </div>
              <div>
                <p>angelodumag@gmail.com </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center p-14">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-9 w-full md:w-3/5">
            <input
              type="text"
              placeholder="Enter Name"
              className="border-b-4"
              name="name"
            />
            <input
              type="text"
              placeholder="Enter Email"
              className="border-b-4"
              name="email"
            />
            <textarea
              name="message"
              placeholder="Type your Message Here"
              className="border-b-4"
            />
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl shadow-xl"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
