import React from "react";
import userData from "@constants/data";

export default function Projects() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Projects
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#e2e8f0] dark:bg-gray-900 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-10 gap-y-20">
          {userData.projects.map((proj, idx) => (
            <ProjectCard
              title={proj.title}
              link={proj.link}
              description={proj.description}
              number={`${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, description, number }) => {
  return (
    <div className="border-sky-500 dark:border-sky-500 border-l-[4px] shadow-slate-300 dark:shadow-slate-800 p-5 rounded-md shadow-xl dark:shadow-xl">
      <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
        {title}
      </h1>
      <div className="text-base font-normal my-4 text-gray-500">
        {description.map((data, idx) => (
          <div key={idx} className="mb-0.5">
            {data}
          </div>
        ))}
      </div>
      <a
        href={link}
        className="font-semibold group flex flex-row space-x-2 w-full items-center"
      >
        <p>View Repository </p>
        <div className="transform  group-hover:translate-x-2 transition duration-300">
          &rarr;
        </div>
      </a>
    </div>
    // <a href={link} className="w-full block shadow-2xl">
    //   <div className="relative overflow-hidden">
    //     <div className="h-72 object-cover">
    //       <img
    //         src={imgUrl}
    //         alt="portfolio"
    //         className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
    //       />
    //     </div>
    //     <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
    //       {title}
    //     </h1>
    //     <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
    //       {number.length === 1 ? "0" + number : number}
    //     </h1>
    //   </div>
    // </a>
  );
};
