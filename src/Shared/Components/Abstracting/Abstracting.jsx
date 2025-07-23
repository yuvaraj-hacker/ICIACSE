
import React, { useState } from 'react'
import Contct from '../Contct/Contct'
import { toast } from 'react-toastify';
import Other from '../Other/Other';

function Abstracting() {
    const [formData, setFormData] = useState({ paperTitle: "", name: "", email: "", number: "", institution: "", paper: null, Paper_Track: "" });
    const [uploadFile, setUploadFile] = useState(null);
    const [status, setStatus] = useState('');

    const handleRemoveFile = () => {
        setUploadFile(null);
        document.getElementById("upload-paper").value = ""; // Clear input
    };

    const handleChange = (e) => {
        if (e.target.type === 'file') {
            const file = e.target.files[0];
            const maxSize = 10 * 1024 * 1024; // 10 MB in bytes
            if (file && file.size > maxSize) {
                alert("File size exceeds 10 MB. Please upload a smaller file.");
                e.target.value = ""; // Clear the file input
                return;
            }
            setFormData({ ...formData, [e.target.name]: file });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('paperTitle', formData.paperTitle);
            formDataToSend.append('name', formData.name);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('number', formData.number);
            formDataToSend.append('institution', formData.institution);
            formDataToSend.append('Paper_Track', formData.Paper_Track);
            if (formData.paper) {
                formDataToSend.append('paper', formData.paper);
            }
            const response = await fetch('http://192.168.29.174/iciscm/send_mail.php', { method: 'POST', body: formDataToSend, });
            if (response.ok) {
                const result = await response.text();
                setStatus(result);
                setFormData({
                    paperTitle: '',
                    name: '',
                    email: '',
                    number: '',
                    institution: '',
                    paper: null,
                    Paper_Track: ''
                });
                document.getElementById('paper').value = '';
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
    return (
        <>
            {/* <Other Title="Paper Submission" /> */}
            <section className="max-w-screen-xl mx-auto w-full px-5 2xl:px-0  py-5 md:py-10 md:pt-22 pt-19 ">
                <div className="lg:flex md:flex  gap-8">
                    <div className="max-w-[90rem] mx-auto w-full">
                        <div className='md:mb-5 mb-3 flex justify-center items-center gap-3'>
                            <h1 className="text-center w-fit mx-auto font-bold lg:text-3xl text-xl underline underline-offset-8 decoration-[#4AF8BA] p-1">
                                <span className="bg-gradient-to-r from-[#032530] to-[#0A3B47] bg-clip-text text-transparent">
                                    New Paper Submission
                                </span>
                            </h1>
                        </div>
                        <div className='grid lg:grid-cols-2 md:gap-4 gap-4 items-center'>
                            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6  mx-auto  ">
                                <div className="bg-white md:p-5 p-3 ">
                                    <h3 className="text-lg md:text-xl font-semibold   mb-3">Submission Guidelines</h3>
                                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-2">
                                        <li>Original and unpublished research papers only</li>
                                        <li>Submit in PDF or DOCX format</li>
                                        <li>Maximum file size: 10 MB</li>
                                        <li>Paper should follow the IEEE format</li>
                                        <li>Include author details on the first page</li>
                                        <li>Ensure all author details are correctly filled</li>
                                        <li>Upload a PDF or Word document of the paper</li>
                                        <li>Only one submission per author will be accepted</li>
                                        <li>Follow the formatting guidelines provided</li>
                                    </ul>
                                </div>
                                <div className="bg-white md:p-5 p-3 ">
                                    <h3 className="text-lg md:text-xl font-semibold   mb-3">Important Notes</h3>
                                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-2">
                                        <li>Verify the accuracy of the contact details before submission.</li>
                                        <li>The first author will be contacted for further correspondence.</li>
                                        <li>Submissions must be made before the deadline date.</li>
                                        <li>Late submissions may not be considered for review.</li>
                                    </ul>
                                </div>
                            </div> */}
                            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 ">
                                {/* Submission Guidelines */}
                                <div className=" ">
                                    <h1 className=" w-fit mb-4   rounded-full font-bold lg:text-3xl text-lg  underline underline-offset-8 decoration-[#4AF8BA] mx-auto md:mx-0   p-1">
                                        <span className="bg-gradient-to-r from-[#032530] to-[#0A3B47] bg-clip-text text-transparent">
                                            Submission Guidelines
                                        </span>                                    </h1>
                                    <ul className="space-y-3 md:text-base text-sm text-gray-700 border-b-4 border-2 p-5 border-[#0A3B47]">
                                        <li className="flex items-start gap-2">
                                            <span className=" ">•</span> Original and unpublished research papers only
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className=" ">•</span> Submit in PDF or DOCX format
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className=" ">•</span> Maximum file size: 10 MB
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className=" ">•</span> Paper should follow the IEEE format
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className=" ">•</span> Include author details on the first page
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className=" ">•</span> Ensure all author details are correctly filled
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className=" ">•</span> Upload a PDF or Word document of the paper
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className=" ">•</span> Only one submission per author will be accepted
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className=" ">•</span> Follow the formatting guidelines provided
                                        </li>
                                    </ul>
                                </div>
                                {/* Important Notes */}
                                <div className="">
                                    <h1 className="  w-fit mb-4  rounded-full font-bold lg:text-3xl text-lg  underline underline-offset-8 decoration-[#4AF8BA]  mx-auto md:mx-0 ">
                                        <span className="bg-gradient-to-r from-[#032530] to-[#0A3B47] bg-clip-text text-transparent">
                                            Important Notes
                                        </span>
                                    </h1>
                                    <ul className="space-y-3 md:text-base text-sm text-gray-700  border-b-4 border-2 p-5 border-[#0A3B47]">
                                        <li className="flex items-start gap-2">
                                            <span className=" ">•</span> Verify the accuracy of the contact details before submission.
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className=" ">•</span> The first author will be contacted for further correspondence.
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className=" ">•</span> Submissions must be made before the deadline date.
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className=" ">•</span> Late submissions may not be considered for review.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <section className=''>
                                <div className="  w-full mx-auto col-span-2 ">
                                    <div className=" :bg-gray-900   ">
                                        <div className=" mx-auto max-w-screen-xl  bg-gradient-to-tr shadow-xl     from-[#032530] to-[#0A3B47]  md:p-6   p-3 ">
                                            <form className="w-full  text-white  grid lg:grid-cols-2 grid-cols-1 md:gap-5" ngNativeValidate onSubmit={handleSubmit}>
                                                <div className=' '>
                                                    <label for="paperTitle" className="block mb-2 text-sm text-white mt-4 ">
                                                        Paper Title
                                                    </label>
                                                    <input type="text" ngModel id="paperTitle" name="paperTitle" value={formData.paperTitle} onChange={handleChange} className="shadow-sm bg-white      text-black       border text-sm    border-gray-200  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   mt-4" placeholder="Enter the Paper Title" required />
                                                </div>
                                                <div>
                                                    <label for="name" className="block mb-2 text-sm text-white  mt-4">
                                                        Name
                                                    </label>
                                                    <input type="text" name="name" id="name" ngModel value={formData.name} onChange={handleChange} className="shadow-sm bg-white   border        border-gray-200  text-black text-sm   focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   mt-4        "
                                                        placeholder="Enter Your Name" required />
                                                </div>
                                                <div>
                                                    <label for="email" className="block mb-2 text-sm   text-white    mt-4  ">
                                                        Email
                                                    </label>
                                                    <input type="email" name="email" id="email" value={formData.email} ngModel onChange={handleChange} className="shadow-sm bg-white   border        border-gray-200  text-black text-sm   focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   mt-4 "
                                                        placeholder="name@gmail.com" required />
                                                </div>
                                                <div>
                                                    <label for="number" className="block mb-2 text-sm   text-white    mt-4 "  >
                                                        Contact Number
                                                    </label>
                                                    <input type="text" name="number" id="number" value={formData.number} ngModel onChange={handleChange} className="shadow-sm bg-white    border        border-gray-200  text-black text-sm   focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   mt-4  "
                                                        placeholder="Enter Your Mobile Number" required
                                                    />
                                                </div>
                                                <div>
                                                    <label for="institution" className="block mb-2 text-sm   text-white  mt-4 " >
                                                        Institution Name
                                                    </label>
                                                    <input type="text" name="institution" id="institution" value={formData.institution} ngModel onChange={handleChange} className="shadow-sm  bg-white        border-gray-200 border  text-black text-sm   focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 mt-4" placeholder="Enter Your Institute" required />
                                                </div>
                                                <div>
                                                    <label for="institution" className="block mb-2 text-sm text-white  mt-4 " >
                                                        Paper Track
                                                    </label>
                                                    <select name="Paper_Track" id="Paper_Track" value={formData.Paper_Track || ""}
                                                        onChange={handleChange}
                                                        required
                                                        className="shadow-sm bg-white border      border-gray-200 p-2.5 text-black text-sm focus:ring-primary-500 focus:border-primary-500 block w-full   mt-4"                                                >
                                                        <option value="">Select Track</option>
                                                        <option value="AdvancedAlgorithms">Advanced Algorithms and Data Structures</option>
                                                        <option value="AIandML">Artificial Intelligence and Machine Learning</option>
                                                        <option value="CloudEdgeComputing">Cloud and Edge Computing</option>
                                                        <option value="BigDataAnalytics">Big Data Analytics and Data Science</option>
                                                        <option value="SoftwareEngineering">Software Architecture and Engineering Practices</option>
                                                        <option value="Cybersecurity">Cybersecurity and Privacy</option>
                                                        <option value="IoTandEmbedded">Internet of Things (IoT) and Embedded Systems</option>
                                                        <option value="Blockchain">Blockchain and Decentralized Applications</option>
                                                        <option value="HCIandUX">Human-Computer Interaction and UX Design</option>
                                                        <option value="AgileDevOps">Agile Development and DevOps</option>
                                                        <option value="QuantumComputing">Quantum Computing and Simulation</option>
                                                        <option value="HighPerformance">High-Performance and Parallel Computing</option>
                                                        <option value="SoftwareTesting">Software Testing and Quality Assurance</option>
                                                        <option value="SmartApplications">Smart Applications and Intelligent Systems</option>
                                                    </select>
                                                </div>
                                                <div className="md:col-span-2 mt-5">
                                                    <label className="block mb-2 text-sm text-white ">Upload Paper</label>
                                                    <input type="file" id="paper" name="paper" onChange={handleChange} accept=".pdf,.doc,.docx" required className="w-full    p-2 text-black   border text-sm    border-gray-200 ring-1 ring-transparent bg-white focus:ring-[#0B4F8E] focus:outline-none" />
                                                    <p className=" text-xs mt-3">* Maximum File Size: 10 MB</p>
                                                </div>
                                                {uploadFile && (
                                                    <div className="mt-4 bg-white p-3 rounded shadow flex justify-between items-center">
                                                        <div className="text-sm text-gray-800 truncate w-full pr-4">{uploadFile.name}</div>
                                                        <button onClick={handleRemoveFile} className="text-red-500 hover:text-red-700 transition cursor-pointer" title="Remove file"   >
                                                            ✕
                                                        </button>
                                                    </div>
                                                )}
                                                <div className="text-center mx-auto mt-5  md:col-span-2">
                                                    <button type="submit" disabled={status === 'Sending...'}
                                                        className="py-3 px-5 text-sm  bg-white  text-center  transition-all duration-300  shadow-lg   relative  group overflow-hidden z-10   cursor-pointer font-semibold hover:text-primary-blue-color   text-[#032530]   bg-primary-red-color sm:w-fit hover:bg-primary-800  focus:outline-none  " >
                                                        {status === 'Sending...' ? 'Submitting...' : 'Submit Paper'}
                                                        <span style={{ clipPath: 'polygon(0 0, 86% 0, 100% 100%, 0% 100%)' }}
                                                            className="absolute inset-0 bg-gradient-to-tr from-[#32e6aa]   to-[#0ae8d4] transform -translate-x-[100%] group-hover:translate-x-0 w-[200px] transition-transform duration-500 ease-in-out -z-10
                                                             "
                                                        ></span>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
            <Contct />
        </>
    )
}

export default Abstracting

