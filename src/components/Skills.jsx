import React from "react";

// Mock Data for Skills (you can replace image URLs with your own)
const skills = [
  {
    id: 1,
    name: "React",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", // React logo
  },
  {
    id: 2,
    name: "Node.js",
    image:
      "https://www.sunriseintegration.com/uploads/attachments/cl4yq770gm8w7j1p76vf1ex1l-sunrise-integration-1x1-block-6.full.png", // Node.js logo
  },
  {
    id: 3,
    name: "MySQL",
    image: "https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-512.png", // MySQL logo
  },
  {
    id: 4,
    name: "MongoDB",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg", // MongoDB logo
  },
  {
    id: 5,
    name: "Tailwind CSS",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVSRkCHOvhw_BKVpwLyGwi5RfMxXmXwquQ2A&s", // Tailwind CSS logo
  },
  {
    id: 6,
    name: "Express.js",
    image:
      "https://www.step2gen.com/WebsiteAssets/assets/images/nodejs.svg", // Express.js logo
  },
  {
    id: 7,
    name: "Vite",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1200px-Vitejs-logo.svg.png", // Vue.js logo
  },
  {
    id: 8,
    name: "MySQL",
    image:
      "https://pbs.twimg.com/profile_images/1255113654049128448/J5Yt92WW_400x400.png", // GraphQL logo
  },
  {
    id: 9,
    name: "Figma",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoUX5LMRa7atIsNfl0nP3DaUaV4URhV0PHfA&s", // Docker logo
  },
  {
    id: 10,
    name: "AWS",
    image:
      "https://www.inovex.de/wp-content/uploads/Amazon_Web_Services_Logo-kl.png", // AWS logo
  },
  {
    id: 11,
    name: "Java",
    image:
      "https://static.vecteezy.com/system/resources/previews/048/332/150/non_2x/java-programming-language-java-logo-free-png.png", // TypeScript logo
  },
  {
    id: 12,
    name: "Python",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", // Python logo
  },
];

export default function Skills() {
  return (
    <div id="skills" className="pb-16 px-4 sm:px-8 bg-gray-100">
      <hr className="border border-gray-400 w-full mx-auto mb-12" />
      <div className="text-center sm:text-left mb-12 w-full">
        <p className="text-2xl text-pink-500 mt-2 leading-loose">Skills</p>
        <h2 className="text-4xl sm:text-6xl font-bold text-black">
          My Tech Stack
        </h2>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-8">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="bg-white shadow-lg px-6 py-8 flex flex-col items-center justify-center rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 group cursor-pointer"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="h-16 w-16 sm:h-24 sm:w-24 mb-4 group-hover:scale-110 transition-all duration-300"
            />
            <h3 className="text-lg sm:text-xl font-semibold text-black mb-2 group-hover:text-pink-500 transition-all duration-300">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
