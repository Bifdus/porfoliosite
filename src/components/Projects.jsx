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
          <p className='py-6'>Some of my recent work:</p>
        </div>

        <article className='pb-12'>
          <h2 className='font-bold text-3xl pb-8 px-4 '>
            University Professional Practice Project
          </h2>
          <p className='pb-4 px-4'>
            As part of my degree, I undertook a professional practice unit which
            allowed me to gain industry experience in a controlled learning
            environment. As part of this unit, my group was tasked with creating
            a game for stroke and parkinsons patients, on the back of recent
            studies showing that rhythmic movements can slow or even regress
            disease progression.
          </p>
          <p className='pt-2 px-4'>
            The game we developed was a single/multiplayer boxing game, designed
            for play on the Oculus Quest 2. The game was deployed as a
            standalone apk that connects to a server hosted at the University.
            This allows patient data to be logged to track progress and enables
            bespoke game modes to be set up for specific patient needs.
          </p>
          <p className='py-6 px-4 font-bold'>
            The boxing game design brief was as follows:
          </p>
          <ul className='styled-list'>
            <li>
              The game must be a functional multiplayer, with a focus on
              maintaining engagement over time. We were informed that previous
              projects had seen success in testing phases, but a significant
              decrease in participation rates once the trial had finished likely
              due to the absence of social encouragement.
            </li>
            <li>
              Positional data is to be logged to the database hosted on a sever
              at the University for later processing.
            </li>
            <li>
              The Game must include a static target game mode. The restrictions
              for this game mode must be able to be set by the clinician and
              boxing coach through a web interface
            </li>
          </ul>
        </article>

        {/* Container */}
        <div className='grid sm:grid-cols-2 gap-4'>
          {projects.map((project) => {
            const { id, title, text, image, link } = project;
            // if (project.id === 4) {
            //   return (
            //     <>
            //       <h2>Other Projects</h2>
            //       <div>
            //         <Project id={id} title={title} text={text} image={image} />
            //       </div>
            //     </>
            //   );
            // }
            return (
              <Project
                id={id}
                title={title}
                text={text}
                image={image}
                link={link}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
