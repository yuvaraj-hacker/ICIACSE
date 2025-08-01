
import React, { useState } from 'react'
import Contct from '../Contct/Contct'
import { toast } from 'react-toastify';
import Other from '../Other/Other';

function Contact() {

    const [formData, setFormData] = useState({ firstname: "", email: "", number: "", message: "" });
    const [status, setStatus] = useState('');
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('firstname', formData.firstname);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('number', formData.number);
            formDataToSend.append('message', formData.message);
            const response = await fetch('https://iciacse.com/api/message_mail.php', {
                method: 'POST',
                body: formDataToSend,
            });

            if (response.ok) {
                const result = await response.text();
                setStatus(result);
                setFormData({
                    firstname: '',
                    email: '',
                    number: '',
                    message: '',
                });
                toast.success("submitted successfully!");
                console.log("success")
            } else {
                setStatus('Failed to send submission. Please try again.');
                toast.error('Failed to send submission. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('An error occurred. Please try again.');
            toast.error('An error occurred. Please try again.');
        }
    };



    return (
        <>
            {/* <Other Title="Contact Us" /> */}
            <section className="max-w-screen-xl mx-auto w-full px-3 2xl:px-0  py-5 md:py-10 md:pt-22 pt-19 ">
                <div className="lg:flex md:flex  gap-8 ">
                    <div className="max-w-full w-full ">
                        <div className="lg:max-w-3xl max-w-xl w-full mx-auto ">
                            <div className="  :bg-gray-900 lg:px-20 md:px-5 ">
                                <div className=' text-center mx-auto flex justify-center md:mb-5 mb-3 '>
                                    <h1 className="text-center w-fit mx-auto rounded-full font-bold lg:text-3xl text-xl  underline underline-offset-8 decoration-[#4AF8BA] p-1">
                                        <span className="bg-gradient-to-r from-[#032530] to-[#0A3B47] bg-clip-text text-transparent">
                                            Contact Us
                                        </span>
                                    </h1>
                                </div>
                                <div className="mx-auto max-w-screen-md relative">
                                    {/* <div className="absolute top-0 right-0 w-20 h-20 bg-[#269C52] rounded-bl-full transform translate-x-6 -translate-y-6 -hover:scale-110 transition-transform duration-500"></div> */}
                                    <form onSubmit={handleSubmit} className="w-full grid lg:grid-cols-1 gap-5 bg-gradient-to-r shadow-xl   text-white   from-[#032530] to-[#0A3B47]   p-5 "
                                        ngNativeValidate>
                                        <div className="">
                                            <label for="firstname" className="block mb-2 text-sm mt-4   ">
                                                Name
                                            </label>
                                            <input type="text" name="firstname" id="firstname" value={formData.firstname} onChange={handleChange} ngModel className="shadow-sm    border text-sm    border-gray-300  focus:outline-none bg-white text-black focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  mt-4" placeholder="Enter Your Name" required />
                                        </div>
                                        <div>
                                            <label for="email" className="block mb-2 text-sm mt-4  ">
                                                Email
                                            </label>
                                            <input type="email" name="email" id="email" onChange={handleChange} value={formData.email} ngModel className="shadow-sm     focus:outline-none border bg-white text-black   border-gray-300    text-sm   focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   mt-4 "
                                                placeholder="name@gmail.com" required />
                                        </div>
                                        <div>
                                            <label for="number" className="block mb-2 text-sm       mt-4 "  >
                                                Contact Number
                                            </label>
                                            <input type="text" name="number" id="number" onChange={handleChange} value={formData.number} ngModel className="shadow-sm     focus:outline-none bg-white text-black  border   border-gray-300    text-sm   focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   mt-4  "
                                                placeholder="Enter Your Mobile Number" required />
                                        </div>
                                        <div className="  mt-4">
                                            <label for="message" className="block mb-2 text-sm   ">
                                                Your Message
                                            </label>
                                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} ngModel rows="4" className="block    p-2.5 w-full text-sm shadow-sm border bg-white text-black  focus:outline-none   border-gray-300   focus:ring-primary-500 focus:border-primary-500   mt-4 " placeholder="Leave a Message..." ></textarea>
                                        </div>
                                        <div className="text-center md:mt-0 mt-5   ">
                                            <button type="submit" className="py-3 px-6 text-sm   text-center relative overflow-hidden group z-10  shadow-lg  hover:shadow-xl    bg-white   duration-300  text-[#032530]  cursor-pointer  font-semibold   " >
                                                {status === 'Sending...' ? 'Submitting...' : 'Send message'}

                                                <span
                                                    style={{
                                                        clipPath: 'polygon(0 0, 86% 0, 100% 100%, 0% 100%)'
                                                    }}
                                                    className="absolute inset-0 bg-gradient-to-tr from-[#32e6aa] to-[#0ae8d4] transform -translate-x-[100%] group-hover:translate-x-0 w-[200px] transition-transform duration-500 ease-in-out -z-10"
                                                ></span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Contct />
        </>
    )
}

export default Contact

