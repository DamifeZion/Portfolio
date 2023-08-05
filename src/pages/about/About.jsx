import React from "react";
import pic from "../../assets/Damife.jpg";

const About = () => {
  return (
    <div className=" bg-[--bg-color2]">
      <section
        id="about"
        className="template flex flex-col py-[--py] px-[--px] text-[--color2]"
      >
        <h1 className=" place-self-center rounded-xl py-[0.25rem] px-[1.25rem] bg-[--bg-color3]">
          About me
        </h1>

        <div className="flex flex-col lg:flex-row justify-between mt-12">
          
        <div
          className="md:hidden lg:block w-8/12 place-self-center lg:ml-10 lg:place-self-start md:w-[35%] smlg:w-[30%] lg:w-[35%] h-[250px] sm:h-[350px] smlg:h-[350px] lg:h-[500px] relative z-[2] before:border-b-[1rem] before:border-r-[1rem] before:border-l-[1rem] md:before:border-r-[0] md:before:border-b-[1.5rem] md:before:border-l-[1.5rem] smlg:before:border-b-[1.8rem] smlg:before:border-l-[1.8rem] before:border-[--bg-color3] before:absolute before:w-[120%] md:before:w-full before:h-full before:right-1/2 md:before:top-10 before:translate-x-1/2 before:-bottom-7 md:border-l-0 md:before:translate-x-0 md:before:-left-8 smlg:before:-left-9 smlg:before:top-10 lg:before:-left-10 lg:before:top-10 before:z-[-1]"
        >
          <img
            src={pic}
            alt="Developer image"
            className=" w-full h-full object-cover"
          />
        </div>

          <div className="mt-16 md:mt-0 lg:mt-0 w-full lg:w-[50%] flex flex-col gap-4">
            <h1 className=" text-[--color1] text-[1.5rem] md:text-[1.85rem] font-semibold">
              Curious about me? Here you have it:
            </h1>

            <p className=" mt-[.5rem]">
              Hey there! I'm Olaleye Martins Damife Zion, a passionate and
              dedicated MERN stack developer. While my educational background is
              in mass communication, my love for coding led me to pursue a
              career in full-stack development. Recently, I underwent
              comprehensive training in full-stack development and gained
              valuable hands-on experience during my time as an apprentice at a
              coding bootcamp.
            </p>

            <p className="">
              I possess a diverse skill set, encompassing a wide range of
              technologies and frameworks. I'm proficient in Git, Tailwind CSS,
              React, Redux, Bootstrap, Material-UI, Express.js, Node.js,
              MongoDB, HTML, CSS, SCSS, Sass, and JavaScript. With these tools
              at my disposal, I have successfully built several projects that
              showcase my ability to deliver high-quality solutions..
            </p>

            <p className="">
              Coding is more than just a job for me—it's my passion and a
              never-ending journey of self-improvement. My unwavering motivation
              stems from my desire to become the very best in the field. I
              thrive on challenges and continually push myself to enhance my
              skills and knowledge. Each project I undertake is an opportunity
              to create something remarkable and make a positive impact..
            </p>

            <p className="">
              With a keen eye for detail and a knack for adapting quickly, I
              excel in managing multiple projects concurrently. I thrive in
              collaborative environments, leveraging my exceptional
              communication skills both orally and in writing. Although I'm
              relatively new to the tech industry, my determination and
              fast-learning abilities enable me to quickly catch up with the
              latest trends and emerging technologies.
            </p>

            <p className="">
              Beyond coding, I enjoy maintaining a well-rounded lifestyle. I
              find inspiration in various activities, such as working out,
              playing games, watching movies, reading books, attending tech
              events, and exploring new music. These endeavors fuel my
              creativity and contribute to my holistic approach to
              problem-solving. I'm eager to embark on an exciting journey as
              either a frontend or backend developer, leveraging my skills and
              passion to deliver exceptional results. If you're looking for a
              dedicated and adaptable professional who's ready to make a
              meaningful impact, I'd love to connect with you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
