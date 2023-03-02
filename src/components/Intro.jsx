import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const Intro = () => {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-fuchsia-400 mb-1 md:mb-3 font-bold font-serif text-fuchsia-600 ">
        JeanPierre <br />
        Gonzales-Altamirano
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium text-sky-600 dark:text-sky-400">
        Support Engineer/Adjunct Professor
      </p>
      <div className="text-5xl flex justify-center py-3 text-blue-600">
        <a
          href="https://www.linkedin.com/in/gonzalesaltamiranoje/"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>
        <a
          className="px-3 text-pink-600"
          href="https://github.com/J-gonz-alt-3"
          target="_blank"
        >
          <AiFillGithub />
        </a>
      </div>
      <p className="text-sm max-w-xl mb-6 font-bold">
        Welcome to my Portfolio! <br /> <br /> I'm a self-taught Front-End Web
        Developer who has expertise in the following programming languages:
        JavaScript, Java, Python, and C++. <br />
        <br />
        This entire site was coded from the ground up by me, using JavaScript as
        the front-end programming language, React as my Framework, and Vite as
        my boilerplate!
        <br />
        <br /> I currently hold the{" "}
        <span className="text-fuchsia-600 dark:text-fuchsia-400">
          <a
            href="https://www.freecodecamp.org/certification/jpgcodes/responsive-web-design"
            target="_blank"
          >
            Responsive Web Design Certification
          </a>
        </span>{" "}
        and{" "}
        <span className="text-fuchsia-600 dark:text-fuchsia-400">
          <a
            href="https://www.freecodecamp.org/certification/jpgcodes/javascript-algorithms-and-data-structures"
            target="_blank"
          >
            JavaScript Algorithms and Data Structures Certification
          </a>
        </span>{" "}
        from{" "}
        <span className="text-sky-600 dark:text-sky-400">
          <a href="https://www.freecodecamp.org" target="_blank">
            freecodecamp.org
          </a>
        </span>
        . <br />
        <br />
        The coding projects below were created with the purpose of learning
        various frameworks/CSS technolgies to improve my Front-End development
        skills.
      </p>
    </div>
  );
};

export default Intro;
