/*import React from 'react'
import SectionTitle from '../../components/sectionTitle'

function about() {
    const skills = [
        "C++",
        "C#",
        "JavaScript",
        "React",
        "NodeJS",
        "Spring Boot",
        "MongoDb",
        "MySQL",
        "GO lang",
        "AWS",
        "Jenkins",
        "Git/Github"
    ]
    return (
        <div>
            <SectionTitle title="About" />

            <div className='flex w-full item-center sm:flex-col'>
                <div className='h-[60vh] w-1/2 sm:w-full'> 

    <dotlottie-player src="https://lottie.host/ff9ee715-27bd-4a40-8c29-93c3ca020b1f/Q841BO06GY.json"
                        //style="width: 300px; height: 300px" 
                        background="transparent"
                        speed="1"
                        autoplay
                    ></dotlottie-player>
                </div>
                <div className='flex flex-col gap-5 w-1/2 sm:w-full'>
                    <p className='text-2xl text-white'>
                        Hello! My name is Harsh Choudhay. A passionate Fullstack Developer with a strong focus on backend development and DevOps. As a fresher, I have skills in front-end and back-end technologies, with an emphasis on system optimization and workflow automation. I’m eager to contribute to projects that challenge me and support my growth in infrastructure management.
                    </p>
                    <p></p>
                    <p></p>
                    <p className='text-2xl text-white'>
                    Skilled in various programming languages and frameworks, I build scalable web applications and quickly adapt to new technologies. I thrive in collaborative environments, contributing to development while continuously learning. With a focus on delivering high-quality solutions, I’m eager to expand my expertise in fullstack development, backend engineering, and DevOps.
                    </p>
                </div>
            </div>

            <div className='py-5'>
                <h1 className='text-tertiary text-xl gap-10'>
                    Here are few technologies I've been working with recently:
                    </h1>
                    <div className='flex flex-wrap gap-10 mt-5'>
                    {skills.map((skill, index) => (
                        <div className='border border-tertiary py-3 px-10'>
                        <h1 className='text-tertiary'>{skill}</h1>
                        </div>
                    ))}
                    </div>
            </div>
        </div>
    )
}

export default about */

import React from 'react';
import SectionTitle from '../../components/sectionTitle';
import { FaJsSquare, FaReact, FaNodeJs, FaAws, FaGithub, FaJenkins} from 'react-icons/fa';
import { PiFileCppFill, PiFileCSharpFill } from 'react-icons/pi'; // Importing C++ and C# icons
import { SiMongodb, SiSpringboot } from 'react-icons/si'; // Importing MongoDB and Spring Boot icons
import { GrMysql } from 'react-icons/gr'; // Importing MySQL icon
import { BiLogoGoLang } from "react-icons/bi";

function About() {
    const skills = [
        { name: "", icon: <PiFileCppFill  style={{ fontSize: '3rem', color: 'white' }} /> }, 
        { name: "", icon: <PiFileCSharpFill style={{ fontSize: '3rem', color: 'white' }} /> },
        { name: "JavaScript", icon: <FaJsSquare style={{ fontSize: '3rem', color: 'white' }} /> },
        { name: "React", icon: <FaReact style={{ fontSize: '3rem', color: 'white' }} /> },
        { name: "NodeJS", icon: <FaNodeJs style={{ fontSize: '3rem', color: 'white' }} /> },
        { name: "Spring Boot", icon: <SiSpringboot style={{ fontSize: '3rem', color: 'white' }} /> },
        { name: "MongoDB", icon: <SiMongodb style={{ fontSize: '3rem', color: 'white' }} /> },
        { name: "MySQL", icon: <GrMysql style={{ fontSize: '3rem', color: 'white' }} /> },
        { name: "Lang", icon: <BiLogoGoLang style={{ fontSize: '3rem', color: 'white' }} /> }, 
        { name: "", icon: <FaAws style={{ fontSize: '3rem', color: 'white' }} /> },
        { name: "Jenkins", icon: <FaJenkins style={{ fontSize: '3rem', color: 'white' }} /> }, 
        { name: "Git/GitHub", icon: <FaGithub style={{ fontSize: '3rem', color: 'white' }} /> },
    ];

    return (
        <div>
            <section id="about" className="p-10"></section>
            <SectionTitle title="About" />

            <div className='flex w-full items-center sm:flex-col'>
                <div className='h-[60vh] w-1/2 sm:w-full'>
                    <dotlottie-player
                        src="https://lottie.host/ff9ee715-27bd-4a40-8c29-93c3ca020b1f/Q841BO06GY.json"
                        background="transparent"
                        speed="1"
                        autoplay
                    ></dotlottie-player>
                </div>
                <div className='flex flex-col gap-5 w-1/2 sm:w-full'>
                    <p className='text-2xl text-white sm:text-xl'>
                        Hello! My name is Harsh Choudhary. A passionate Fullstack Developer with a strong focus on backend development and DevOps. As a fresher, I have skills in front-end and back-end technologies, with an emphasis on system optimization and workflow automation. I’m eager to contribute to projects that challenge me and support my growth in infrastructure management.
                    </p>
                    <p className='text-2xl text-white sm:text-xl'>
                        Skilled in various programming languages and frameworks, I build scalable web applications and quickly adapt to new technologies. I thrive in collaborative environments, contributing to development while continuously learning. With a focus on delivering high-quality solutions, I’m eager to expand my expertise in fullstack development, backend engineering, and DevOps.
                    </p>
                </div>
            </div>

            <div className='py-5'>
                <h1 className='text-tertiary text-xl'>
                    Here are a few technologies I've been working with recently:
                </h1>
                <div className='flex flex-wrap gap-10 mt-5'>
                    {skills.map((skill, index) => (
                        <div key={index} className='border border-tertiary py-3 px-10 flex items-center gap-2'>
                            {skill.icon} {/* Render the icon */}
                            <h1 className='text-white'>{skill.name}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;

