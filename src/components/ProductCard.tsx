
// import styles from './productcard.module.css'
import Image from 'next/image'
import InteractiveCard from './InteractiveCard'
import { Rating } from '@mui/material';
import { useState } from 'react';
import MyRating from './MyRating';

export default function ProductCard({hospitalName, imgSrc, onRating, currentStar}
    : {hospitalName:string, imgSrc:string, onRating?:Function, currentStar:number}) {

    function onHospSelected() {
        alert("You selected " + hospitalName)
    }

    const [hospitalRate, setHospitalRate] = useState<number | null>(currentStar)

    if (currentStar != hospitalRate) {
        setHospitalRate(currentStar)
    }

    return (
        <InteractiveCard contentName={hospitalName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc}
                alt='Product Picture'
                fill={true}
                className='object-contain rounded-t-lg'/>
            </div>
            <div className='w-full h-[15%] p-[10px] overflow-y-scroll'>
                {hospitalName}
            </div>
            
            {/* <button className='block h-[10%] text-sm rounded-md bg-sky-600
            hover:bg-indigo-600 mx-2 my-2 px-1 py-1 text-white shadow-sm'
            onClick={(e)=>{e.stopPropagation(); onCompare(hospitalName)}}>compare</button> */}
            
            {
                onRating? <Rating className='mx-2 my-2 px-1 py-1 w-fit'
                name="simple-controlled" size='small'
                value={hospitalRate}
                onChange={(event, newValue) => {
                    setHospitalRate(newValue);
                    console.log("new value onChange = " + newValue);
                    onRating(hospitalName, newValue);
                }}
    
                onClick={(e)=>{
                    e.stopPropagation()
                }}
    
                />: ''
            }

            {/* <MyRating hospitalName={hospitalName} onRating={onRating} /> */}
        </InteractiveCard>
    )
}