import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import ProjectTags from "./ProjectTags";

const ProjectCard = ({ img, txtH, txtB, gitLink, liveLink, tags }) => {
  return (
    <div className="flex flex-col gap-12 mt-12 px-8">
      <div className="flex flex-col lg:flex-row w-full justify-between overflow-hidden lg:h-[400px] rounded-xl">
        <div className=" p-12 h-full w-full lg:w-1/2 bg-[--bg-color3]">
          <img
            src={img}
            alt=""
            id="project-shadow"
            className=" rounded-xl h-full w-full object-fill"
          />
        </div>

        <div className=" flex flex-col p-12 lg:w-1/2 h-full bg-[--bg-color1] gap-6 overflow-hidden">
          <h1 className=" text-[1.25rem] font-semibold text-ellipsis w-full text-[--color1]">
            {txtH}
          </h1>

          <p>{txtB}</p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <ProjectTags key={index} tag={tag} />
            ))}
          </div>

          <div className=" flex items-center flex-wrap gap-8">
            <a
              href={gitLink}
              target="_blank"
              className=" text-[1.5rem] p-2 transition-bg duration-200 hover:bg-[--bg-color2] rounded-xl text-[--bg-color3]"
              rel="noreferrer"
            >
              <FiGithub />
            </a>
            <a
              href={liveLink}
              target="_blank"
              className=" text-[1.5rem] p-2 transition-bg duration-200 hover:bg-[--bg-color2] rounded-xl text-[--bg-color3]"
              rel="noreferrer"
            >
              <FiExternalLink />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
