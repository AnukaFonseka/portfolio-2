import React from "react";
import heroImage from "../assets/profile/33.jpg"

export default function Hero() {
  return (
    <div
      id="home"
      className="flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-0 md:py-20 space-y-10 md:space-y-0"
    >
      {/* Left Section */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <p className="text-lg font-medium">Welcome to my world</p>
        <p className="text-3xl md:text-6xl font-semibold leading-tight">
          Hi, I’m <span className="text-pnk">Sewwandi</span>{" "}
          <br className="hidden md:block" /> a Full-Stack Developer
        </p>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end md:hidden">
          <img
            src={heroImage}
            // src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/04cbf851-aeb2-4af6-be64-15feff838f36/569972be-0c98-4859-87b3-dd145228b33e.png"
            alt="Jone Lee"
            className="rounded-lg shadow-lg w-10/12 md:w-8/12"
          />
        </div>
        <p className="text-gray-600 text-base md:text-lg">
          I use animation as a third dimension by which to simplify experiences
          and guide through each and every interaction. I’m not adding motion
          just to spruce things up, but doing it in ways that matter.
        </p>
        {/* Buttons */}
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start space-y-10 md:space-y-0">
          <div>
            <p className="text-base font-semibold mb-3">FIND WITH ME</p>
            <div className="flex justify-center md:justify-start space-x-4 text-gray-500">
              <a
                href="https://www.linkedin.com/in/sewwandi-nirushika-349a05238/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded shadow-lg hover:bg-pnk hover:text-white hover:scale-105 transition-transform duration-300"
              >
                <i className="fab fa-linkedin-in text-2xl md:text-3xl"></i>
              </a>
              <a
                href="https://github.com/yourgithubprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded shadow-lg hover:bg-pnk hover:text-white hover:scale-105 transition-transform duration-300"
              >
                <i className="fab fa-github text-2xl md:text-3xl"></i>
              </a>
              <a
                href="https://www.instagram.com/yourinstagramprofile/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded shadow-lg hover:bg-pnk hover:text-white hover:scale-105 transition-transform duration-300"
              >
                <i className="fab fa-instagram text-2xl md:text-3xl"></i>
              </a>
            </div>
          </div>

          <div>
            <p className="text-base font-semibold mb-3">BEST SKILLS ON</p>
            <div className="flex justify-center md:justify-start space-x-4 text-gray-500">
              <a
                href="#"
                className="bg-white w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded shadow-lg hover:bg-pnk hover:text-white hover:scale-105 transition-transform duration-300"
              >
                <i className="fab fa-react text-2xl md:text-3xl"></i>
              </a>
              <a
                href="#"
                className="bg-white w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded shadow-lg hover:bg-pnk hover:text-white hover:scale-105 transition-transform duration-300"
              >
                <i className="fab fa-node text-2xl md:text-3xl"></i>
              </a>
              <a
                href="#"
                className="bg-white w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded shadow-lg hover:bg-pnk hover:text-white hover:scale-105 transition-transform duration-300"
              >
                <i className="fas fa-database text-2xl md:text-3xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 justify-center hidden md:flex md:justify-end">
        <img
          src={heroImage}
          // src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/04cbf851-aeb2-4af6-be64-15feff838f36/569972be-0c98-4859-87b3-dd145228b33e.png"
          alt="Jone Lee"
          className="rounded-lg shadow-lg w-10/12 md:w-8/12"
        />
      </div>
    </div>
  );
}
