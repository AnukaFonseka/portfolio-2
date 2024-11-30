import React from "react";

// Mock Data
const features = [
  {
    id: 1,
    icon: "fas fa-code",
    title: "Frontend Development",
    description:
      "Creating responsive and dynamic web interfaces using modern technologies like React, Tailwind CSS, and more.",
  },
  {
    id: 2,
    icon: "fas fa-server",
    title: "Backend Development",
    description:
      "Building robust server-side logic with Node.js, Express, and integrating secure APIs.",
  },
  {
    id: 3,
    icon: "fas fa-laptop-code",
    title: "Full Stack Applications",
    description:
      "Developing end-to-end web solutions with seamless frontend and backend integration.",
  },
  {
    id: 4,
    icon: "fas fa-database",
    title: "Database Management",
    description:
      "Designing and managing databases using MySQL, MongoDB, and other relational/non-relational systems.",
  },
  {
    id: 5,
    icon: "fas fa-plug",
    title: "API Integration",
    description:
      "Connecting external services and integrating APIs to create connected applications.",
  },
  {
    id: 6,
    icon: "fas fa-cloud-upload-alt",
    title: "Deployment & Hosting",
    description:
      "Deploying web applications using modern tools like AWS, Vercel, and Docker.",
  },
];

export default function Features() {
  return (
    <div id="features" className="py-16 px-4 sm:px-8 bg-gray-100">
      <hr className="border border-gray-400 w-full mx-auto mb-12" />
      <div className="text-center sm:text-left mb-12 w-full">
        <p className="text-2xl text-pnk mt-2 leading-loose">Features</p>
        <h2 className="text-4xl sm:text-6xl font-bold text-blck">What I Do</h2>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-white shadow-lg md:px-8 md:py-12 px-6 py-10 flex flex-col justify-around rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br hover:from-pnk hover:to-red-600 group cursor-pointer"
          >
            <i
              className={`${feature.icon} text-4xl text-pnk mb-4 group-hover:text-white transition-all duration-300`}
            ></i>
            <h3 className="text-xl sm:text-2xl font-semibold text-blck mb-4 group-hover:text-white transition-all duration-300">
              {feature.title}
            </h3>
            <p className="text-gray-600 group-hover:text-white transition-all duration-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
