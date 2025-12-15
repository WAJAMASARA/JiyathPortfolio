"use client";

import  { useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Product Ordering Platform | Sysco Labs Project Summit",
    category: "WEB DESIGN",
    tags: ["React", "PostgreSQL", "AWS", "Docker", "Spring Boot", "JAVASCRIPT"],
    image: "/Image/summit.png", // Placeholder image
    description:
      "This project, developed as part of the Sysco Summit conducted by Sysco Labs, is a scalable food product ordering platform that allows users to search for products, manage a shopping cart, and complete purchases. It is built using a microservices architecture to ensure modularity, scalability, and efficient inter-service communication, with backend services implemented in Spring Boot and deployed on AWS using Docker for consistent and reliable environments.",
  },
  {
    id: 2,
    title: "Liquid dispenser system | Role: Leader & Developer",
    category: "Hardware Project",
    tags: [
      "C/C++",
      "Arduino mega 2560",
      "YF-S201",
      "IR and Ultrasonic Sensors",
    ],
    image: "/Image/Hardware.png", // Placeholder image
    description:
      "This first-year hardware project, selected for the EXMO exhibition at the University of Moratuwa, is an automated liquid dispenser system designed to improve efficiency and accuracy in industrial and commercial environments. The system minimizes manual handling and wastage by enabling precise liquid dispensing through sensor-driven automation, using an Arduino-based control unit and a user-friendly input interface for accurate quantity selection and cost calculation.",
  },
  {
    id: 3,
    title: "Online Service Marketplace",
    category: "WEB DESIGN",
    tags: [
      "React",
      "React Native",
      "Typescript",
      "Nest.js",
      "AWS",
      "MongoDB",
      "Firebase",
    ],
    image: "/Image/online.png", // Placeholder image
    description:
      "This second-year undergraduate project, developed for Skymax Engineering Pvt Ltd, is a comprehensive online service marketplace that connects consumers with service providers across labor and professional domains. The platform includes dedicated mobile applications for providers and consumers, along with an administrative web portal, and is built using modern technologies to ensure scalability, cross-platform compatibility, and efficient real-time data management.",
  },
  {
    id: 4,
    title: "Internship | Sysco Labs Sri Lanka",
    category: "Internship",
    tags: [
      "AWS",
      "Next.js",
      "DBeaver",
      "GCP",
      "SpringBoot",
      "APIC",
      "Okta",
      "Cognito",
      "Storybook",
    ],
    image: "/Image/intern.png", // Placeholder image
    description:
      "During my internship, I worked on SSO integration (Okta, Azure AD, Cognito), API deployment with APIC 3.0, AWS and DevOps practices, and on-the-fly zip streaming for efficient downloads. I also contributed to frontend authentication, built UI components with Storybook, and followed Agile and secure coding practices.",
  },
];

export default function Work() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      className="w-full bg-[#231F20] text-white py-20 px-6 md:px-16 font-sans"
      id="Work"
    >
      {/* --- Header Section --- */}
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-6 mb-8">
          <h1 className="text-6xl md:text-7xl font-black text-[#9ca3af] tracking-tight">
            Work
          </h1>
          <div className="h-0.5 bg-gray-600 flex-grow mt-4 opacity-50"></div>
        </div>

        <p className="max-w-2xl text-lg text-gray-400 leading-relaxed"></p>
      </div>

      {/* --- Grid Section --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer"
          >
            {/* Image Card */}
            <div className="relative overflow-hidden bg-[#2a2a4a] aspect-[4/3] mb-6 transition-transform duration-300 group-hover:-translate-y-2">
            
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              />
              {/* Overlay Gradient on Hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </div>

            {/* Text Content */}
            <div>
              <h3 className="text-xl font-bold tracking-wide text-white mb-2">
                {project.title}
              </h3>
              <div className="flex gap-3 text-sm text-gray-400 uppercase tracking-widest font-medium">
                {project.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- Popup Modal --- */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          // Close modal when clicking outside
          onClick={() => setSelectedProject(null)}
        >
          {/* Slightly invisible background (Backdrop) */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

          {/* Modal Content */}
          <div
            className="relative bg-[#1a1a1a] border border-gray-700 w-full max-w-3xl rounded-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 bg-gray-800 hover:bg-gray-700 text-white rounded-full p-2 z-10 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Modal Image */}
            <div className="relative h-64 w-full">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Modal Text */}
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-2">
                {selectedProject.title}
              </h2>
              <div className="flex gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-300 border border-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                {selectedProject.description}
              </p>

              <div className="mt-8 pt-6 border-t border-gray-700 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2 bg-white text-black font-bold hover:bg-gray-200 transition-colors"
                >
                  Close Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
