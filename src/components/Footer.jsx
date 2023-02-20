import React from "react";

const Footer = () => {
  return (
    <div className="py-5 text-center text-sky-700 dark:text-sky-400">
      <p className="text-sm mt-2 opacity-50">
        &copy; {new Date().getFullYear()} JeanPierre Gonzales-Altamirano. All
        Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
