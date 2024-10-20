import React from 'react'
import SectionTitle from '../../components/sectionTitle'
import { projects } from '../../resources/projects'

function Project() {
    const [selectedItemIndex , setSelectedItemIndex] = React.useState(0);
  return (
    <div>
        <section id="projects" className="p-10"> </section>
        <SectionTitle title="Projects" />

        <div className='flex py-10 gap-20 sm:flex-col'>
            <div className='flex flex-col gap-10 border-l-2 border-[#096757] w-1/3 sm:overflow-x-y-scroll sm:w-full'>
                {projects.map((project , index) => (
                    <div onClick={() => {
                        setSelectedItemIndex(index);
                    }}
                        className='cursor-pointer'
                    >
                    <h1 className={`text-xl px-5 ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#02332d] py-3' : 'text-white'}`}>{project.title}</h1>
                </div>
                ))}

            </div>

                <div className='flex item-center justify-center gap-10 sm:flex-col'>
                <img 
                src={projects[selectedItemIndex].image} 
                alt={projects[selectedItemIndex].title} 
                className="h-70 w-80"
                />
                <div className='flex flex-col gap-5'>
                <h1 className='text-secondary text-4xl'>{projects[selectedItemIndex].title}</h1>
                <h1 className='text-tertiary text-xl'>{projects[selectedItemIndex].technologies_used}</h1>
                <h1 className='text-white'>{projects[selectedItemIndex].description}</h1>
                <a
                            href={projects[selectedItemIndex].github_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-tertiary"
                        >
                            {projects[selectedItemIndex].github_link}
                        </a>
                </div>

                </div>
        </div>
    </div>
  )
}

export default Project