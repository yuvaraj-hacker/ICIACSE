import React from 'react';

function Invitees({ Name, Position, location }) {
    return (
        <section className="   ">
            {/* Corner Cut Shape */}
            <div className='    items-center gap-2 flex flex-col gap-4'  >
                <div className='md:p-5 p-3 bg-white style'>
                    <img rel='preload' src="/assets/images/homes.jpg" className='w-fit  mx-auto  ' alt="" />
                </div>
                <div className="flex flex-col items-center gap-3 z-10 mx-auto   justify-center  w-full h-full   text-white      ">
                    <div className="  font-semibold  text-sm md:text-2xl ">
                        {Name}
                    </div>
                    <div className=" md:text-lg text-sm font-medium">
                        {Position}
                    </div>
                    {/* <div className=" md:text-lg text-sm font-medium">
                        {location}
                         </div> */}
                </div>
            </div>
        </section>
    );
}

export default Invitees;