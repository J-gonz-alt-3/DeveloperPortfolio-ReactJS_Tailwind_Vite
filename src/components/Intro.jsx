import React from "react";
import { AiFillLinkedin } from "react-icons/ai";

const Intro = () => {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold font-serif">
        JeanPierre <br />
        Gonzales-Altamirano
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Support Engineer/College Professor
      </p>
      <div className="text-5xl flex justify-center py-3 text-blue-600">
        <a
          href="https://www.linkedin.com/in/gonzalesaltamiranoje/"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>
      </div>
      <p className="text-sm max-w-xl mb-6 font-bold">
        Welcome to my Portfolio! <br /> <br /> I'm a self-taught Front-End Web
        Developer who has expertise in the following programming languages:
        Python, C++, JavaScript. <br />
        <br />
        This entire site was coding from the ground up by me, using JavaScript
        as the front-end programming language, React as my Framework, and Vite
        as my boilerplate!
        <br />
        <br /> I currently hold the{" "}
        <span className="text-teal-500">
          <a
            href="https://www.freecodecamp.org/certification/jpgcodes/responsive-web-design"
            target="_blank"
          >
            Responsive Web Design Certification
          </a>
        </span>{" "}
        and{" "}
        <span className="text-teal-500">
          <a
            href="https://www.freecodecamp.org/certification/jpgcodes/javascript-algorithms-and-data-structures"
            target="_blank"
          >
            JavaScript Algorithms and Data Structures Certification
          </a>
        </span>{" "}
        from{" "}
        <span className="text-teal-500">
          <a href="https://www.freecodecamp.org" target="_blank">
            freecodecamp.org
          </a>
        </span>
        . <br />
        <br />
        The coding projects below were created with the purpose of learning
        various frameworks/CSS technolgies to improve my Front-End development
        skills.
        <br />
        <br />
        If you would like to view the source code for these projects, then check
        out my{" "}
        <span className="text-teal-500">
          <a href="https://github.com/J-gonz-alt-3" target="_blank">
            GitHub!
          </a>
        </span>
      </p>
    </div>
  );
};

export default Intro;
