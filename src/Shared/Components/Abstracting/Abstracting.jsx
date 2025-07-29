
import React, { useState } from 'react'
import Contct from '../Contct/Contct'
import { toast } from 'react-toastify';
import Other from '../Other/Other';

function Abstracting() {

    const [status, setStatus] = useState('');



    const [formData, setFormData] = useState({
        Paper_Title: '',
        Author_FUll_Name: '',
        Email_Address: '',
        Institution_Name: '',
        Paper_Track: '',
        Paper_File: null,
    });
    const [fileName, setFileName] = useState('Choose Your File');
    const handleFileInputChange = (e) => {
        const { name, type, files, value } = e.target;


        if (files && files.length > 0) {
            setFileName(files[0].name); // update UI
            setFormData((prev) => ({
                ...prev,
                [name]: files[0], // update actual form data
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        const journalName = 'iciacse';
        // Generate unique ID: journalName + YYYYMMDD + HHMMSS
        const now = new Date();
        const dateStr = now.toISOString().slice(0, 10).replace(/-/g, ''); // YYYYMMDD
        const timeStr = now.toTimeString().slice(0, 8).replace(/:/g, ''); // HHMMSS
        const uniqueId = `${journalName}_${dateStr}_${timeStr}`;
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('Submission_ID', uniqueId);
            formDataToSend.append('Paper_Title', formData.Paper_Title);
            formDataToSend.append('Author_FUll_Name', formData.Author_FUll_Name);
            formDataToSend.append('Email_Address', formData.Email_Address);
            formDataToSend.append('Institution_Name', formData.Institution_Name);
            formDataToSend.append('Paper_Track', formData.Paper_Track);
            if (formData.Paper_File) {
                formDataToSend.append('Paper_File', formData.Paper_File);
            }
            const googleSheetsParams = new URLSearchParams();
            googleSheetsParams.append('Submission_ID', uniqueId);
            googleSheetsParams.append('journal_name', journalName);
            googleSheetsParams.append('Paper_Title', formData.Paper_Title);
            googleSheetsParams.append('Author_FUll_Name', formData.Author_FUll_Name);
            googleSheetsParams.append('Email_Address', formData.Email_Address);
            googleSheetsParams.append('Institution_Name', formData.Institution_Name);
            googleSheetsParams.append('Paper_Track', formData.Paper_Track);
            const mailPromise = fetch('https://iciacse.com/api/send_mail.php', {
                method: 'POST',
                body: formDataToSend,
            });
            const sheetsPromise = fetch('https://script.google.com/macros/s/AKfycbwZ_TtKUqAfcue9TNCKy57hTrCKDUP5dTQnWbpSxBDzlRMllEuOoaxzRDl0kQPah5pZ/exec', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: googleSheetsParams.toString(),
            });

            const [mailResponse, sheetsResponse] = await Promise.allSettled([mailPromise, sheetsPromise]);

            const mailSuccess = mailResponse.status === 'fulfilled' && mailResponse.value.ok;
            const sheetsSuccess = sheetsResponse.status === 'fulfilled';

            if (sheetsResponse.status === 'rejected') {
                console.error('Sheets request failed:', sheetsResponse.reason);
            }

            if (mailSuccess && sheetsSuccess) {
                setStatus(`Submission successful! Data sent to both email and Google Sheets (${journalName}). Submission ID: ${uniqueId}`);

                setFormData({
                    Paper_Title: '',
                    Author_FUll_Name: '',
                    Email_Address: '',
                    Institution_Name: '',
                    Paper_Track: '',
                    Paper_File: null,
                });
                const fileInput = document.getElementById('Paper_File');
                if (fileInput) {
                    fileInput.value = '';
                } else {
                    console.error('Element with ID "Paper_File" not found.');
                }
                toast.success(`Paper submitted successfully!`);

            } else if (mailSuccess && !sheetsSuccess) {
                setStatus('Email sent successfully, but there might be an issue with Google Sheets.');
                toast.warning('Email sent successfully. Please check if data was saved to Google Sheets.');

            } else if (!mailSuccess && sheetsSuccess) {
                setStatus('Data likely saved to Google Sheets, but failed to send email.');
                toast.warning('Data might be saved to Google Sheets, but failed to send email.');

            } else {
                setStatus('There might be issues with the submission. Please check manually.');
                toast.error('Submission completed, but please verify the results manually.');
            }

        } catch (error) {
            console.error('Error:', error);
            setStatus('An error occurred during submission. Please try again.');
            toast.error('An error occurred. Please try again.');
        }
    }
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
                                        <div className=" mx-auto max-w-screen-xl  bg-gradient-to-tr shadow-xl from-[#032530] to-[#0A3B47]  md:p-6   p-3 ">
                                            <form className="w-full  text-white  grid lg:grid-cols-1 grid-cols-1 md:gap-5" ngNativeValidate onSubmit={handleSubmit}>
                                                <div className=' '>
                                                    <label for="Paper_Title" className="block mb-2 text-sm text-white mt-4 ">
                                                        Paper Title
                                                    </label>
                                                    <input type="text" ngModel id="Paper_Title" name="Paper_Title" value={formData.Paper_Title} onChange={handleFileInputChange} className="shadow-sm bg-white      text-black       border text-sm    border-gray-200  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   mt-4" placeholder="Enter the Paper Title" required />
                                                </div>
                                                <div>
                                                    <label for="Author_FUll_Name" className="block mb-2 text-sm text-white  mt-4">
                                                        Name
                                                    </label>
                                                    <input type="text" name="Author_FUll_Name" id="Author_FUll_Name" ngModel value={formData.Author_FUll_Name} onChange={handleFileInputChange} className="shadow-sm bg-white   border        border-gray-200  text-black text-sm   focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   mt-4        "
                                                        placeholder="Enter Your Name" required />
                                                </div>
                                                <div>
                                                    <label for="Email_Address" className="block mb-2 text-sm   text-white    mt-4  ">
                                                        Email
                                                    </label>
                                                    <input type="Email_Address" name="Email_Address" id="Email_Address" value={formData.Email_Address} ngModel onChange={handleFileInputChange} className="shadow-sm bg-white   border        border-gray-200  text-black text-sm   focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   mt-4 "
                                                        placeholder="name@gmail.com" required />
                                                </div>
                                                {/* <div>
                                                    <label for="number" className="block mb-2 text-sm   text-white    mt-4 "  >
                                                        Contact Number
                                                    </label>
                                                    <input type="text" name="number" id="number" value={formData.number} ngModel onChange={handleFileInputChange} className="shadow-sm bg-white    border        border-gray-200  text-black text-sm   focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   mt-4  "
                                                        placeholder="Enter Your Mobile Number" required
                                                    />
                                                </div> */}
                                                <div>
                                                    <label for="Institution_Name" className="block mb-2 text-sm   text-white  mt-4 " >
                                                        Institution Name
                                                    </label>
                                                    <input type="text" name="Institution_Name" id="Institution_Name" value={formData.Institution_Name} ngModel onChange={handleFileInputChange} className="shadow-sm  bg-white        border-gray-200 border  text-black text-sm   focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 mt-4" placeholder="Enter Your Institute" required />
                                                </div>
                                                <div>
                                                    <label for="Paper_Track" className="block mb-2 text-sm text-white  mt-4 " >
                                                        Paper Track
                                                    </label>
                                                    <select name="Paper_Track" id="Paper_Track" value={formData.Paper_Track || ""}
                                                        onChange={handleFileInputChange}
                                                        required
                                                        className="shadow-sm bg-white border      border-gray-200 p-2.5 text-black text-sm focus:ring-primary-500 focus:border-primary-500 block w-full   mt-4"                                                >
                                                        <option  >Select Track</option>
                                                        <option  >Advanced Algorithms and Data Structures</option>
                                                        <option  >Artificial Intelligence and Machine Learning</option>
                                                        <option  >Cloud and Edge Computing</option>
                                                        <option  >Big Data Analytics and Data Science</option>
                                                        <option  >Software Architecture and Engineering Practices</option>
                                                        <option  >Cybersecurity and Privacy</option>
                                                        <option  >Internet of Things (IoT) and Embedded Systems</option>
                                                        <option  >Blockchain and Decentralized Applications</option>
                                                        <option  >Human-Computer Interaction and UX Design</option>
                                                        <option  >Agile Development and DevOps</option>
                                                        <option  >Quantum Computing and Simulation</option>
                                                        <option  >High-Performance and Parallel Computing</option>
                                                        <option  >Software Testing and Quality Assurance</option>
                                                        <option  >Smart Applications and Intelligent Systems</option>
                                                    </select>
                                                </div>
                                                <div className="md:col-span-1 mt-5">
                                                    <label className="block mb-2 text-sm text-white ">Upload Paper</label>
                                                    <input type="file" id="Paper_File" name="Paper_File" onChange={handleFileInputChange} accept=".pdf,.doc,.docx" required className="w-full    p-2 text-black   border text-sm    border-gray-200 ring-1 ring-transparent bg-white focus:ring-[#0B4F8E] focus:outline-none" />
                                                    <p className=" text-xs mt-3">* Maximum File Size: 10 MB</p>
                                                </div>
                                                {/* {uploadFile && (
                                                    <div className="mt-4 bg-white p-3 rounded shadow flex justify-between items-center">
                                                        <div className="text-sm text-gray-800 truncate w-full pr-4">{uploadFile.name}</div>
                                                        <button onClick={handleRemoveFile} className="text-red-500 hover:text-red-700 transition cursor-pointer" title="Remove file"   >
                                                            ✕
                                                        </button>
                                                    </div>
                                                )} */}
                                                <div className="text-center mx-auto mt-5  md:col-span-1">
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

