import React from "react";

export default function Footer() {
  const handleScroll = (sectionId) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-black text-white py-10">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-10 md:space-y-0">
          {/* Logo and Description */}
          <div className="flex flex-col space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-bold text-pnk">Sewwandi Fernando</h2>
            <p className="text-gray-400 max-w-md mx-auto md:mx-0">
              I'm a passionate full-stack developer, creating engaging and
              functional digital experiences that leave a lasting impression.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4 text-center md:text-left">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleScroll("features")}
                  className="text-gray-400 hover:text-pnk transition-all"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("projects")}
                  className="text-gray-400 hover:text-pnk transition-all"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("work")}
                  className="text-gray-400 hover:text-pnk transition-all"
                >
                  Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("contact")}
                  className="text-gray-400 hover:text-pnk transition-all"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col space-y-4 text-center md:text-left">
            <h3 className="text-xl font-semibold">Follow Me</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.linkedin.com/in/sewwandi-nirushika-349a05238/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pnk text-2xl transition-all"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/yourgithubprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pnk text-2xl transition-all"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.instagram.com/yourinstagramprofile/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pnk text-2xl transition-all"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col space-y-4 text-center md:text-left">
            <h3 className="text-xl font-semibold">Contact Me</h3>
            <div>
              <p className="text-gray-400 hover:text-pnk transition-all">
                <i className="fas fa-phone-alt text-pnk"></i> +94 77 123 4567
              </p>
              <p className="text-gray-400 hover:text-pnk transition-all">
                <i className="fas fa-envelope text-pnk"></i>{" "}
                sewwandi.fernando@email.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-600 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Sewwandi Fernando. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
