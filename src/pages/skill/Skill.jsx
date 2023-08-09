import React from "react";
import { SkillChip } from "../../components/componentsExport";
import { skillIcon } from "./skillData";

const Skills = () => {
  function renderSkillTools() {
   return skillIcon.map((data) => (
      <SkillChip key={data.id} icon={data.icon} txt={data.txt} />
    ));
  }

  return (
    <div className=" bg-[--bg-color1] ">
      <section className="flex flex-col template py-[--py] px-[--px]">
        <h1 className=" place-self-center rounded-xl py-[0.25rem] px-[1.25rem] bg-[--bg-color3] w-fit ">
          Skills
        </h1>
        <h2 className=" text-[1.25rem] text-center mt-4">
          The skills, tools and technologies I am really good at:
        </h2>

        <div className="flex flex-wrap">
          {renderSkillTools()}
        </div>

      </section>
    </div>
  );
};

export default Skills;
