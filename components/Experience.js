import userData from "@constants/data";
import React from "react";

export default function Experience() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Experience
        </h1>
      </div>
      <div className="bg-[#e2e8f0] dark:bg-gray-900 -mt-0">
        <div className="grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-20">
          {/* Experience card */}
          {userData.experience.map((exp, idx) => (
            <>
              <ExperienceCard
                key={idx}
                title={exp.title}
                desc={exp.desc}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
              />
              {idx === userData.experience.length - 1 ? null : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className="w-4 h-4 bg-sky-300 rounded-full relative z-10">
                    <div className="w-4 h-4 bg-sky-300 rounded-full relative z-10 animate-ping"></div>
                  </div>
                  <div className="w-1 h-[104px] bg-gray-300 dark:bg-gray-700 rounded-full -mt-2"></div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

const ExperienceCard = ({ title, desc, year, company, companyLink }) => {
  return (
    <div className="relative p-5 rounded-md dark:shadow-gray-700 shadow-xl dark:shadow-2xl bg-white dark:bg-gray-800 z-10 mx-4">
      <h1 className="absolute -top-7 md:-left-10 sm:-top-10 text-md sm:text-2xl text-gray-500 font-bold dark:text-gray-500">
        {year}
      </h1>
      <h1 className="font-semibold text-xl">{title}</h1>
      <a href={companyLink} className="text-gray-500">
        {company}
      </a>
      <div className="text-gray-600 dark:text-gray-400 my-2">
      {desc.map((data, idx) => (
        <div key={idx} className="mb-0.5">
          {data}
        </div>
      ))}
      </div>
    </div>
  );
};
