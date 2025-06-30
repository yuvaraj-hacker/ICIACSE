import React from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'

function Other({ Title }) {
    return (
        <>
            <section className="  relative overflow-hidden">
                <section className="relative lg:h-[30vh] w-full "  >
                    <div className=" h-full w-full   bg-cover object-center z-0 flex items-center justify-center ">
                        <div className="  z-10 lg:pt-0 pt-20  lg:pb-0 pb-10 flex  justify-center items-center lg:gap-7 gap-5 styless   bg-gradient-to-r from-[#032530] to-[#0A3B47] " >
                            <div className=" grid grid-cols-1 lg:grid-cols-2 max-w-[90rem] mx-auto md:gap-10 gap-5 items-center lg:px-5">
                                <div className= " flex flex-col gap-6 lg:px-0 px-4">
                                        <p className=" text-white">Contact Us</p>
                                </div>
                                <div className="relative">

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Other
