import React from "react";

const experiences = [
  {
    id: 1,
    title: "Software Engineer, Intern",
    company: "Amerck Inc. StratfordAve, Colombo.",
    duration: "Aug 2023 - Oct 2023",
    description:
      "Interned as a Backend Developer. Developed REST APIs using Node.js, Express, and Sequelize. Conducted API testing using Insomnia, ensuring functionality and reliability. Worked within an Agile development environment, utilizing Jira and Confluence for task management and team collaboration."
  },
  {
    id: 2,
    title: "Software Engineer, Intern",
    company: "Escarta Pvt. ltd",
    duration: "May 2022 - Aug 2022",
    description:
      "Interned as a Software Engineer for 3 months, focusing on developing simulation processes for an army tank simulator project using Unity. Gained hands-on experience in Unity software.",
  },

];

export default function Work() {
  return (
    <div
      id="work"
      className="pb-16 px-4 sm:px-8 bg-gray-100 flex flex-col items-center"
    >
      {/* Section Title */}
      <hr className="border border-gray-400 w-full mx-auto mb-12" />
      <div className="text-center sm:text-left mb-12 w-full max-w-screen-lg">
        <p className="text-2xl text-pnk mt-2 leading-loose">Career</p>
        <h2 className="text-4xl sm:text-6xl font-bold text-blck">
          Work Experience
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative border-l-2 border-pnk w-full max-w-screen-lg">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="mb-6 sm:mb-10 ml-6 group transition-all duration-300 cursor-pointer"
          >
            {/* Timeline Marker */}
            <div className="absolute w-4 h-4 bg-pnk rounded-full -left-2.5 border-2 border-wht"></div>
            {/* Content */}
            <div className="bg-white hover:bg-pnk p-6 rounded-lg shadow-lg transition-all duration-300 group-hover:text-white">
              <h3 className="text-xl sm:text-2xl font-semibold text-blck transition-all duration-300 group-hover:text-white">
                {exp.title}
              </h3>
              <p className="text-lg text-pnk font-medium transition-all duration-300 group-hover:text-white">
                {exp.company}
              </p>
              <span className="text-gray-500 text-sm transition-all duration-300 group-hover:text-white">
                {exp.duration}
              </span>
              <p className="text-gray-600 mt-4 transition-all duration-300 group-hover:text-white">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
