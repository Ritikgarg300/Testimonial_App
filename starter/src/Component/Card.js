import React from 'react';
import { FaQuoteRight,FaQuoteLeft } from 'react-icons/fa';

const Card = (props) => {
    let reviews=props.reviews;
    return (
        <div className='flex flex-col md:relative'>
            <div className='absolute top-[-7rem] z-[10] mx-auto'>
                <img src={reviews.image} className='aspect-sqaure rounded-full w-[140px] h-[140px] z-[25]' />
              <div className=' absolute rounded-full bg-violet-700 w-[140px] h-[140px] z-[-10] top-[-6px] left-[10px]'></div>
            </div>
            <div className='text-center mt-7'>
                <p className='font-bold text-2xl capitalize tracking-wider'>{reviews.name}</p>
                <p className='text-violet-300 uppercase text-sm'>{reviews.job}</p>
            </div>
            
            <div className='text-violet-400 mx-auto mt-5'>
            <FaQuoteLeft/>
            </div>
            <div className='text-center mt-4 text-slate-500'>{reviews.text}</div>
            <div className='text-violet-400 mx-auto mt-5'><FaQuoteRight/></div>
           

        </div>
    );
}

export default Card;
