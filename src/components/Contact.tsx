import linkedinLogo from "../assets/linkedin-icon.svg";
import facebookLogo from "../assets/facebook.svg";
import githubLogo from "../assets/github-icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faSquareCheck,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const warmupServer = async () => {
      try {
        const response = await fetch(
          "https://email-server-9m9b.onrender.com/warmup",
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const text = await response.text();

        console.log(text);
      } catch (error) {
        console.error("Error warming up the server:", error);
      }
    };

    warmupServer();

    const intervalId = setInterval(warmupServer, 1200000);

    return () => clearInterval(intervalId);
  }, []);

  const resetForm = () => {
    if (nameRef.current) nameRef.current.value = "";
    if (emailRef.current) emailRef.current.value = "";
    if (messageRef.current) messageRef.current.value = "";
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");
    console.log("ran");

    try {
      if (!nameRef.current || !emailRef.current || !messageRef.current) {
        throw Error;
      }
      const name = nameRef.current.value;
      const email = emailRef.current.value;
      const message = messageRef.current.value;
      const response = await fetch(
        "https://email-server-9m9b.onrender.com/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        },
      );
      if (response.ok) {
        setMessage("Message sent successfully!");
        resetForm();
      } else {
        setError("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to send message. Please try again later.");
    }
    setLoading(false);
  };

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      className="flex flex-col items-center mt-20 mb-5"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.75 }}
    >
      <h1>Contact Me</h1>
      <div className="card rounded-3xl w-[900px] flex flex-col items-center relative p-4">
        {loading && (
          <div className=" bg-[#00000033] flex justify-center items-center absolute w-full h-full top-0 rounded-3xl">
            <div className="loader h-14" />
          </div>
        )}
        <p className="text-[18px]">
          Feel Free to email me here or reach out on any of my socials below
        </p>
        {message && (
          <div className="flex justify-between items-center bg-green-200 text-green-500 border border-green-500 w-[92%] rounded-md p-4 h-16 mt-2">
            <div className="flex items-center">
              <FontAwesomeIcon className="mr-4" icon={faSquareCheck} />
              <p>{message}</p>
            </div>
            <FontAwesomeIcon onClick={() => setMessage("")} icon={faXmark} />
          </div>
        )}
        {error && (
          <div className="flex justify-between items-center bg-red-200 text-red-500 border border-red-500 w-[92%] rounded-md p-4 h-16 mt-2">
            <div className="flex items-center">
              <FontAwesomeIcon className="mr-4" icon={faCircleExclamation} />
              <p>{error}</p>
            </div>
            <FontAwesomeIcon onClick={() => setError("")} icon={faXmark} />
          </div>
        )}
        <form onSubmit={handleSubmit} className="w-full space-y-4 p-4">
          <input
            ref={nameRef}
            className="bg-white rounded-lg w-[95%] h-12 p-2"
            type="text"
            name="name"
            placeholder="Your Name"
            required
            disabled={loading}
          />
          <input
            ref={emailRef}
            className="bg-white rounded-lg w-[95%] h-12 p-2"
            type="text"
            name="email"
            placeholder="Your email"
            disabled={loading}
          />
          <textarea
            ref={messageRef}
            className="bg-white rounded-lg w-[95%] h-[200px] p-2"
            name="message"
            placeholder="Message"
            disabled={loading}
          ></textarea>
          <button
            className={`w-[95%] text-2xl ${loading && "bg-[#506dab] bg-opacity-50"}`}
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending . . . " : "Send"}
          </button>
        </form>
      </div>
      <div className="flex justify-around mt-4 mb-1 space-x-6">
        <a
          href="https://www.linkedin.com/in/brigham-dent-64a7b2247/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-16" src={linkedinLogo} alt="" />
        </a>
        <a
          href="https://www.facebook.com/brigham.dent/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-16" src={facebookLogo} alt="" />
        </a>
        <a
          href="https://github.com/brighamdent"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-16" src={githubLogo} alt="" />
        </a>
      </div>
      <p>brighamdent@gmail.com</p>
    </motion.div>
  );
};
