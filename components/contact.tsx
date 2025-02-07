'use client'
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import emailjs from 'emailjs-com';

export default function Contact() {
    const validationSchema = Yup.object({
        firstname: Yup.string().required('First name is required.'),
        lastname: Yup.string().required('Last name is required.'),
        phone: Yup.string().required('Phone number is required.'),
        email: Yup.string().required('Email is required.'),
        message: Yup.string().required('Message is required.'),
    });
    const initialvalues = {
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        message: '',
    };
    
    const handleSubmit = (
        values: {
            firstname: string;
            lastname: string;
            phone: string;
            email: string;
            message: string;
        },
        { resetForm }: { resetForm: () => void }
    ) => {
        const serviceId = 'service_d40xauf'; // Replace with your EmailJS service ID
        const templateId = 'template_7ed65sj'; // Replace with your EmailJS template ID
        const userId = 'your_user_id'; // Replace with your EmailJS public key

        const templateParams = {
            firstname: values.firstname,
            lastname: values.lastname,
            phone: values.phone,
            email: values.email,
            message: values.message,
        };

        emailjs
            .send(serviceId, templateId, templateParams, userId)
            .then((response) => {
                console.log('Email sent successfully:', response.text);
                alert('Message sent successfully');
                resetForm();
            })
            .catch((error) => {
                console.error('Failed to send email:', error);
                alert('Failed to send message.');
            });
    };
    return (
        <section id='contact' className='flex flex-col items-center bg-[#151925] lg:w-[1440px] lg:h-[842px]'>
            <div className='text-white lg:text-[42px] mt-10'>
                <span>Contact </span>
                <span className='text-[#01EEFF]'>Me!</span>
            </div>
            <div className='lg:w-[1000px] items-center'>
                <Formik
                    validationSchema={validationSchema}
                    initialValues={initialvalues}
                    onSubmit={handleSubmit}
                >
                    {() => (
                        <Form className='flex flex-col'>
                            <div className='grid grid-cols-2 grid-row-2 gap-x-4 gap-y-2'>
                            <div>
                                <Field 
                                    type='text'
                                    name='firstname'
                                    placeholder='First Name'
                                    className='bg-[#323846] w-[450px] h-[65px] rounded-md p-4 text-white placeholder:text-gray-400 text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-400'
                                />
                                <ErrorMessage
                                    name='firstname'
                                    component='div'
                                    className='text-red-500 mt-1'
                                />
                            </div>
                            
                            <div>
                                <Field 
                                    type='text'
                                    name='lastname'
                                    placeholder='Last Name'
                                    className='bg-[#323846] w-[450px] h-[65px] rounded-md p-4 text-white placeholder:text-gray-400 text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-400'
                                />
                                <ErrorMessage
                                    name='lastname'
                                    component='div'
                                    className='text-red-500 mt-1'
                                />
                            </div>
                            <div>
                                <Field 
                                    type='text'
                                    name='phone'
                                    placeholder='Phone'
                                    className='bg-[#323846] w-[450px] h-[65px] rounded-md p-4 text-white placeholder:text-gray-400 text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-400'
                                />
                                <ErrorMessage
                                    name='phone'
                                    component='div'
                                    className='text-red-500 mt-1'
                                />
                            </div>
                            <div>
                                <Field 
                                    type='text'
                                    name='email'
                                    placeholder='email'
                                    className='bg-[#323846] w-[450px] h-[65px] rounded-md p-4 text-white placeholder:text-gray-400 text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-400'
                                />
                                <ErrorMessage
                                    name='email'
                                    component='div'
                                    className='text-red-500 mt-1'
                                />
                            </div>
                            <div>
                                <Field
                                    as='textarea'
                                    name='message'
                                    placeholder='Your message'
                                    className='bg-[#323846] w-[958px] h-[320px] rounded-md p-4 text-white scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100 placeholder:text-gray-400 text-[16px] focus:outline-none focus:ring-2 focus:ring-blue-400'
                                />
                                <ErrorMessage
                                    name='message'
                                    component='div'
                                    className='text-red-500 mt-1'
                                />
                            </div>
                            </div>
                            <div className="relative lg:w-[201px] lg:h-[46px] flex self-end lg:mr-[50px] mt-12 group">
                                {/* Rectangle 2 (Blurred Background) */}
                                <div className="absolute inset-0 bg-[#01EEFF] blur-[7.5px] rounded-[15px] group-hover:blur-none transition-all duration-300"></div>
                                
                                {/* Rectangle 1 (Solid Background) */}
                                <div className="absolute inset-0 bg-[#01EEFF] rounded-[15px]"></div>

                                {/* Download CV */}
                                <button
                                    type='submit'
                                    className="absolute left-[14.89%] right-[18.94%] top-[23.91%] bottom-[23.91%] font-inter font-bold text-[20px] leading-[24px] text-black"
                                >
                                    Send
                                </button>
                                {/* <button className="absolute left-[14.89%] right-[18.94%] top-[23.91%] bottom-[23.91%] font-inter font-bold text-[20px] leading-[24px] text-black">
                                    Download CV
                                </button> */}
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    )
}
