import React, { useState } from 'react';
import Card from './Card';
import {FiChevronLeft,FiChevronRight} from  'react-icons/fi';

const Testimonial = (props) => {
    let reviews= props.reviews;
    const[index,setIndex]=useState(0);
    function LeftShiftHandler(){
        if(index-1<0){
            setIndex(reviews.length -1);
        }
        else{
            setIndex(index-1);
        }
            
    }
    function RightShiftHandler(){
        if(index+1 >= reviews.length){setIndex(0);}
        else{
            setIndex(index+1);
        }
        
    }
    function SurpriseHandler(){
        let randonIndex =Math.floor(Math.random()*reviews.length);
        setIndex(randonIndex);
    }
    const[value,setvalue]=useState("bg-violet-400")
    
    return (
        
        <div className='w-[85vw] md:w-[700px] bg-white rounded-md flex flex-col items-center justify-center mt-10 p-10 transition-all duration-700 hover:shadow-xl'>
            
           {/* { reviews.map((review)=><Card reviews={props.reviews[index]}></Card>)} */}
           <Card reviews={props.reviews[index]}></Card>
            <div className='flex text-3xl gap-3 mt-10 text-violet-400 font-bold mx-auto'>
                <button className='cursor-pointer hover:text-violet-500'
                onClick={LeftShiftHandler}><FiChevronLeft/></button>
                <button className='cursor-pointer hover:text-violet-500' onClick={RightShiftHandler}><FiChevronRight/></button>
            </div>
            <div className='mt-6'>
                <button className='bg-violet-400 bg-y hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg' onClick={SurpriseHandler}  >Surprise</button>
            </div>
        </div>
    );
}

export default Testimonial;
