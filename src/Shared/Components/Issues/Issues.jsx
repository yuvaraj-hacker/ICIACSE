import Edit from './Edit';
import LastSection from '../Last/LastSection';
import Other from '../Other/Other';

function Issues({ }) {
    const Tech = [
        { Name: 'Vijai Anand Ramar', position: 'Delta Dental Insurance Company', location: 'Georgia, USA' },
        { Name: 'Venkata Sivakumar Musam', position: 'Astute Solutions LLC', location: 'California, USA' },
        { Name: 'Karthikeyan Parthasarathy', position: 'LTIMindtree', location: 'Florida, USA' },
        { Name: 'Venkata Sivakumar Musam', position: 'Astute Solutions LLC', location: 'California, USA' },
        { Name: 'Kalyan Gattupall', position: 'Yash Tek inc', location: 'Ontario, Canada' },
    ];
    return (
        <>
            {/* <Other Title="Editorial Board" /> */}
            <section className="flex flex-col md:gap-5 gap-3 max-w-[80rem]  2xl:px-0 px-3 mx-auto  md:py-10 py-5  md:pt-22 pt-19 " >
                <h1 className="text-center w-fit mx-auto font-bold lg:text-3xl text-xl underline underline-offset-8 decoration-[#4AF8BA]">
                    <span className="bg-gradient-to-r from-[#032530] to-[#0A3B47] bg-clip-text text-transparent">
                        Board of Editors
                    </span>
                </h1>
                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
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
