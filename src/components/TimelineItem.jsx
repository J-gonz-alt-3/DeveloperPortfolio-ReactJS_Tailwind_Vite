import React from "react";

const TimelineItem = ({ year, title, company, duration, details }) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l  border-sky-600 dark:border-sky-400">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-fuchsia-300 rounded-full mt-1.5 -left-1.5 border border-sky-600 dark:border-sky-600 dark:bg-fuchsia-400"></div>
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold  text-sky-400 dark:text-white bg-stone-800 dark:bg-sky-500 rounded-md">
            {year}
          </span>
          <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
            {title}
          </h3>
          <div className="my-1 text-sm font-normal leading-none text-fuchsia-700 dark:text-fuchsia-400">
            {company}
          </div>
          <div className="my-1 text-sm font-normal leading-none text-sky-700 dark:text-sky-400">
            {duration}
          </div>
        </p>
        <p className="my-2 text-base font-normal text-stone-700 dark:text-stone-300">
          {details}
        </p>
      </li>
    </ol>
  );
};

export default TimelineItem;
