import React from 'react';

function Invitees({ Name, Position, location }) {
    return (
        <section className="rounded-xl    ">
            {/* Corner Cut Shape */}
            <div className='grid  grid-cols-1  items-center gap-2'  >
                <img rel='preload' src="/assets/images/homes.jpg" className='md:w-56 md:h-56 w-40 h-40   rounded-full mx-auto  ' alt="" />
                <div className='md:w-1/2 w-1/4 mx-auto h-0.5 bg-[#4AF8BA]'>
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