import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projectsData from "../assets/data/projectsData.json";
import { Box } from "@mui/material";

import p11 from "../assets/projects/book-reco/Home.png"
import p12 from "../assets/projects/book-reco/Search.png"

import p21 from "../assets/projects/book-review-app/Home-Hero.png"
import p22 from "../assets/projects/book-review-app/Home-Fav-Books.png"
import p23 from "../assets/projects/book-review-app/Book-Details.png"

import p31 from "../assets/projects/mental-wellness/Hero.png"
import p32 from "../assets/projects/mental-wellness/About.png"

import p41 from "../assets/projects/Vital-Watch/v1.png"
import p42 from "../assets/projects/Vital-Watch/v2.png"
import p43 from "../assets/projects/Vital-Watch/v3.png"
import p44 from "../assets/projects/Vital-Watch/v4.png"

import p51 from "../assets/projects/medisense/m1.png"
import p52 from "../assets/projects/medisense/m2.png"
import p53 from "../assets/projects/medisense/m3.png"
import p54 from "../assets/projects/medisense/m4.png"
import p56 from "../assets/projects/medisense/m6.png"

import p61 from "../assets/projects/wbs/w2.png"
import p62 from "../assets/projects/wbs/w1.png"

const imgArray = {
  p11, p12,
  p21, p22, p23,
  p31, p32,
  p41, p42, p43, p44,
  p51, p52, p53, p54, p56,
  p61, p62
}

const Projects = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProject(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      id="projects"
      className="pb-16 px-4 sm:px-6 bg-gray-100 flex flex-col items-center"
    >
      <hr className="border border-gray-400 w-full mx-auto mb-12" />
      <div className="text-center mb-12 w-full">
        <p className="text-2xl text-pink-600 mt-2 leading-loose">Projects</p>
        <h2 className="text-4xl md:text-6xl font-bold text-black">My Work</h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-white px-4 py-6 sm:px-6 sm:py-8 shadow-lg rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-xl cursor-pointer relative"
            onClick={() => handleOpenModal(project)}
          >
            <img
              src={imgArray[project.images[0]]}
              alt={project.name}
              className="w-full h-32 md:h-auto md:max-h-64 object-cover rounded-lg group-hover:scale-105 transition-all duration-300"
            />
            <div className="pt-4 sm:pt-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-black mb-2 group-hover:text-pink-600">
                {project.name}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {project.description}
              </p>
            </div>
            <span class="material-symbols-outlined text-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-4 right-4 text-2xl">
              open_in_new
            </span>
          </div>
        ))}
      </div>

      {/* Modal for Project Details */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 650,
            bgcolor: "white",
            borderRadius: 3,
            boxShadow: 24,
            px: 4,
            py: 5,
            maxHeight: "90vh",
            overflowY: "auto",
            outline: "none",
            "@media (max-width: 768px)": { width: "90%", px: 3, py: 4 },
            "@media (max-width: 480px)": { width: "95%", px: 2, py: 3 },
          }}
          className="text-gray-900"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {selectedProject?.name}
          </h2>
          <p className="text-sm md:text-base text-gray-700 mb-4">
            {selectedProject?.description}
          </p>

          {/* Tech Stack Section */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold mb-3">
              Tech Stack:
            </h3>
            <div className="flex flex-wrap gap-2">
              {selectedProject?.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm md:text-base font-medium shadow-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features Section */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold mb-3">
              Key Features:
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
              {selectedProject?.keyFeatures.map((feature, index) => (
                <li key={index} className="text-gray-600">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Image Slider Section */}
          <div className="mb-6">
            <Slider
              {...{
                ...settings,
                autoplay: true,
                autoplaySpeed: 3000,
                infinite: true,
                arrows: false,
              }}
            >
              {selectedProject?.images.map((image, index) => (
                <div key={index} className="outline-none">
                  <img
                    src={imgArray[image]}
                    alt={`Project image ${index + 1}`}
                    className="w-full h-48 md:h-80 object-cover rounded-lg shadow-md outline-none"
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/* GitHub Links Section */}
          <div className="flex justify-between items-center mt-4">
            <a
              href={selectedProject?.githubFrontend}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blck flex items-center space-x-1 hover:text-black transition-all text-sm md:text-base"
            >
              <i className="fab fa-github"></i>
              <span>Frontend Code</span>
            </a>
            <a
              href={selectedProject?.githubBackend}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blck flex items-center space-x-1 hover:text-blck transition-all text-sm md:text-base"
            >
              <i className="fab fa-github"></i>
              <span>Backend Code</span>
            </a>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Projects;
