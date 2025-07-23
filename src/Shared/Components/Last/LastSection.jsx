import React from 'react'
import { Link } from 'react-router-dom'

function LastSection() {
    return (
        <>
            <section className=' '>
                <section className="w-full  relative bg-cover flex justify-center items-center bg-[url('/assets/images/last.jpg')] bg-no-repeat  bg-bottom " >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#032530]/60 to-[#0A3B47]/60 z-0"></div>
                    <div className="max-w-[100rem] relative  md:mx-auto mx-0  md:py-10 py-5 ">
                        <section className=" flex flex-col gap-10 ">
                            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 lg:gap-20 md:gap-10" >
                                <div className="text-center flex  p-10 flex-col justify-center items-center md:gap-4 gap-2 border-2 border-[#4AF8BA] bg-gradient-to-r from-[#032530] to-[#0A3B47]   ">
                                    <div className=" ">
                                        <i className="fi fi-rs-land-layer-location text-white flex items-center text-2xl md:text-5xl " />
                                    </div>
                                    <div className="md:text-2xl text-sm text-white" >
                                        {/* <p>International Convention Center</p> */}
                                        <p>Bangalore, India</p>
                                    </div>
                                </div>
                                <div className="text-center flex p-10 flex-col  items-center md:gap-4 gap-2 mx-auto border-2 border-[#4AF8BA] bg-gradient-to-r from-[#032530] to-[#0A3B47]  ">
                                    <div className="  ">
                                        <i className="fi fi-rr-clock text-white flex items-center text-2xl md:text-5xl " />
                                    </div>
                                    <div className="md:text-2xl text-sm text-white">
                                        <p> 3<sup>rd</sup> September , 2025</p>
                                        <p>9:00 AM - 6:00 PM</p>
                                    </div>
                                </div>
                                <div className="text-center flex  p-10 flex-col justify-center items-center md:gap-4 gap-2 mx-auto border-2 border-[#4AF8BA] bg-gradient-to-r from-[#032530] to-[#0A3B47]  " >
                                    <div className="  ">
                                        <i className="fi fi-ss-envelope text-white flex items-center text-2xl md:text-5xl "></i>
                                    </div>
                                    <div className="md:text-2xl text-sm text-white">
                                        <p>info.iciacse@gmail.com</p>

                                    </div>
                                </div>
                            </div>
                            <div className='w-fit mx-auto'>
                                <Link to="/paper-submission">
                                    <div className=" bg-white     overflow-hidden  py-3 w-fit text-[#032530] relative px-6 mx-auto cursor-pointer font-semibold  group duration-300 md:text-base text-sm z-[999]">
                                        Register Now
                                        <span style={{ clipPath: 'polygon(0 0, 86% 0, 100% 100%, 0% 100%)' }}
                                            className="absolute inset-0 bg-gradient-to-tr from-[#32e6aa] -z-40 to-[#0ae8d4] transform -translate-x-[100%] group-hover:translate-x-0 w-[200px] transition-transform duration-500 ease-in-out  "
                                        ></span>
                                    </div>
                                </Link>
                            </div>
                        </section>
                    </div>
                </section>
            </section>
        </>
    )
}

export default LastSection
