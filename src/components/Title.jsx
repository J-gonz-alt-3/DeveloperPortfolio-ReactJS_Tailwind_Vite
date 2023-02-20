import React from "react";

const Title = ({ children, id }) => {
  return (
    <h1
      id={id && id}
      className="text-2xl font-bold underline underline-offset-8 decoration-4 mb-5  dark:text-fuchsia-400 text-fuchsia-600"
    >
      {children}
    </h1>
  );
};

export default Title;
