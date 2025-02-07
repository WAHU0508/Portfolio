import React from 'react'
import Image from 'next/image'
import bucksBuddy from '@//svgs/BucksBuddy.svg'
import subscriptly from '@//svgs/subscriptly.svg'
import moringabox from '@//svgs/moringabox.svg'
import witz from '@//svgs/witz.svg'
import externalLink from '@//svgs/external_link.svg'

export default function Contact() {
    return (
        <section id='portfolio' className='flex flex-col items-center bg-[#323846] lg:w-[1440px] lg:h-[842px]'>
            <div className='text-white lg:text-[42px] mt-10'>
                <span>Our </span>
                <span className='text-[#01EEFF]'>Projects</span>
            </div>
            <div className='flex text-white grid grid-cols-2 gap-8 items-center lg:w-[800px] '>
                <div className='relative group lg:w-[374px] lg:h-[251px]'>
                    <Image
                        src={bucksBuddy}
                        width={374}
                        height={251}
                        className='rounded-[15px]'
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[rgba(1,238,255,0.57)] to-[rgba(33,33,33,0.1938)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[15px] flex flex-col items-center">
                        <h2 className="text-white font-bold text-[24px] leading-[29px] text-center">
                            Bucks Buddy
                        </h2>
                        <p className="text-white lg:h-[130px] font-medium text-[16px] leading-[19px] text-center mt-2 px-4">
                        A web application that helps users manage and track their expenses. 
                        Users can add expenses and categorize them. 
                        The application also provides a summary of expenses and displays the 
                        remaining budget.
                        </p>
                        <div className="mt-10 w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center">
                            <Image
                                src={externalLink}
                                width={27}
                                height={25}
                            />
                        </div>
                    </div>
                </div>
                <div className='relative group lg:w-[374px] lg:h-[251px]'>
                    <Image
                        src={subscriptly}
                        width={374}
                        height={251}
                        className='rounded-[15px]'
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[rgba(1,238,255,0.57)] to-[rgba(33,33,33,0.1938)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[15px] flex flex-col items-center">
                        <h2 className="text-white font-bold text-[24px] leading-[29px] text-center">
                            Subscriptly
                        </h2>
                        <p className="text-white lg:h-[130px] font-medium text-[16px] leading-[19px] text-center mt-2 px-4">
                        A subscription management application that allows users to keep track
                        of their various digital subscriptions. With features like adding and
                        canceling subscriptions, notifications for upcoming payments, and 
                        organizing subscriptions into categories.
                        </p>
                        <div className="mt-10 w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center">
                            <Image
                                src={externalLink}
                                width={27}
                                height={25}
                            />
                        </div>
                    </div>
                </div>
        
                <div className='relative group lg:w-[374px] lg:h-[251px]'>
                    <Image
                        src={moringabox}
                        width={374}
                        height={251}
                        className='rounded-[15px]'
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[rgba(1,238,255,0.57)] to-[rgba(33,33,33,0.1938)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[15px] flex flex-col items-center">
                        <h2 className="text-white font-bold text-[24px] leading-[29px] text-center">
                            Moringa Box
                        </h2>
                        <p className="text-white lg:h-[150px] font-medium text-[16px] leading-[19px] text-center mt-2 px-4">
                        A google drive clone designed for effective file storage and 
                        organization. it provides users a seamless experience in managing 
                        their files.
                        </p>
                        <div className="w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center">
                            <Image
                                src={externalLink}
                                width={27}
                                height={25}
                            />
                        </div>
                    </div>
                </div>

                <div className='relative group lg:w-[374px] lg:h-[251px]'>
                    <Image
                        src={witz}
                        width={374}
                        height={251}
                        className='rounded-[15px]'
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[rgba(1,238,255,0.57)] to-[rgba(33,33,33,0.1938)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[15px] flex flex-col items-center">
                        <h2 className="text-white font-bold text-[24px] leading-[29px] text-center">
                            Witz-Africa
                        </h2>
                        <p className="text-white lg:h-[150px] font-medium text-[16px] leading-[19px] text-center mt-2 px-4">
                        An app that connects users with suppliers and distributors of consumable goods, 
                        ensuring efficient and seamless interactions.
                        </p>
                        <div className="w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center">
                            <Image
                                src={externalLink}
                                width={27}
                                height={25}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}