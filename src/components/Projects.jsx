import React, { useState } from 'react';
import Project from './Project';
import { projectData } from '../assets/data/projectData';

const Projects = () => {
  const [projects] = useState(projectData);
  return (
    <section
      name='projects'
      className='w-full pt-16 h-full text-neutral-50 bg-[#1a1a1a]'
    >
      <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8 pl-4'>
          <h2 className='text-4xl font-bold inline border-b-4 text-neutral-50 border-cyan-800'>
            Projects
          </h2>
        </div>

        <article className='pt-8'>
          <h2 className='font-bold text-3xl pb-8 px-4 '>
            University Professional Practice Project
          </h2>
          <p className='pb-4 px-4'>
            I worked on a professional practice project during my degree, where
            I created a multiplayer boxing game for stroke and Parkinson's
            patients. The game was designed to slow down or even reverse disease
            progression, based on recent studies showing the benefits of
            rhythmic movements. The game was built for the Oculus Quest 2 and
            deployed as a standalone APK that connects to a university-hosted
            server to track patient data and create bespoke game modes.
          </p>
          <p className='pt-2 px-4'>
            The boxing game features multiplayer and single player functionality
            with an emphasis on maintaining engagement, as well as positional
            data logging and a static target game mode that can be adjusted by
            clinicians and coaches through a web interface."
          </p>
        </article>

        {/* Container */}
        <div className='grid sm:grid-cols-2 gap-4 mt-16'>
          {projects.map((project) => {
            const { id, title, text, embedId, link, image, buttontext } =
              project;

            return (
              <React.Fragment key={id}>
                <Project
                  title={title}
                  text={text}
                  embedId={embedId}
                  link={link}
                  image={image}
                  buttontext={buttontext}
                />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
