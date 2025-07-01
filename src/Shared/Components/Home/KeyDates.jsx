// import React from 'react'

// function KeyDates({ Dates, Title }) {
//     return (
//         <>
//             <section className='md:p-4 p-3 bg-[#1B1F3B] flex gap-4 items-center rounded-xl'>
//                 <div className='p-2 rounded-xl bg-white w-fit whitespace-nowrap'>
//                     {Dates}
//                 </div>
//                 <div className='text-white md:text-base text-sm'>
//                     {Title}
//                 </div>
//             </section>
//         </>
//     )
// }

// export default KeyDates

import React from 'react';

function KeyDates({ Dates, Title }) {
    return (
        <section className=" " >
            <div className=" z-10   flex flex-col gap-4  h-full ">
                <p className=" text-[#0A3B47] bg-[#4AF8BA] font-semibold p-2 px-6   w-fit mx-auto  text-center ">{Dates}</p>
                <p className="md:text-lg  text-white text-center"> {Title}</p>
            </div>
            {/* <div className="absolute top-0 right-0 w-20 h-20 bg-[#269C52] rounded-bl-full transform translate-x-6 -translate-y-6 -hover:scale-110 transition-transform duration-500"></div> */}
        </section>
    );
}

export default KeyDates;

