import React from 'react'

function LeftSider() {
  return (
    <div className='fixed left-0 bottom-0 px-10 sm:static'>
        <div className='flex flex-col gap-10 items-center'>
        <div className='w-[5px] h-32 bg-[#125f63] sm:hidden'></div>
        <div className='flex flex-col gap-10 sm:flex-row'>
            <a href="https://www.linkedin.com/in/harsh-choudhary-a1aa96227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='blank'>
            {" "}
            <i className="ri-linkedin-box-fill text-gray-400 text-xl"></i>
            </a>

            <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGMGLJKHrSqWRwfqhjlRTPJfTbgHMfDjJfvbsfPGSlDKJTVcZVgzznmzFHcPqFNxmnCmrQX" target='blank'>
            {" "}
            <i className="ri-mail-fill text-gray-400 text-xl"></i>
            </a>

            <a href="https://github.com/Mr-Split" target='blank' >
            {" "} 
            <i className="ri-github-fill text-gray-400 text-xl"></i>
            </a>

            <a href="https://www.instagram.com/harshu.1o1?igsh=OGkzZ243ZHZ3Z3l6" target='blank'>
            {" "}
            <i className="ri-instagram-line text-gray-400 text-xl "></i>
            </a>
        </div>
        <div className='w-[5px] h-32 bg-[#125f63] sm:hidden'></div>
        </div>
    </div>
  );
}

export default LeftSider;