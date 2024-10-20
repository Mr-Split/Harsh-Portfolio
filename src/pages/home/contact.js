import React from 'react'
import SectionTitle from '../../components/sectionTitle';

function contact() {
    const user = {
        Name: "Harsh Choudhary",
        Age: "23",
        Gender: "Male",
        Mobile: "+91 8090000158",
        Email: "hc530@snu.edu.in",
        Alternate_Email: "choudharyharsh169@gmail.com",
        Country: "INDIA"
    };
    return (
        <div>
            <section id="contact" className="p-10"></section>
            <SectionTitle title="My Details" />

            <div className='flex sm:flex-col items-center justify-between'>
                <div className='flex flex-col gap-5'>
                    <p className='text-white'>{'{'}</p>
                    {Object.keys(user).map((key) => (
                        <p className='ml-5'>
                            <span className='text-tertiary'>{key} :</span> <span className='text-white'>{user[key]}</span>
                        </p>
                    ))}
                    <p className='text-white'>{'}'}</p>
                </div>
                <div className='h-[500px]'>
                <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> <dotlottie-player src="https://lottie.host/811db360-a2f1-4ea4-82c7-44ada073326d/4xTleoUtbJ.json" background="transparent" speed="1" autoplay></dotlottie-player>
                </div>
            </div>
        </div>
    )
}

export default contact;