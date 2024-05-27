import linkedinLogo from "../assets/linkedin-icon.svg";
import facebookLogo from "../assets/facebook.svg";
import githubLogo from "../assets/github-icon.svg";

export const Contact = () => {
  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    console.log(name);
    console.log(email);
    console.log(message);
    try {
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
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };
  return (
    <div className="flex flex-col items-center mt-20 mb-5">
      <h1>Contact Me</h1>
      <div className="card rounded-3xl w-[900px] flex flex-col h-[475px] items-center  p-4">
        <p className="text-[18px]">
          Feel Free to email me here or reach out on any of my socials below
        </p>
        <form onSubmit={handleSubmit} className="w-full space-y-4 p-4">
          <input
            className="bg-white rounded-lg w-[90%] h-12 p-2"
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            className="bg-white rounded-lg w-[90%] h-12 p-2"
            type="text"
            name="email"
            placeholder="Your email"
          />
          <textarea
            className="bg-white rounded-lg w-[90%] h-[200px] p-2"
            name="message"
            placeholder="Message"
          ></textarea>
          <button className="w-[90%] text-2xl" type="submit">
            Send
          </button>
        </form>
      </div>
      <div className="flex justify-around mt-4 mb-1 space-x-6">
        <img className="w-16" src={linkedinLogo} alt="" />
        <img className="w-16" src={facebookLogo} alt="" />
        <img className="w-16" src={githubLogo} alt="" />
      </div>
      <p>brighamdent@gmail.com</p>
    </div>
  );
};
