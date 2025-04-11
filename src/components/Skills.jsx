import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDocker } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiExpress, SiMongodb, SiPostgresql, SiPrisma } from 'react-icons/si';

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js",
  "TypeScript", "Express", "MongoDB", "PostgreSQL", "Prisma", "Docker"
];

const skillIconMap = {
  HTML: <FaHtml5  />,
  CSS: <FaCss3Alt />,
  JavaScript: <FaJsSquare />,
  React: <FaReact />,
  "Next.js": <SiNextdotjs />,
  "Node.js": <FaNodeJs />,
  TypeScript: <SiTypescript />,
  Express: <SiExpress />,
  MongoDB: <SiMongodb />,
  PostgreSQL: <SiPostgresql />,
  Prisma: <SiPrisma />,
  Docker: <FaDocker />,
};

const Skills = () => {
  return (
    <div className="flex flex-wrap gap-3 p-2 mt-5">
      {skills.map((skill) => (
        <div
          key={skill}
          className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 shadow text-sm"
        >
          {skillIconMap[skill]}
          <span>{skill}</span>
        </div>
      ))}
    </div>
  );
};

export default Skills


