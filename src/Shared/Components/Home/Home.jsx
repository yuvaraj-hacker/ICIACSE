import { useState } from "react";
import { Link } from "react-router-dom";
import KeyDates from "./KeyDates";
import LastSection from "../Last/LastSection";
import Invitees from "./Invitees";
import Marquee from "react-fast-marquee";
import { toast } from "react-toastify";

export const Home = () => {
  const [formData, setFormData] = useState({ name: "", email: "", number: "", message: "" });
  const [status, setStatus] = useState('');
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('number', formData.number);
      formDataToSend.append('message', formData.message);
      const response = await fetch('http://192.168.29.174/my-react-app/message_mail.php', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        const result = await response.text();
        setStatus(result);
        setFormData({
          name: '',
          email: '',
          number: '',
          message: '',
        });
        toast.success("Paper submitted successfully!");
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

  const invitees = [
    {
      location: 'location',
      Name: 'Name',
      Position: 'Position',
    },
    {
      location: 'location',
      Name: 'Name',
      Position: 'Position',
    },
    {
      location: 'location',
      Name: 'Name',
      Position: 'Position',
    },
    {
      location: 'location',
      Name: 'Name',
      Position: 'Position',
    },
  ];

  const date = [
    { Dates: '22-07-2025', Title: 'Full Paper Submission Deadline' },
    { Dates: '29-07-2025', Title: 'Notification of Decision' },
    { Dates: '05-08-2025', Title: 'Deadline for Submitting Revised Full Paper' },
    { Dates: '12-08-2025', Title: 'Notification of Acceptance' },
    { Dates: '19-08-2025', Title: 'Camera-Ready Paper Submission' },
    { Dates: '26-08-2025', Title: 'Last Date for Registration' },
  ];

  return (
    <>
      <section className="  relative overflow-hidden">
        <section className="relative lg:h-[80vh] w-full "  >
          <div className=" h-full w-full bg-cover object-center z-0 flex items-center justify-center ">
            <div className=" z-10 lg:pt-0 pt-20  lg:pb-0 pb-10 flex  justify-center items-center lg:gap-7 gap-5 styless   bg-gradient-to-r from-[#032530] to-[#0A3B47] " >
              <div className=" grid grid-cols-1 lg:grid-cols-2 max-w-[90rem] mx-auto md:gap-10 gap-5 items-center 2xl:px-5 md:px-5 px-3 2xl:pr-0 md:pr-10">
                <div className="lg:ml-auto mx-auto flex flex-col gap-6 lg:px-0  ">
                  <h1 className="text-2xl 2xl:text-5xl lg:text-4xl font-bold leading-snug  md:text-left text-center text-white">
                    International <span className=" text-[#4AF8BA]">Conference</span>  on Innovations in Advanced Computing and Software Engineering </h1>
                  <div className=" md:mx-0 mx-auto">
                    <Link to="/paper-submission">
                      {/* <button className=" bg-[#4AF8BA] duration-300 md:text-base text-sm rounded-full  font-semibold  text-[#032530] px-6 md:py-3 py-2.5   cursor-pointer   ">
                        Register Now
                      </button> */}
                      <button className="relative overflow-hidden px-6 md:py-3 py-2.5 font-semibold text-[#032530] bg-white group cursor-pointer">
                        <span className="relative z-10 group-hover:text-[#032530] transition-colors duration-500">
                          Register Now
                        </span>
                        <span
                          style={{
                            clipPath: 'polygon(0 0, 86% 0, 100% 100%, 0% 100%)'
                          }}
                          className="absolute inset-0 bg-gradient-to-tr from-[#32e6aa] to-[#0ae8d4] transform -translate-x-[100%] group-hover:translate-x-0 w-[200px] transition-transform duration-500 ease-in-out z-0"
                        ></span>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex justify-center items-center lg:px-0 px-2 ">
                    <img src="/assets/images/mainimage.jpg" alt="Conference" rel="preload" className=" rounded-full z-30 lg:ml-auto mr-auto md:w-96 md:h-96 w-60 h-60 absolute object-cover p-5 lg:right-0 lg:left-auto    " />
                    <img src="/assets/images/outline.png" alt="Conference" rel="preload" className=" lg:block hidden z-30 lg:ml-auto lg:mr-0 w-96 h-96 animate-oscillate" />
                    <img src="/assets/images/second-one.png" alt="Conference" rel="preload" className=" lg:hidden block z-30 lg:ml-auto lg:mr-0 md:w-96 md:h-96 w-60 h-60 animate-oscillate" />
                    <img src="/assets/images/speaker.jpg" alt="Conference" rel="preload" className=" rounded-full z-30 lg:block hidden lg:ml-auto mr-auto w-24 h-24 absolute top-0  lg:right-auto object-cover  " />
                    <img src="/assets/images/speak.jpg" alt="Conference" rel="preload" className="rounded-full lg:block hidden z-30 lg:ml-auto mx-0 w-24 h-24 absolute bottom-24 object-cover  -right-5  " />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <img className="absolute -top-20 -left-20  z-50" src="/assets/images/point.png" alt="" /> */}

        {/* <div className=" px-10 pt-10 pb-3 bg-white w-fit rounded-full -bottom-10 left-40 z-50  absolute">
          <i class="fi fi-ss-down text-black text-2xl"></i>
        </div> */}
      </section >
      {/* <section className="h-[20vh]">

      </section> */}
      < section className=" " >
        <section className="max-w-[90rem]  mx-auto md:px-5 px-3  md:py-10 py-5 mb-1">
          <section className="grid md:grid-cols-1 grid-cols-1 md:gap-5 gap-3 items-start">
            <div className='flex flex-col md:gap-7 gap-3'>
              <div>
                <h1 className="text-center w-fit mx-auto font-bold lg:text-3xl text-xl underline underline-offset-8   decoration-[#4AF8BA]">
                  <span className="bg-gradient-to-r from-[#032530] to-[#0A3B47] bg-clip-text text-transparent">
                    About Us
                  </span>
                </h1>
                {/* <button className="relative overflow-hidden px-6 md:py-3 py-2.5 font-semibold text-[#032530] bg-white group mx-auto text-center flex justify-center">
                  <span className="relative z-10 group-hover:text-[#032530] transition-colors duration-500">
                    About Us
                  </span>
                  <span
                    style={{
                      clipPath: 'polygon(0 0, 86% 0, 100% 100%, 0% 100%)'
                    }}
                    className="absolute inset-0 bg-gradient-to-tr from-[#32e6aa] to-[#0ae8d4] transform -translate-x-[35%] group-hover:translate-x-0 w-[10vw] transition-transform duration-500 ease-in-out z-0"
                  ></span>
                </button> */}
                <div>
                </div>
              </div>
              <div className="grid lg:grid-cols-7 gap-5 md:items-center  items-center">
                <img src="/assets/images/abouts.jpg" className=" mx-auto   md:col-span-3" alt="" />
                <div className="mx-auto text-center leading-none text-[#4AF8BA] flex lg:flex-col flex-row items-center gap-4 lg:gap-0  md:bg-white bg-[#032530]  md:p-0 p-4">
                  <div className=" flex lg:flex-col flex-row">
                    <h1 className="h-fit w-fit m-0 p-0 font-bold xl:text-[70px] text-[50px]" style={{ lineHeight: "1" }}>2025</h1>
                    {/* <h1 className="h-fit w-fit m-0 p-0 font-bold md:text-[120px]  text-[50px]" style={{ lineHeight: "1" }}>25</h1> */}
                  </div>
                  <p className="m-0 p-0 md:text-2xl text-lg  font-bold">3<sup>rd</sup> September</p>
                </div>
                <div className="md:col-span-3">
                  <div className=" flex flex-col gap-3 ">
                    <p className="text-justify md:text-lg text-sm leading-7">
                      International Conference on Innovations in Advanced Computing and Software Engineering is a premier interdisciplinary platform for researchers, engineers, academicians, and industry professionals to present and discuss the latest innovations, trends, and concerns in the fields of advanced computing and software engineering. This conference aims to foster the exchange of cutting-edge ideas and collaborative research among participants from around the globe.
                      The event provides an ideal forum to explore breakthroughs in AI and machine learning, cloud and edge computing, cybersecurity, software architecture, IoT systems, and other emerging areas.
                    </p>
                    <div className="md:mx-0 mx-auto">
                      <Link to="/about">
                        <button className="font-semibold z-10  text-white md:text-base text-sm relative bg-[#032530]   group   overflow-hidden cursor-pointer  px-6 py-2 md:py-3 " >
                          Read More
                          <span style={{ clipPath: 'polygon(0 0, 86% 0, 100% 100%, 0% 100%)' }} className="absolute  -top-1 -bottom-1 right-0 left-0 bg-gradient-to-tr from-[#32e6aa]    to-[#0ae8d4] transform -translate-x-[100%] group-hover:-translate-x-1 w-[200px] transition-transform duration-500 ease-in-out -z-10"  ></span>
                        </button>
                      </Link>
                    </div>
                    {/* <div className=" md:mx-0 mx-auto">
                      <Link to="/paper-submission">
                        <button className="relative overflow-hidden px-6 md:py-3 py-2.5 font-semibold text-[#032530] bg-[#032530] group cursor-pointer w-fit">
                          <span className="relative z-10 group-hover:text-[#032530] transition-colors duration-500">
                            Read More
                          </span>
                          <span style={{ clipPath: 'polygon(0 0, 86% 0, 100% 100%, 0% 100%)' }}
                            className="absolute inset-0 bg-gradient-to-tr from-[#32e6aa] to-[#0ae8d4] transform -translate-x-[100%] group-hover:translate-x-0 w-[200px] transition-transform duration-500 ease-in-out z-0"
                          ></span>
                        </button>
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className=" bg-gradient-to-r from-[#032530] to-[#0A3B47]  w-full">
          <div className="mx-auto flex flex-col md:gap-10 gap-3 max-w-[90rem]  md:py-10 py-5    md:px-5 px-3 "   >
            <h1 className="text-center w-fit mx-auto rounded-full font-semibold lg:text-3xl text-xl   text-white underline underline-offset-8 decoration-[#4AF8BA] ">
              Our Mission
            </h1>
            <p className="text-white text-lg leading-relaxed text-justify">
              Our mission is to foster a global platform that promotes the exchange of innovative ideas, cutting-edge research, and emerging trends in the fields of advanced computing and software engineering. The International Conference on Innovations in Advanced Computing and Software Engineering aims to connect researchers, industry experts, educators, and students to collaborate on solving real-world challenges through technological advancements. We are committed to supporting interdisciplinary research, encouraging innovation-driven discussions, and contributing to the growth of a knowledge-driven society that thrives on digital transformation, software excellence, and computational intelligence.
            </p>
            <p className="text-white text-lg leading-relaxed text-justify ">
              Through this mission, we seek to inspire the next generation of innovators, support open knowledge-sharing, and build a collaborative ecosystem that transcends borders. By bringing together diverse voices and fostering inclusive participation, the conference encourages impactful dialogue that shapes the future of software engineering, smart systems, and intelligent technologies for the betterment of society and global development.
            </p>
            {/* <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 md:gap-10 gap-8 pb-1">
              {invitees.map((member, index) => (
                <Invitees key={index} Name={member.Name} Position={member.Position} location={member.location} dataAos="flip-left" />
              ))}
            </div> */}
          </div>
        </section>
        <section className="  max-w-[90rem]  mx-auto md:px-5 px-3  md:py-10 py-5 mb-1 ">
          <div className="  flex flex-col md:gap-7 gap-3">
            <h1 className="text-center w-fit mx-auto  font-semibold lg:text-3xl text-xl  bg-gradient-to-r from-[#032530] to-[#0A3B47] underline underline-offset-8 decoration-[#4AF8BA]  bg-clip-text text-transparent">
              Key Dates
            </h1>
            <div className=" ">
              <hr className='bg-[#4AF8BA] h-1 border-0 relative top-24 lg:block hidden ' />
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5  ">
                {date.map((item, index) => (
                  <>
                    <div key={index} className=" w-full h-full flex items-center z-10 justify-center relative md:p-10 p-5 hover:shadow-xl  transition duration-300 bg-linear-to-r from-[#032530] to-[#0A3B47] backdrop-blur-sm"  >
                      <KeyDates Dates={item.Dates} Title={item.Title} />
                      {/* <i class="fi fi-rr-angle-double-small-right absolute -right-5  text-[#4AF8BA] text-2xl "></i> */}
                    </div>
                  </>
                ))}
              </div>
              <hr className='bg-[#4AF8BA] h-1 border-0 relative bottom-20 lg:block hidden' />
            </div>
          </div>
        </section>
        <section className="md:p-0 p-3">
          <section className="w-full  bg-gradient-to-r from-[#032530] to-[#0A3B47] ">
            <div className="max-w-[40rem]  mx-auto lg:w-1/2 w-full text-white md:px-5 px-3 md:py-10 py-5">
              <div className=" flex flex-col md:gap-7 gap-3">
                <h1 className="text-center w-fit mx-auto font-bold lg:text-3xl text-xl text-white underline underline-offset-8 decoration-[#4AF8BA]  ">
                  Contact
                </h1>
                <div className=" w-full">
                  <form onSubmit={handleSubmit} className="w-full grid lg:grid-cols-1 gap-3 rounded-xl" ngNativeValidate>
                    <div className="">
                      <label for="email" className="block mb-2 text-sm mt-4 ">
                        Name
                      </label>
                      <input type="text" name="name" id="name"
                        value={formData.name}
                        onChange={handleChange}
                        ngModel className="shadow-sm   border text-sm   border-gray-300    bg-white text-black focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  mt-4" placeholder="Enter Your Name" required />
                    </div>
                    <div>
                      <label for="email" className="block mb-2 text-sm mt-4">
                        Email
                      </label>
                      <input type="email" name="email" id="email" onChange={handleChange} value={formData.email} ngModel className="shadow-sm     border bg-white text-black   border-gray-300    text-sm   focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   mt-4 "
                        placeholder="name@gmail.com" required />
                    </div>
                    <div>
                      <label for="email" className="block mb-2 text-sm      mt-4 "  >
                        Contact Number
                      </label>
                      <input type="text" name="number" id="number" onChange={handleChange} value={formData.number} ngModel className="shadow-sm   bg-white text-black  border   border-gray-300    text-sm   focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   mt-4  "
                        placeholder="Enter Your Mobile Number" required />
                    </div>
                    <div className="  mt-4">
                      <label for="message" className="block mb-2 text-sm ">
                        Your Message
                      </label>
                      <textarea id="message" name="message" value={formData.message} onChange={handleChange} ngModel
                        rows="4"
                        className="block p-2.5 w-full text-sm shadow-sm border bg-white text-black    border-gray-300   focus:ring-primary-500 focus:border-primary-500   mt-4 "
                        placeholder="Leave a Message..." ></textarea>
                    </div>
                    <div className="text-center md:mt-0 mt-5  ">
                      <button type="submit" className="py-3 px-6  transition-all duration-300 z-10  relative overflow-hidden font-semibold   text-center  md:text-base text-sm shadow-xl  bg-white group     text-[#032530]  cursor-pointer     " >
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
          </section>
        </section>
        <LastSection />
        {/* <section className="  max-w-[80rem]  mx-auto  ">
            <div className="  flex flex-col md:gap-7 gap-3">
              <h1 className="text-center w-fit mx-auto  font-semibold lg:text-3xl text-xl p-1 bg-gradient-to-r from-[#2487DB] to-[#014BBD] bg-clip-text text-transparent">
                Key Dates
              </h1>
              <div className="p-5 bg-gradient-to-tr shadow-lg from-[#f0f4ff] to-[#e2ecfc] " >
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5  ">
                  {date.map((item, index) => (
                    <div key={index} style={{
                      clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px))',
                    }} className="  w-full h-full flex items-center     p-5 hover:shadow-xl transition duration-300 bg-white/80 backdrop-blur-sm"  >
                      <KeyDates Dates={item.Dates} Title={item.Title} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="max-w-[100rem]  mx-auto   lg:w-1/2 w-full text-white">
            <div className=" flex flex-col md:gap-7 gap-3">
              <h1 className="text-center w-fit mx-auto font-semibold lg:text-3xl text-xl bg-gradient-to-r p-1 from-[#2487DB] to-[#014BBD] bg-clip-text text-transparent">
                Reach Us
              </h1>
              <div className=" w-full">
                <form onSubmit={handleSubmit} className="w-full grid lg:grid-cols-2 gap-5 bg-[#1B1F3B] p-5  " style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))', }} ngNativeValidate>
                  <div className="">
                    <label for="email" className="block mb-2 text-sm mt-4 ">
                      Name
                    </label>
                    <input type="text" name="name" id="name"
                      value={formData.name}
                      onChange={handleChange}
                      ngModel className="shadow-sm   border text-sm   border-gray-300  bg-white text-black focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  mt-4" placeholder="Enter Your Name" required />
                  </div>
                  <div>
                    <label for="email" className="block mb-2 text-sm mt-4">
                      Email
                    </label>
                    <input type="email" name="email" id="email" onChange={handleChange} value={formData.email} ngModel className="shadow-sm  border bg-white text-black   border-gray-300    text-sm   focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   mt-4 "
                      placeholder="name@gmail.com" required />
                  </div>
                  <div>
                    <label for="email" className="block mb-2 text-sm      mt-4 "  >
                      Contact Number
                    </label>
                    <input type="text" name="number" id="number" onChange={handleChange} value={formData.number} ngModel className="shadow-sm bg-white text-black  border   border-gray-300    text-sm   focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   mt-4  "
                      placeholder="Enter Your Mobile Number" required />
                  </div>
                  <div className="lg:col-span-2 mt-4">
                    <label for="message" className="block mb-2 text-sm ">
                      Your Message
                    </label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} ngModel
                      rows="4"
                      className="block p-2.5 w-full text-sm shadow-sm border bg-white text-black   border-gray-300   focus:ring-primary-500 focus:border-primary-500   mt-4 "
                      placeholder="Leave a Message..." ></textarea>
                  </div>
                  <div className="text-center md:mt-0 mt-5 lg:col-span-2">
                    <button type="submit" className="py-3 px-6    font-semibold   text-center  md:text-base text-sm shadow-xl   bg-white hover:bg-[#f0f4ff] duration-300  text-[#014BBD]  cursor-pointer     " >
                      {status === 'Sending...' ? 'Submitting...' : 'Send message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section> */}


      </section >
    </>
  );
};



