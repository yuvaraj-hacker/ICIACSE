import EditTeam from './EditTeam'
import LastSection from '../Last/LastSection';
import Other from '../Other/Other';

function EditorialBoard({ position, Name, location }) {
    const Tech = [
        { Name: 'Name', position: 'position', location: 'location' },
        { Name: 'Name', position: 'position', location: 'location' },
        { Name: 'Name', position: 'position', location: 'location' },
        { Name: 'Name', position: 'position', location: 'location' },
        { Name: 'Name', position: 'position', location: 'location' },
        { Name: 'Name', position: 'position', location: 'location' },
        { Name: 'Name', position: 'position', location: 'location' },
        { Name: 'Name', position: 'position', location: 'location' },

    ];
    return (
        <>
            {/* <Other Title="Organizing Committee" /> */}
            <section className="flex flex-col md:gap-5 gap-3 max-w-[80rem]  2xl:px-0 px-3 mx-auto  md:py-10 py-5 md:pt-22 pt-19 " >
                <div className='flex flex-col gap-3 '>
                    <h1 className="text-center w-fit mx-auto font-bold lg:text-3xl text-xl underline underline-offset-8 decoration-[#4AF8BA] p-1">
                        <span className="bg-gradient-to-r from-[#032530] to-[#0A3B47] bg-clip-text text-transparent">
                            Organizing Committee
                        </span>
                    </h1>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
                    {Tech.map((member, index) => (
                        <EditTeam key={index} position={member.position} Name={member.Name} location={member.location} dataAos="flip-left" />
                    ))}
                </div>
            </section>
            <LastSection />
        </>
    )
}

export default EditorialBoard
