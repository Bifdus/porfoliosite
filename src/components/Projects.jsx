import React, { useState } from 'react';
import ProjectImage from '../assets/boxing-game-2.jpg';
import Project from './Project';
import { projectData } from '../assets/data/projectData';

const Projects = () => {
  const [projects, setProjects] = useState(projectData);
  return (
    <section
      name='projects'
      className='w-full pt-16 md:h-full text-neutral-50 bg-[#1a1a1a]'
    >
      <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <h2 className='text-4xl font-bold inline border-b-4 text-neutral-50 border-cyan-800'>
            Projects
          </h2>
          <p className='pt-6'>Some of my recent work</p>
        </div>

        <article className='pb-12'>
          <h2 className='font-bold text-3xl pb-8 '>
            University Professional Practice Project
          </h2>
          <p className='pb-4'>
            Murdoch university offers a professional practice unit where
            students can gain industry experience in a controlled university
            environment. Our group was tasked with creating games for stroke and
            parkinsons rehabilitation patients.
          </p>
          <h2 className='font-bold py-4'>Boxing Game/Server</h2>
          <p>
            The game I worked on was a Single/Multiplayer game intended for
            parkinsons rehabilitation patients using the Oculus Quest 2.
          </p>
          <p className='py-6'>Requirements for the boxing game</p>
          <ul className='list-disc'>
            <li>
              Any data that can be logged about the patients movements must be
              logged and stored on a database hosted on a LAMP stack at Murdoch
              University
            </li>
            <li>
              As this is intended to be used for clinical trials. Clinicians
              must be able to have complete control of the setup of the game
              through a web interface.
            </li>
            <li>
              Boxing Game must include a static target game mode. The
              restrictions for this game mode are set by the clinician and
              boxing coach through the web interface
            </li>
          </ul>
        </article>

        {/* Container */}
        <div className='grid sm:grid-cols-2 gap-4'>
          {projects.map((project) => {
            const { id, title, text, image } = project;
            return <Project id={id} title={title} text={text} image={image} />;
          })}
          <Project image={ProjectImage} text='VR Boxing Game' />
          <Project image={ProjectImage} text='Website' />
          <Project image={ProjectImage} text='VR Boxing Game' />
        </div>
      </div>
    </section>
  );
};

export default Projects;
