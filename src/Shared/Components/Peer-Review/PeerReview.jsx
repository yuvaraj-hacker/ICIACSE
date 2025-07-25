import React from 'react'
import { Link } from 'react-router-dom'
import LastSection from '../Last/LastSection'
import Other from '../Other/Other'

function PeerReview() {
    return (
        <>
            {/* <Other Title="Conference Tracks" /> */}
            <section className="flex flex-col md:gap-5 gap-3 max-w-[80rem] py-5 md:py-10  md:pt-22 pt-19  mx-auto 2xl:px-0 px-3">
                {/* <h2 className="md:text-2xl text-xl font-bold  md:mb-2">📌 Why These Tracks Matter</h2> */}
                <h1 className="text-center w-fit mx-auto font-bold lg:text-3xl text-xl underline underline-offset-8 decoration-[#4AF8BA] p-1">
                    <span className="bg-gradient-to-r from-[#032530] to-[#0A3B47] bg-clip-text text-transparent">
                        Conference Tracks
                    </span>
                </h1>
                <p className="md:text-lg text-sm   leading-relaxed">
                    In today’s digital era, innovations in advanced computing and software engineering are revolutionizing the way we solve real-world problems and build a smarter, more sustainable future. The <span className='font-semibold'>International Conference on Innovations in Advanced Computing and Software Engineering </span>  features meticulously curated tracks that address the most significant and emerging areas in the field.

                    These tracks are designed to encourage cutting-edge research, practical applications, and interdisciplinary collaboration. Whether you're a researcher, academician, industry professional, startup innovator, or student, ICIACSE provides a platform to present ideas, learn from experts, and engage with a global community of technology leaders.
                </p>
                <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-6   max-w-[80rem] mx-auto">
                     {[

                        {
                            title: "Artificial Intelligence and Data Science",
                            desc: "Exploring innovative algorithms, machine learning models, and data analytics techniques to solve real-world challenges across domains such as healthcare, finance, and smart systems."
                        },
                        {
                            title: "Advanced Cloud Computing and Distributed Systems",
                            desc: "Focusing on scalable, secure, and high-performance computing solutions using cloud architectures, virtualization, and distributed technologies."
                        },
                        {
                            title: "Internet of Things (IoT) and Cyber-Physical Systems",
                            desc: "Designing and deploying smart, sensor-enabled systems that bridge the gap between the physical and digital world for intelligent automation and monitoring."
                        },
                        {
                            title: "Software Engineering Principles and Agile Development",
                            desc: "Advancing modern methodologies in software design, development, testing, DevOps, and agile project management for efficient and reliable software delivery."
                        },
                        {
                            title: "Cybersecurity and Privacy Engineering",
                            desc: "Addressing challenges in securing data, networks, and applications, with emphasis on cryptography, threat detection, privacy preservation, and secure software systems."
                        },
                        {
                            title: "Blockchain and Decentralized Applications",
                            desc: "Investigating blockchain technologies, smart contracts, and decentralized platforms for secure, transparent, and trustworthy digital ecosystems."
                        },
                        {
                            title: "Edge and Fog Computing",
                            desc: "Utilizing edge and fog architectures to enable low-latency, real-time processing for applications in autonomous systems, smart devices, and industrial automation."
                        },
                        {
                            title: "Human-Centered Computing and HCI",
                            desc: "Exploring user experience, interactive system design, and assistive technologies to build inclusive and accessible software applications."
                        },
                        {
                            title: "Big Data Infrastructure and Analytics",
                            desc: "Building intelligent platforms for processing, analyzing, and managing large-scale data to uncover actionable insights in various industries."
                        },
                        {
                            title: "Serverless Architectures and Microservices",
                            desc: "Enabling fast, flexible, and cost-effective application development using Function-as-a-Service (FaaS), event-driven programming, and microservice patterns."
                        },
                        {
                            title: "Smart Cities and Intelligent Systems",
                            desc: "Developing intelligent infrastructure and digital services to support sustainable urban development and improve quality of life through automation and data-driven planning."
                        },
                        {
                            title: "Sustainable and Green Computing",
                            desc: "Promoting energy-efficient technologies, eco-conscious system design, and responsible computing practices to reduce the environmental footprint of digital innovation."
                        }
                    ].map((track, index) => (
                        <>
                            <div key={index} className="group flex items-start gap-4 bg-white  transition-all duration-300 transform hover:-translate-y-2 border-2 border-[#0A3B47] border-b-4 border-b-[#0A3B47] p-5 "  >
                                <div className="flex-1">
                                    <h3 className="text-gray-800 font-bold md:text-lg text-base  transition-colors">
                                        {track.title}
                                    </h3>
                                    <div className='flex items-center gap-3'>
                                        {/* <div className="bg-[#2487DB] text-[#269C52] skew-6 p-2">
                                        </div> */}
                                        <p className="text-gray-600 text-sm md:text-base mt-1">
                                            {track.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </section>
            <LastSection />

        </>
    )
}

export default PeerReview

