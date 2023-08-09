import React from "react";
import {ProjectCard} from '../../components/componentsExport'
import {projectData} from './projectData'

const projectDone = projectData.map(data => (
  <ProjectCard key={data.id} img={data.img} txtH={data.txtH} txtB={data.txtB} gitLink={data.gitLink} liveLink={data.liveLink} tags={data.tag}/>
))

const Project = () => {
  return (
    <div className=" bg-[--bg-color2] ">
      <section className="flex flex-col template py-[--py] px-[--px]">
        <h1 className=" place-self-center rounded-xl py-[0.25rem] px-[1.25rem] bg-[--bg-color3] w-fit ">
          Project
        </h1>

        <h2 className=" text-[1.25rem] text-center mt-4">
          Some of the noteworthy projects I have built:
        </h2>

        <div className=" flex flex-col">
          {projectDone}
        </div>        
      </section>
    </div>
  );
};

export default Project;
