import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import Title from "./Title";

const Intro = () => {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        JeanPierre Gonzales-Altamirano
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">Web Developer</p>
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
        Full Stack Web Developer in the near future! <br />
        <br />I am 100% self-taught, with most of my foundational training
        coming from completing countless projects and even receiving the{" "}
        <span className="text-teal-500">
          <a
            href="https://www.freecodecamp.org/certification/jpgcodes/responsive-web-design"
            target="_blank"
          >
            Responsive Web Design Certification
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
        Aside from that, I've also dedicated countless hours to watching various
        YouTube channels/videos on Web Development topics!
        <br />
        <br />
        All coding projects below have been built from the ground up using
        VSCode!
      </p>
      <Title>Completed Projects</Title>
    </div>
  );
};

export default Intro;
