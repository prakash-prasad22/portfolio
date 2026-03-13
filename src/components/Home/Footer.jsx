import { useState } from "react";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MailCheck, Loader2 } from "lucide-react";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiGithubFill, RiLinkedinFill, RiTwitterXLine } from "react-icons/ri";

function Footer() {
  const [formData, setFormData] = useState({ message: "", contact: "" });
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendMessage = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        "9707@Prakash",
        "template_qpmn03q",
        { message: formData.message, email: formData.contact, contact: formData.contact },
        "UEItdvpzm2QlM9ACN"
      )
      .then(
        () => {
          emailjs.send(
            "9707@Prakash",
            "template_ltnzzzp",
            { from_name: formData.contact },
            "UEItdvpzm2QlM9ACN"
          );

          setStatus("success");
          setFormData({ message: "", contact: "" });
          
          // Reset back to form after 4 seconds
          setTimeout(() => setStatus("idle"), 4000);
        },
        (err) => {
          console.error("EmailJS Error:", err);
          setStatus("error");
          setTimeout(() => setStatus("idle"), 3000);
        }
      );
  };

  return (
    <footer className="bg-zinc-900 text-white overflow-hidden">
      {/* Tagline */}
      <div className="relative md:pt-[6vh] pt-[3vh]">
        <div className="overflow-hidden z-10">
          <h1 className="text-5xl md:text-7xl text-[#7e8279] text-center font-[primary] py-5 leading-[9vw] tracking-[-.25vw] uppercase">
            #<span className="font-[highlighted]">Code </span>
            Crafted<span className="font-[highlighted]"> With </span>Care
          </h1>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-6 relative z-10 md:mt-8 mt-4">
        {[
          { icon: <RiGithubFill />, href: "https://github.com/prakash-prasad22" },
          { icon: <RiLinkedinFill />, href: "https://www.linkedin.com/in/prakash-prasad-rai/" },
          { icon: <RiTwitterXLine />, href: "https://x.com/Prakash_221100" },
        ].map((link, i) => (
          <a
            key={i}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="border border-[#faeade33] md:size-[5vw] size-14 flex justify-center items-center rounded-full hover:bg-white/10 transition-colors"
          >
            <div className="text-2xl md:text-3xl">{link.icon}</div>
          </a>
        ))}
      </div>

      {/* Contact Section */}
      <div className="mt-20 mb-4 md:px-20 px-8 flex gap-10 md:flex-row flex-col justify-between text-gray-300 font-paragraph md:text-lg font-medium">
        
        {/* Left Side */}
        <div className="w-full md:w-1/2">
          <p className="text-[#7e8279] font-[primary] text-2xl mb-6">Get In Touch</p>
          <div className="flex gap-4 items-center text-[#7e8279] font-[primary] mb-4">
            <PiPhoneCallFill className="text-3xl md:text-4xl" />
            <div>
              <p>Call me at</p>
              <h2 className="font-[secondary] text-[#28534f] text-base md:text-xl">+91 9707319669</h2>
            </div>
          </div>

          <div className="flex gap-4 items-center text-[#7e8279] font-[primary] mb-8">
            <MdOutlineAlternateEmail className="text-3xl md:text-4xl" />
            <div>
              <p>Email me at</p>
              <h2 className="font-[secondary] text-[#28534f] text-base md:text-xl">prakashprasad221100@gmail.com</h2>
            </div>
          </div>
        </div>

        {/* Right Side - Animated Form Logic */}
        <div className="w-full md:w-1/2 relative min-h-[300px]">
          <AnimatePresence mode="wait">
            {status === "idle" || status === "error" ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-[#7e8279] font-[primary] text-2xl mb-4">Open to Work</p>
                <p className="text-[#7e8279] font-[secondary] leading-relaxed mb-4">
                  Have a project in mind? Let&apos;s build something extraordinary together. 🚀
                </p>

                <form onSubmit={sendMessage} className="flex flex-col gap-4">
                  <div className="border-b border-[#D9D9D9] py-4">
                    <textarea
                      name="message"
                      placeholder="Your ideas go here..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-transparent text-2xl outline-none placeholder:text-zinc-700 resize-none"
                      required
                    />
                  </div>

                  <div className="flex justify-between items-center border-b border-[#D9D9D9] py-4">
                    <input
                      name="contact"
                      type="email"
                      placeholder="Your E-Mail..."
                      value={formData.contact}
                      onChange={handleChange}
                      className="w-full bg-transparent text-2xl outline-none placeholder:text-zinc-700"
                      required
                    />
                    <button type="submit" className="ml-3 group">
                      <Send className="w-8 h-8 md:w-10 md:h-10 text-[#7e8279] group-hover:text-[#28534f] transition-colors" />
                    </button>
                  </div>
                </form>
                {status === "error" && <p className="text-red-400 mt-2 text-sm">Something went wrong. Try again?</p>}
              </motion.div>
            ) : (
              <motion.div
                key="status"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center"
              >
                {status === "sending" ? (
                  <div className="flex flex-col items-center gap-4">
                    <motion.div
                      animate={{ 
                        x: [0, 50, -50, 0], 
                        y: [0, -50, -20, 0],
                        rotate: [0, 15, -15, 0] 
                      }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                      <Send className="w-16 h-16 text-[#28534f]" />
                    </motion.div>
                    <p className="text-[#28534f] font-[primary] text-xl animate-pulse">Launching your message...</p>
                  </div>
                ) : (
                  <motion.div 
                    initial={{ scale: 0.5 }} 
                    animate={{ scale: 1 }} 
                    className="flex flex-col items-center gap-4"
                  >
                    <div className="bg-[#28534f]/10 p-6 rounded-full">
                      <MailCheck className="w-20 h-20 text-[#28534f]" />
                    </div>
                    <h3 className="text-2xl font-[primary] text-white">Landed Safely!</h3>
                    <p className="text-[#7e8279] font-[secondary]">I&apos;ll get back to you faster than a server ping.</p>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="py-6 border-t border-zinc-700 px-8 md:px-20 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
        <p className="text-[#28534f] text-sm md:text-base">
          Made with Love ❤️ by Prakash Prasad Rai 
        </p>
        <p className="text-gray-500 text-sm md:text-base">
          © {new Date().getFullYear()} — Built with MERN, GSAP & Framer Motion 🚀
        </p>
      </div>
    </footer>
  );
}

export default Footer;
