'use client'
import { Rating } from '@mui/material';
import { useState } from 'react';


export default function MyRating({hospitalName, onRating}
    : {hospitalName:string, onRating:Function}) {

    const [hospitalRate, setHospitalRate] = useState<number | null>(0)
    
    return (
        <Rating className='mx-2 my-2 px-1 py-1 w-fit'
        name="simple-controlled" size='small'
        value={hospitalRate}
        onChange={(event, newValue) => {
            setHospitalRate(newValue);
            console.log("new value onChange = " + newValue);
            onRating(hospitalName, newValue);
        }}
        onClick={(e)=>{
            e.stopPropagation();
            console.log("hospital rate onClick = " + hospitalRate);
        }}
        />
    )

}