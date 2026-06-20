import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-28 px-6 relative overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-violet-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}

        <div className="text-center mb-16">
          <p className="text-purple-400 uppercase tracking-widest text-sm">
            Let's Talk
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Get In{" "}
            <span className="text-purple-400">
              Touch
            </span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Have a project idea or want to collaborate?
            Feel free to reach out.
          </p>
        </div>

        {/* Contact Card */}

        <div
          className="
          grid
          lg:grid-cols-2
          gap-10
          bg-[#111827]
          border
          border-purple-500/20
          rounded-3xl
          p-8
          "
        >
          {/* Left Side */}

          <div className="space-y-8">
            <div>
              <span
                className="
                px-4
                py-2
                rounded-full
                bg-green-500/10
                text-green-400
                border
                border-green-500/20
                text-sm
                "
              >
                ● Available For Work
              </span>
            </div>

            <h3 className="text-4xl font-bold">
              Let's Build Something Amazing Together
            </h3>

            <p className="text-gray-400 leading-relaxed">
              I'm currently focused on frontend
              development and building modern web
              experiences with React and Tailwind CSS.
            </p>

            <div className="space-y-5">
              <a
                href="mailto:your@email.com"
                className="flex items-center gap-4"
              >
                <FaEnvelope className="text-purple-400 text-xl" />
                <span>your@email.com</span>
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4"
              >
                <FaGithub className="text-purple-400 text-xl" />
                <span>GitHub</span>
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4"
              >
                <FaLinkedin className="text-purple-400 text-xl" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Side */}

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="
              w-full
              bg-[#0B0F19]
              border
              border-purple-500/20
              rounded-xl
              p-4
              outline-none
              focus:border-purple-500
              "
            />

            <input
              type="email"
              placeholder="Your Email"
              className="
              w-full
              bg-[#0B0F19]
              border
              border-purple-500/20
              rounded-xl
              p-4
              outline-none
              focus:border-purple-500
              "
            />

            <input
              type="text"
              placeholder="Subject"
              className="
              w-full
              bg-[#0B0F19]
              border
              border-purple-500/20
              rounded-xl
              p-4
              outline-none
              focus:border-purple-500
              "
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="
              w-full
              bg-[#0B0F19]
              border
              border-purple-500/20
              rounded-xl
              p-4
              outline-none
              resize-none
              focus:border-purple-500
              "
            />

            <button
              type="submit"
              className="
              w-full
              py-4
              rounded-xl
              bg-gradient-to-r
              from-purple-500
              to-violet-600
              font-semibold
              hover:scale-[1.02]
              transition-all
              duration-300
              "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;