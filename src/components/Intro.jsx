import React from "react";
import { AiFillLinkedin } from "react-icons/ai";

const Intro = () => {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        JeanPierre <br />
        Gonzales-Altamirano
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Freelance Web Developer
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
        I'm an indie Front-End Web Developer, who is working towards becoming a
        Full Stack Web Developer! <br />
        <br />
        While I did take a couple college level programming courses during my
        undergraduate years, for the most part I am 100% self taught!
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
        All coding projects below have been built from the ground up using
        VSCode! If you would like to view the source code for these projects,
        then check out my{" "}
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
