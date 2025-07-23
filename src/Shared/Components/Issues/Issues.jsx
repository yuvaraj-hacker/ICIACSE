import Edit from './Edit';
import LastSection from '../Last/LastSection';
import Other from '../Other/Other';

function Issues({ }) {
    const Tech = [
        { Name: 'Dr. K. Ramesh', position: ' V.R.S. College of Engineering and Technology', location: ' India' },
        { Name: 'Dr. Nandhini Daruvuri', position: 'IoTG Research and Development lab', location: ' USA' },
        { Name: 'Dr. R. Veerandrakumar', position: ' Panimalar Engineering College', location: 'India' },
        { Name: 'Dr. Muhammad Asif Khan', position: 'Qatar University', location: 'Qatar' },
        { Name: 'Dr. Haruna Abdu', position: ' Federal University Lokoja', location: ' Nigeria' },
        { Name: 'Dr. Siddharth Dabhade', position: ' National Forensic Sciences University', location: ' India' },
        { Name: 'Dr. Comfort O. Folorunso', position: 'University of Lagos', location: ' Nigeria' },
        { Name: 'Dr. Rustam Asnawi', position: 'Universitas Negeri Yogyakarta', location: 'Indonesia' },
        { Name: 'Dr. Asef Shahriar', position: 'Khulna University of Engineering & Technology', location: 'Bangladesh' },
        { Name: 'Dr. C.T. Ikwuazom', position: ' Federal University of Technology Minna', location: 'Nigeria' },
        { Name: 'Dr. Ankit Sharma', position: ' Nirma University', location: 'India' },
        { Name: 'Dr. Oladayo Atanda', position: ' Bowen University', location: 'Nigeria' },
        { Name: 'Dr. Meenakshi Gupta', position: ' National University of Singapore', location: 'Singapore' },
        { Name: 'Dr. Noureddine SEDDARI', position: 'Skikda University', location: 'Algeria' },
        { Name: 'Dr. Khushbu Doulani', position: ' IIIT Lucknow', location: 'India' },
        { Name: 'Dr. Putri Mentari Endraswari', position: 'University of Bangka Belitung', location: 'Indonesia' },
        { Name: 'Dr. Theresa Omodunbi', position: 'Obafemi Awolowo University', location: 'Nigeria' },
        { Name: 'Dr. Chandan Jyoti Kumar', position: 'Cotton University', location: 'India' },
        { Name: 'Dr. Fengliang Zhao', position: ' Shandong University', location: 'China' },
        { Name: 'Dr. Chhavi Dhiman', position: 'Delhi Technological University', location: 'India' },
        { Name: 'Dr. Yijun Wang', position: ' Shandong University', location: 'China' },
        { Name: 'Dr. Satyabrata Roy', position: 'Manipal University Jaipur', location: 'India' },
        { Name: 'Dr. V. Pravenea', position: ' Dr.N.G.P Institute of Technology', location: ' India' },
        { Name: 'Dr. Chen Li', position: 'Hangzhou TCM Hospital', location: 'China' },

    ];
    return (
        <>
            {/* <Other Title="Editorial Board" /> */}
            <section className="flex flex-col md:gap-5 gap-3 max-w-[80rem]  2xl:px-0 px-3 mx-auto  md:py-10 py-5  md:pt-22 pt-19 " >
                <h1 className="text-center w-fit mx-auto font-bold lg:text-3xl text-xl underline underline-offset-8 decoration-[#4AF8BA] p-1">
                    <span className="bg-gradient-to-r from-[#032530] to-[#0A3B47] bg-clip-text text-transparent">
                        Board of Editors
                    </span>
                </h1>
                <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
                    {Tech.map((member, index) => (
 
                            <Edit key={index} position={member.position} Name={member.Name} location={member.location} />
                    
                        ))}
                </div>
            </section>
            <LastSection />
        </>
    )
}

export default Issues;
