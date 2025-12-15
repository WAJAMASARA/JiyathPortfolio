"use client";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";

export default function Intro() {
  return (
    <section className="bg-[#231F20] text-white min-h-[90vh] flex items-center justify-center p-8 md:p-16">
      <div className="max-w-6xl w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* --- Left Column: Text Content --- */}
        <div className="flex-1 text-left space-y-4">
          <p className="text-xl md:text-2xl font-medium">
            Hello, I&apos;m Jiyath,
          </p>

          {/* The main title using the custom accent color */}
          <h1 className="text-theme-accent text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight text-[#A3B8CC]">
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer.",
                  "JavaScript Enthusiast.",
                  "Tech Innovator.",
                  "Problem Solver.",
                  "Creative Coder.",
                  "Software Engineer.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          {/* Navigation Link */}
          <div className="pt-4">
            <Link
              href="#contact"
              className="text-white text-xl font-bold underline underline-offset-[10px]  transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* --- Right Column: Image --- */}
        <div className="flex-1 relative w-full max-w-md md:max-w-lg ls">
          {/* use a container with aspect ratio to ensure the image 
             is responsive and maintains its shape.
           */}
          <div className="aspect-square relative rounded-[40px] overflow-hidden bg-gray-800/50">
            <Image
              src="/Image/cartoonprofile.png" // profile image
              alt="Jiyath - Full Stack Developer"
              fill // This makes the image fill the container
              className="object-cover object-center"
              priority // Loads this image quickly as it's above the fold
            />
          </div>
        </div>
      </div>
    </section>
  );
}
