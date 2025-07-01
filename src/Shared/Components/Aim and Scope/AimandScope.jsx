import React from 'react';
import { Link } from 'react-router-dom';
import LastSection from '../Last/LastSection';
import Other from '../Other/Other';

function AimandScope() {
    const topics = [
        {
            title: "Advanced Algorithms and Data Structures",
            desc: "Explore modern algorithm design, optimization, and efficient data structures.",
        },
        {
            title: "Artificial Intelligence and Machine Learning",
            desc: "Delve into AI and ML models, applications, and deep learning advances.",
        },
        {
            title: "Cloud and Edge Computing",
            desc: "Innovations in distributed cloud architecture and edge computing solutions.",
        },
        {
            title: "Big Data Analytics and Data Science",
            desc: "Scalable data processing and intelligent data-driven decision making.",
        },
        {
            title: "Software Architecture and Engineering Practices",
            desc: "Best practices and patterns in building scalable and reliable software.",
        },
        {
            title: "Cybersecurity and Privacy",
            desc: "Strategies for securing systems, data protection, and threat detection.",
        },
        {
            title: "Internet of Things (IoT) and Embedded Systems",
            desc: "Connect physical and digital worlds through smart systems and sensors.",
        },
        {
            title: "Blockchain and Decentralized Applications",
            desc: "Revolutionize trust and transparency with blockchain and DApps.",
        },
        {
            title: "Human-Computer Interaction and UX Design",
            desc: "Design intuitive user experiences and accessible interfaces.",
        },
        {
            title: "Agile Development and DevOps",
            desc: "Accelerate delivery with agile workflows and DevOps practices.",
        },
        {
            title: "Quantum Computing and Simulation",
            desc: "Explore quantum algorithms and next-gen computational models.",
        },
        {
            title: "High-Performance and Parallel Computing",
            desc: "Tackle intensive tasks using parallel and GPU-based systems.",
        },
        {
            title: "Software Testing and Quality Assurance",
            desc: "Ensure performance and reliability through modern QA strategies.",
        },
        {
            title: "Natural Language Processing and Computer Vision",
            desc: "Machines understanding text, speech, and visual inputs.",
        },
        {
            title: "Mobile and Web Application Development",
            desc: "Build responsive, high-performance apps across devices.",
        },
    ];

    return (
        <>
            {/* <Other Title="Scope of the Conference" /> */}
            <section className="flex flex-col  md:gap-10 gap-5  max-w-[80rem]  md:py-10 py-5 mx-auto md:px-5 px-3 md:pt-22 pt-19 ">
                <section className="grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-3 items-center">
                    <div className='flex flex-col md:gap-5 gap-3'>
                        <h1 className="text-center w-fit mx-auto font-bold lg:text-3xl text-xl underline underline-offset-8 decoration-[#4AF8BA] p-1">
                            <span className="bg-gradient-to-r from-[#032530] to-[#0A3B47] bg-clip-text text-transparent">
                                Scope of the Conference
                            </span>
                        </h1>
                        <div className="flex flex-col gap-5">
                            <p className="text-justify md:text-lg text-sm leading-7">
                                The International Conference on Innovations in Advanced Computing and Software Engineering aims to provide a dynamic platform for researchers, academicians, industry professionals, and students to share their latest research findings, innovations, and practical applications in the fields of computing and software engineering. The conference focuses on cutting-edge technologies and emerging trends that are shaping the future of intelligent systems, software design, data analytics, and high-performance computing.
                            </p>                        </div>
                    </div>
                    <div className=" overflow-hidden">
                        <img className="h-64 sm:h-80 w-full object-cover " rel="preload" src="/assets/images/five.jpg" alt="Conference Visual" />
                    </div>
                </section>
                <section className="">
                    <div className="mx-auto text-justify text-gray-700 space-y-4 text-sm md:text-base leading-7">
                        <h1 className="text-center w-fit mx-auto font-bold lg:text-3xl text-xl underline underline-offset-8  decoration-[#4AF8BA]  mb-6">
                            <span className="bg-gradient-to-r from-[#032530] to-[#0A3B47] bg-clip-text text-transparent">
                                Areas of Interest
                            </span>
                        </h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {topics.map((topic, index) => (
                                <div
                                    key={index}
                                    className="bg-white shadow-md   p-6 border-2 border-[#0A3B47] border-b-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                >
                                    <h3 className="text-xl font-semibold text-[#032530] mb-2 text-left">{topic.title}</h3>
                                    <p className="text-gray-600 md:text-base text-sm">{topic.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </section>
            <LastSection />
        </>
    );
}

export default AimandScope;
