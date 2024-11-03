import React, { useRef } from 'react';
import myProfile from '../../assets/profile.jpg';


function Intro() {
  const profileRef = useRef(null); 

  const scrollToProfile = () => {
    if (profileRef.current) {
      profileRef.current.scrollIntoView({ behavior: 'smooth' }); 
    }
  };
  return (
    <div className='flex flex-col w-full items-center justify-center gap-8 py-10'>
      
      {/* Intro Text Section */}
      <div className='flex flex-col items-start justify-center gap-8 w-full px-6'>
        <h1 className='text-3xl text-white'>Hi, I am</h1>
        <h1 className='text-7xl sm:text-2xl text-secondary font-semibold'>
          Harsh Choudhary
        </h1>
        <h1 className='text-7xl sm:text-2xl text-white font-semibold'>
          I build things for the web.
        </h1>
        <p className='text-2xl text-white w-full sm:w-full sm:text-xl'>
          As a fullstack developer with a passion for backend development and DevOps, I focus on building scalable server-side applications and optimizing deployment pipelines. Eager to deepen my skills in database management, cloud services, and CI/CD, I aim to bridge the gap between development and operations, contributing to efficient, innovative teams.
        </p>
        <button
          onClick={scrollToProfile} // Attach scroll function to the button
          className='border-2 border-tertiary text-tertiary px-10 py-3 rounded hover:text-white hover:border-white'
        >
          Let's Begin
        </button>
      </div>

      {/* Profile Image Section */}
      <div ref={profileRef} className="myProfile" ></div>
      <div className='flex justify-center w-full px-6'>
        <img
          src={myProfile}
          alt="Profile"
          className='w-80 h-80 rounded-full object-cover sm:w-64 sm:h-64'
        />
      </div>
    </div>
  );
}

export default Intro;

