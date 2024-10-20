import React from 'react'
import SectionTitle from '../../components/sectionTitle'
import { experiences } from '../../resources/experiences'

function Experience() {
    const [selectedItemIndex , setSelectedItemIndex] = React.useState(0);
  return (
    <div>
        <section id="experience" className="p-10"></section>
        <SectionTitle title="Experience" />

        <div className='flex py-10 gap-20 sm:flex-col'>
            <div className='flex flex-col gap-10 border-l-2 border-[#096757] w-1/3 sm:overflow-x-y-scroll sm:w-full'>
                {experiences.map((experience , index) => (
                    <div onClick={() => {
                        setSelectedItemIndex(index);
                    }}
                        className='cursor-pointer'
                    >
                    <h1 className={`text-xl px-5 ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#02332d] py-3' : 'text-white'}`}>{experience.period}</h1>
                </div>
                ))}

            </div>
            <div className='flex item-center justify-center gap-10 sm:flex-col'>
                <img 
                src={experiences[selectedItemIndex].image} 
                alt={experiences[selectedItemIndex].title} 
                className="h-40 w-80"
                />
                <div className='flex flex-col gap-5'>
                <h1 className='text-secondary text-3xl'>{experiences[selectedItemIndex].title}</h1>
                <h1 className='text-tertiary text-3xl'>{experiences[selectedItemIndex].company}</h1>
                <h1 className='text-white'>{experiences[selectedItemIndex].description}</h1>
                </div>
                </div>
        </div>
    </div>
  )
}

export default Experience