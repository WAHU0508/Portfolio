import React from 'react'
import Image from 'next/image'
import frontend_icon from '@//svgs/frontend_icon.svg'
import backend_icon from '@//svgs/backend_icon.svg'
import full_stack_icon from '@//svgs/full_stack_icon.svg'

export default function Contact() {
    return (
        <section id='services' className='flex flex-col items-center bg-[#151925] lg:w-[1440px] lg:h-[842px]'>
            <div className='text-white lg:text-[42px] mt-10'>
                <span>Our </span>
                <span className='text-[#01EEFF]'>Services</span>
            </div>
            <div className='flex flex-row gap-6 mt-24'>
                <div className='flex flex-col gap-4 items-center lg:w-[400px] lg:h-[430px] border border-[#323846] rounded-[25px] bg-[#323846]'>
                {/* Background Rectangle */}
                    <div className='border border-[#323846] rounded-[25px] bg-[#323846]'></div>

                    {/* Icon */}
                    <Image
                        src={frontend_icon}
                        alt='Frontend Icon'
                    />

                    {/* Title */}
                    <div className='text-white font-bold lg:text-[24px]'>
                        Frontend Development
                    </div>

                    {/* Description */}
                    <p className='lg:text-[24px] text-white text-center'>
                    Designing and implementing user interfaces that are visually appealing,
                    responsive, and user-friendly using technologies like HTML, CSS,
                    JavaScript, and frameworks such as React.js, Next.js, and Tailwind CSS.
                    </p>
                </div>
                <div className='flex flex-col gap-4 items-center lg:w-[400px] lg:h-[430px] border border-[#323846] rounded-[25px] bg-[#323846]'>
                {/* Background Rectangle */}
                    <div className='border border-[#323846] rounded-[25px] bg-[#323846]'></div>

                    {/* Icon */}
                    <Image
                        src={backend_icon}
                        alt='Backend Icon'
                    />

                    {/* Title */}
                    <div className='text-white font-bold lg:text-[24px]'>
                        Backend Development
                    </div>

                    {/* Description */}
                    <p className='lg:text-[24px] text-white text-center'>
                    Building and managing server-side logic, APIs, and databases to ensure
                    functionality, security, and performance using tools like Flask, MongoDB, 
                    and PostgreSQL.
                    </p>
                </div>
                <div className='flex flex-col gap-4 items-center lg:w-[400px] lg:h-[430px] border border-[#323846] rounded-[25px] bg-[#323846]'>
                {/* Background Rectangle */}
                    <div className='border border-[#323846] rounded-[25px] bg-[#323846]'></div>

                    {/* Icon */}
                    <Image
                        src={full_stack_icon}
                        alt='Full_stack Icon'
                    />

                    {/* Title */}
                    <div className='text-white font-bold lg:text-[24px]'>
                        Web Development
                    </div>

                    {/* Description */}
                    <p className='lg:text-[24px] text-white text-center'>
                    Combining front-end and back-end systems to create seamless, end-to-end web applications. 
                    This includes deploying, testing, and maintaining applications to ensure
                    they meet client needs and performance efficiently.
                    </p>
                </div>
            </div>
        </section>
    )
}