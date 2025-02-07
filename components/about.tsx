"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import photo2 from '@//svgs/photo2.svg'

export default function About() {

    const [isTextVisible, setIsTextVisible] = useState(false);

    const handleButtonClick = () => {
        setIsTextVisible(!isTextVisible);
    };
    return (
        <section id='about' className='flex flex-col items-center bg-[#323846] lg:w-[1440px] lg:h-[842px]'>
            <div className='flex flex-row text-white mt-10'>
                <div className='lg:w-[650px] flex flex-col gap-6'>
                    <div className="text-white font-inter font-extrabold text-[36px] mt-12">
                        <span>About </span> 
                        <span className='text-[#01EEFF]'>Me</span>
                    </div>
                    <div className="text-white font-inter font-extrabold text-[24px] leading-[29px]">
                        Software Developer
                    </div>
                    
                    <div className='lg:w-[500px]'>
                    {/* Group 4 */}
                        <p className="text-white font-inter font-normal text-[20px]">
                            I am a passionate software developer and a proud graduate of Moringa School,
                            where I completed my software engineering training in November 2024. My expertise
                            lies in building responsive, user-friendly web applications using modern frameworks
                            like React.js and Next.js.
                        </p>
                        {/* Hidden Description */}
                        {isTextVisible && (
                            <p className="text-white font-inter font-normal text-[20px]">
                            I have a strong eye for design and efficiency, utilizing tools like Tailwind
                            CSS and Bootstrap to craft seamless user interfaces. On the backend, I
                            specialize in developing scalable, secure systems using Flask and
                            PostgreSQL. I am dedicated to writing clean, maintainable code and enjoy
                            tackling challenging problems to deliver impactful digital solutions.
                            </p>
                        )}
                        <div className="relative justify-center items-center lg:w-[150px] lg:h-[46px] flex mt-12 group">
                            {/* Rectangle 1 */}
                            <div className="absolute inset-0 bg-[#01EEFF] rounded-[15px]"></div>

                            {/* Rectangle 2 (Blur Effect) */}
                            <div className="absolute inset-0 bg-[#01EEFF] blur-[7.5px] rounded-[15px]"></div>

                            {/* Button */}
                            <button
                            onClick={handleButtonClick}
                            className=" absolute font-inter font-bold text-[20px] text-black"
                            >
                            {isTextVisible ? 'Hide' : 'See more'}
                            </button>
                        </div>

                    
                    </div>
                </div>
                <div className='lg:w-[650px] h-auto flex justify-center items-center'>
                    <div className=' flex justify-center items-center relative lg:w-[650px] lg:h-[700px]'>
                        <div className="absolute w-[518px] h-[463px] border-[20px] border-[#01EEFF] rounded-full blur-[10px]"></div>
                        <Image 
                            src={photo2}
                            width={568}
                            height={540}
                            alt="Sharon Gikenye's photo"
                            className='absolute'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}