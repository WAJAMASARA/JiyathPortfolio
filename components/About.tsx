'úse client';

// Define the data structure for type safety
interface SkillStat {
  title: string;
  experience: string;
}

// Data for the three columns
const skills: SkillStat[] = [
  { title: "Front-End", experience: "Intermediate level Experience" },
  { title: "Cloud Services", experience: "Intermediate level Experience" },
  { title: "Back-End", experience: "Intermediate level Experience" },
];

export default function About() {
  return (
    <section
      className="w-full bg-[#231F20] text-white py-20 px-6 md:px-16 font-sans"
      id="about"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-6 mb-10">
          <h2 className="text-6xl md:text-7xl font-black text-[#9ca3af] tracking-tight">
            About
          </h2>
          <div className="h-[2px] w-full bg-[#9ca3af] opacity-60 mt-4 rounded-full" />
        </div>

        {/* Description Text */}
        <div className="mb-20">
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-4xl">
            I’m a passionate Full Stack Developer with a knack for creating
            dynamic and responsive web applications. With a strong foundation in
            both front-end and back-end technologies, I worked at Sysco Labs, a
            Fortune 500 company, where I delivered seamless user experiences and
            robust server-side solutions. My expertise includes Next.js,
            Java/Spring Boot, Storybook, API Connect (APIC), GCP, Cisco Kenna,
            Jenkins, Single Sign-On (SSO), Okta, and AWS. I thrive in
            collaborative environments and am always eager to take on new
            challenges that push my technical abilities to the next level.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-start">
              <h3 className="text-4xl md:text-5xl font-bold mb-2 text-white">
                {skill.title}
              </h3>
              <span className="text-gray-300 text-lg border-b border-gray-500 pb-1">
                {skill.experience}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
