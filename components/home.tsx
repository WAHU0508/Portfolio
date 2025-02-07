"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import photo1 from '@//svgs/photo1.svg'
import twitter_icon from '@//svgs/twitter.svg'
import github_icon from '@//svgs/github.svg'
import linkedin_icon from '@//svgs/linkedin.svg'
import instagram_icon from '@//svgs/instagram.svg'

export default function Home() {
    const [displayedText, setDisplayedText] = useState('')
    const fullText = 'Software Developer'
    const typingSpeed = 500

    useEffect(() => {
        let currentIndex = 0;

        const type = () => {
            if (currentIndex < fullText.length) {
                setDisplayedText(fullText.slice(0, currentIndex + 1));
                currentIndex++;
            } else {
              setTimeout(() => {
                setDisplayedText('');
                currentIndex = 0;
              }, 1000);
            }
        };
        const interval = setInterval(type, typingSpeed);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="bg-[#151925] text-white flex flex-row justify-center items-center w-full h-auto lg:w-[1440px] lg:h-[842px] lg:pl-[70px] pt-10 pb-10">
            <div className=' flex justify-center items-center relative lg:w-[650px] lg:h-[700px]'>
                <div className='absolute border lg:w-[537px] lg:h-[426px] border-[#01EEFF] bg-[#01EEFF] rounded-full'></div>
                <div className='absolute border lg:w-[537px] lg:h-[426px] border-[#01EEFF] bg-[#01EEFF] rounded-full blur-[30px]'></div>
                <Image
                    src={photo1}
                    width={569.41}
                    height={501.76}
                    alt="Sharon Gikenye's Photo"
                    className='absolute'
                />        
            </div>
            <div className='lg:w-[650] lg:h-[700px] lg:p-10 flex flex-col'>
                <p className='lg:text-[32px] font-black'>Hello it's me</p>
                <p className='lg:text-[60px] font-black'>Sharon Gikenye</p>
                <p className='lg:text-[32px] font-black'>And I'm a <span className='text-[#01EEFF]'>{displayedText}</span></p>
                <p className='lg:text-[24px] mt-4'>I specialize in building scalable
                    web applications and intuitive user experiences. I'm passionate about
                    turning ideas into impactful digital solutions using technologies such
                    as React.js, Next.js, Node.js, Django, Flask and python.
                </p>
                <div className='flex flex-row gap-6 mt-4'>
                    <Image src={twitter_icon} alt="twitter icon" className='hover:border hover:border-[#01EEFF]' />
                    <Image src={github_icon} alt="github icon" className='hover:border hover:border-[#01EEFF]'/>
                    <Image src={linkedin_icon} alt="linkedin icon" className='hover:border hover:border-[#01EEFF]'/>
                    <Image src={instagram_icon} alt="instagram icon" className='hover:border hover:border-[#01EEFF]'/>
                </div>
                <div className="relative lg:w-[201px] lg:h-[46px] flex self-center mt-12 group">
                    {/* Rectangle 2 (Blurred Background) */}
                    <div className="absolute inset-0 bg-[#01EEFF] blur-[7.5px] rounded-[15px] group-hover:blur-none transition-all duration-300"></div>
                    
                    {/* Rectangle 1 (Solid Background) */}
                    <div className="absolute inset-0 bg-[#01EEFF] rounded-[15px]"></div>

                    {/* Download CV */}
                    <a
                        href='/SharonWG-CV.pdf'
                        download="Sharon_Gikenye_CV.pdf"
                        className="absolute left-[14.89%] right-[18.94%] top-[23.91%] bottom-[23.91%] font-inter font-bold text-[20px] leading-[24px] text-black"
                    >
                        Download CV
                    </a>
                    {/* <button className="absolute left-[14.89%] right-[18.94%] top-[23.91%] bottom-[23.91%] font-inter font-bold text-[20px] leading-[24px] text-black">
                        Download CV
                    </button> */}
                </div>
            </div>
        </section>
    )
}