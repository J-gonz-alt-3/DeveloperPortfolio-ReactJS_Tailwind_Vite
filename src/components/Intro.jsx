import React from "react";

const Intro = () => {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        JeanPierre Gonzales-Altamirano
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">Web Developer</p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        I'm an indie Front-End Web Developer, who is working towards becoming a
        Full Stack Web Developer in the near future! All coding projects are
        built from the ground up! I do take design inspiration from sites such
        as Figma, however all source code is written by me!
        <br />I am 100% self-taught, with most of my foundational training
        coming from completing projects on FreeCodeCamp.com as well as just
        watching hours upon hours of YouTube videos on Web Development topics!
      </p>
    </div>
  );
};

export default Intro;
