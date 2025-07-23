import React from 'react'
import { Link } from 'react-router-dom'
import LastSection from '../Last/LastSection'
import Other from '../Other/Other'

function Publication() {
    return (
        <>
            {/* <Other Title="Key Dates and Registration Details" /> */}
            <section className="flex flex-col md:gap-10 gap-5   md:pt-22 pt-19  max-w-[80rem] py-5 md:py-10  mx-auto 2xl:px-0 px-3">
                <div className=''>
                    <div className='flex items-center md:mb-5 mb-3 gap-4  text-center  mx-auto justify-center text-[#014BBD]'>
                        <h1 className="text-center w-fit mx-auto font-bold lg:text-3xl text-xl underline underline-offset-8 decoration-[#4AF8BA] p-1">
                            <span className="bg-gradient-to-r from-[#032530] to-[#0A3B47] bg-clip-text text-transparent">
                                Key Dates
                            </span>
                        </h1>

                    </div>
                       <p className="mb-5 md:text-lg">Timely participation is crucial for ensuring a smooth and successful conference experience. Please take note of the important dates outlined below, which include deadlines for paper submissions, acceptance notifications, registration, and the official conference schedule. Adhering to these key milestones will help participants, authors, and attendees stay informed and prepared throughout the various stages of the conference. We encourage all contributors to mark their calendars and complete the necessary steps promptly to ensure inclusion in the final program and proceedings.

                        </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {[
                            {
                                date: "22-07-2025",
                                event: "Full Paper Submission Deadline",
                            },
                            {
                                date: "29-07-2025",
                                event: "Notification of Decision",
                            },
                            {
                                date: "05-08-2025",
                                event: "Deadline for Submitting Revised Full Paper",
                            },
                            {
                                date: "12-08-2025",
                                event: "Notification of Acceptance",
                            },
                            {
                                date: "19-08-2025",
                                event: "Camera-Ready Paper Submission",
                            },
                            {
                                date: "26-08-2025",
                                event: "Last Date for Registration / Payment",
                            },
                        ].map((item, index) => (
                            <div key={index} className="  relative  justify-center w-full h-full flex items-center     shadow-md p-5 bg-gradient-to-r from-[#032530] to-[#0A3B47]"  >
                                <section className="  ">
                                    <div className="flex items-center justify-center gap-5 z-10   h-full w-full  text-center">
                                        <div className="md:text-base text-sm font-medium flex flex-col justify-center gap-5">
                                            <p className=" w-fit p-2 text-[#032530]  md:px-5 px-3  bg-[#4AF8BA]   mx-auto">{item.date}</p>
                                            <p className="md:text-lg text-white "> {item.event}</p>
                                        </div>
                                    </div>
                                    {/* <div className="absolute top-0 right-0 w-20 h-20 bg-[#269C52] rounded-bl-full transform translate-x-6 -translate-y-6 -hover:scale-110 transition-transform duration-500"></div> */}
                                </section>
                            </div>
                        ))}
                    </div>
                </div>
                {/* <div className=''>
                    <div className='flex items-center gap-3 md:mb-5 mb-3 justify-center text-[#014BBD]'>
                        <h1 className="text-center w-fit mx-auto font-bold lg:text-3xl text-xl underline underline-offset-8 decoration-[#4AF8BA]">
                            <span className="bg-gradient-to-r from-[#032530] to-[#0A3B47] bg-clip-text text-transparent">
                                Registration Details
                            </span>
                        </h1>
                    </div>
                    <div className="max-w-[80rem] mx-auto bg-gradient-to-tr from-[#032530] to-[#0A3B47]  rounded-xl  shadow-xl md:p-6 p-3">
                        <h2 className="md:text-2xl font-bold  mb-6 flex items-center gap-2 text-white">
                            Bank Account Information
                        </h2>
                        <div className='grid lg:grid-cols-2 gap-3'>
                            <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 mb-8">
                                {[
                                    { label: 'Account Name', value: 'XXXXXXXX' },
                                    { label: 'Account Number', value: 'XXXXXXXX' },
                                    { label: 'Branch', value: 'XXXXXXXX' },
                                    { label: 'IFSC Code', value: 'XXXXXXXX' },
                                    { label: 'MICR', value: 'XXXXXXXX' },
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white p-4 "  >
                                        <p className="text-gray-500 text-sm font-medium">{item.label}</p>
                                        <p className="text-gray-900 font-semibold mt-1">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                             <div className="bg-white p-6   shadow-md  " >
                                <h3 className="text-xl font-semibold   mb-4 border-b border-b-[#4AF8BA] pb-2">
                                    Payment Instructions
                                </h3>
                                <ul className="list-inside list-disc space-y-3 text-gray-800 leading-relaxed">
                                    <li>
                                        <span className="font-medium">Register only after your article is accepted.</span>
                                    </li>
                                    <li>
                                        Payment methods: <span className="font-semibold text-blue-800">NEFT / IMPS</span> or <span className="font-semibold text-blue-800">Cash Deposit</span>.
                                    </li>
                                    <li>
                                        After payment, send <span className="italic">screenshot / reference no. / transaction ID / counter slip</span> with your paper ID.
                                    </li>
                                    <li>
                                        <span className="font-semibold">At least one author</span> of each accepted paper must register and attend.
                                    </li>
                                    <li>
                                        Selected abstracts will be published in the conference proceedings with an <span className="font-semibold">ISBN</span>.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> */}
            </section>
            <LastSection />

        </>
    )
}

export default Publication

