import React from 'react'
import { Link } from 'react-router-dom'
import LastSection from '../Last/LastSection'
import Other from '../Other/Other'

function About() {
  const attendees = [
    "World-class keynote speakers from academia and industry",
    "Technical paper presentations and peer-reviewed research ",
    "Industry-focused workshops and panels",
    "Networking opportunities and collaborations",
    "Recognition for outstanding contributions and innovations",
    "Exposure to emerging technologies and trends",
  ];
  return (
    <>
      {/* <Other Title="About the Conference" /> */}
      <section className="flex flex-col  md:gap-10 gap-5  max-w-[80rem]  md:py-10 py-5 mx-auto md:px-5 px-3 md:pt-22 pt-19  ">
        <section className="grid md:grid-cols-1 grid-cols-1 md:gap-5 gap-3 items-start">
          <div className='flex flex-col md:gap-7 gap-3'>
            <div>
              <h1 className="text-center w-fit mx-auto font-bold lg:text-3xl text-xl underline underline-offset-8 decoration-[#4AF8BA] p-1">
                <span className="bg-gradient-to-r from-[#032530] to-[#0A3B47] bg-clip-text text-transparent">
                  About
                </span>
              </h1>
              <div>
              </div>
            </div>
            <div className="grid lg:grid-cols-7   gap-5 items-start">
              <img src="/assets/images/abouts.jpg" className=" mx-auto rounded-3xl col-span-3" alt="" />
              <div className="mx-auto text-center leading-none text-[#4AF8BA] flex lg:flex-col flex-row items-center gap-4 lg:gap-0 ">
                <div className=" flex lg:flex-col flex-row">
                  <h1 className="h-fit w-fit m-0 p-0 font-bold md:text-[120px] text-[60px]" style={{ lineHeight: "1" }}>20</h1>
                  <h1 className="h-fit w-fit m-0 p-0 font-bold md:text-[120px]  text-[60px]" style={{ lineHeight: "1" }}>25</h1>
                </div>
                <p className="m-0 p-0 md:text-2xl text-xl  font-bold">20 August</p>
              </div>
              <div className="col-span-3">
                <div className=" flex flex-col gap-3 ">
                  <p className="text-justify md:text-lg text-sm leading-7">
                    The International Conference on Innovations in Advanced Computing and Software Engineering (ICIACSE) is a prestigious interdisciplinary platform focused on driving innovation in computing and software engineering. This conference brings together researchers, industry professionals, academicians, and thought leaders from around the world to share insights, explore cutting-edge technologies, and collaborate on solutions that address complex challenges in the digital era. ICIACSE aims to foster sustainable technological advancement and promote impactful research across diverse domains.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="  flex flex-col md:gap-7 gap-5">
          <h1 className="text-center w-fit mx-auto font-bold lg:text-3xl text-xl underline underline-offset-8 decoration-[#4AF8BA]">
            <span className="bg-gradient-to-r from-[#032530] to-[#0A3B47] bg-clip-text text-transparent">
              Conference Highlights
            </span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[80rem] mx-auto  gap-6">
            {attendees.map((item, index) => (
              <div key={index} className="bg-gradient-to-r from-[#032530]  to-[#0A3B47] hover:shadow-xl  flex justify-center items-center  shadow-md  md:p-10 p-3   rounded-lg transition-all duration-300"   >
                {/* <div className="text-xl font-semibold text-[#2487DB] mb-2">•</div> */}
                <p className="text-white   md:text-lg text-sm font-medium text-center">{item}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="">
          <div className="mx-auto text-justify  space-y-4 text-sm md:text-base leading-7">
            <h1 className="text-center w-fit mx-auto font-bold lg:text-3xl text-xl underline underline-offset-8 decoration-[#4AF8BA]">
              <span className="bg-gradient-to-r from-[#032530] to-[#0A3B47] bg-clip-text text-transparent">
                Vision
              </span>
            </h1>
            <p className='leading-7 md:text-lg text-sm'>
              The International Conference on Innovations in Advanced Computing and Software Engineering (ICIACSE) aspires to become a leading global forum that inspires innovation and drives transformative change in the realms of computing and software systems. Our vision is to:            </p>
            <div className="px-4">
              <ul className="list-disc flex flex-col gap-2 text-justify md:text-base text-sm">
                <li>
                  Advance the frontiers of computing and software engineering by promoting
                  high-quality research, innovation, and application-driven development.
                </li>
                <li>
                  Create a collaborative ecosystem where academia, industry, startups, and
                  policy-makers converge to exchange ideas, best practices, and
                  breakthroughs.
                </li>
                <li>
                  Empower the next generation of researchers and technologists by
                  providing a nurturing environment for knowledge sharing, mentorship,
                  and global exposure.
                </li>
                <li>
                  Address real-world challenges through interdisciplinary approaches that
                  integrate computing with domains such as artificial intelligence, data
                  science, cybersecurity, cloud computing, IoT, and emerging technologies.
                </li>
                <li>
                  Champion sustainable and inclusive digital growth, ensuring that
                  technological progress leads to equitable development and benefits
                  society at large.
                </li>
              </ul>
            </div>

          </div>
        </section>
        {/* <section className=" text-left">
          <div className="mx-auto text-justify  space-y-4 text-sm md:text-base leading-7">
            <h1 className="text-center w-fit mx-auto rounded-full font-bold lg:text-3xl text-xl  underline underline-offset-8 decoration-[#4AF8BA]   bg-gradient-to-r p-1 from-[#032530] to-[#0A3B47] bg-clip-text text-transparent">
              Objectives
            </h1>
            <div className='flex justify-center gap-5 items-center'>
              <img src="/assets/images/objectives.jpg" className='w-96   rounded-3xl' alt="" />

              <div>

                <p className="font-semibold">The primary objectives of ICIACSE are to:</p>
                <ul className='list-disc ml-5 md:text-lg text-sm leading-7'>
                  <li>Foster Innovative Research and Development</li>
                  <li>Bridge Academia and Industry</li>
                  <li>Encourage Interdisciplinary Solutions</li>
                  <li>Empower Young Researchers and Students</li>
                  <li>Promote Knowledge Exchange and Networking</li>
                  <li>Highlight Trends and Emerging Technologies</li>
                  <li>Support Sustainable and Ethical Tech Development</li>
                </ul>

              </div>
            </div>
          </div>
        </section> */}

      </section>
      <LastSection />

    </>
  )
}

export default About
