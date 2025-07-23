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

                    <p className="text-gray-700 text-lg leading-relaxed text-justify">
                        The Organizing Committee for the International Conference on Innovations in Advanced Computing and Software Engineering plays a vital role in the successful execution of the event. The committee is composed of dedicated academic and industry professionals who contribute their expertise to ensure a high-quality and impactful conference experience.
                        <br /><br />
                        <strong>Key roles within the committee include:</strong>
                        <br />
                        <span className="block mt-2">
                            <strong>• Conference Chair:</strong> Oversees the overall planning and execution of the conference, ensuring strategic direction and academic excellence.
                        </span>
                        <span className="block mt-1">
                            <strong>• Co-Chair:</strong> Assists the Chair in organizing tasks, coordinating among teams, and handling contingencies.
                        </span>
                        <span className="block mt-1">
                            <strong>• Technical Program Chair:</strong> Leads the review process, manages the technical sessions, and ensures the scientific quality of accepted papers.
                        </span>
                        <span className="block mt-1">
                            <strong>• Publication Chair:</strong> Manages the editing and finalization of accepted papers for publication in proceedings and journals.
                        </span>
                        <span className="block mt-1">
                            <strong>• Publicity Chair:</strong> Promotes the conference through multiple channels, ensuring strong participation and global visibility.
                        </span>
                        <span className="block mt-1">
                            <strong>• Logistics Coordinator:</strong> Oversees venue arrangements, registration management, scheduling, and on-site operations.
                        </span>

                        <br /><br />
                        Together, the committee ensures efficient planning, smooth operations, and a valuable academic experience for all attendees and contributors.
                    </p>
                </div>
                {/* <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
                    {Tech.map((member, index) => (
                        <EditTeam key={index} position={member.position} Name={member.Name} location={member.location} dataAos="flip-left" />
                    ))}
                </div> */}
            </section>
            <LastSection />
        </>
    )
}

export default EditorialBoard
