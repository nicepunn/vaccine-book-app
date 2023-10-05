'use client'
import { useState } from 'react';
import styles from './banner.module.css';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { Rating } from '@mui/material';

export default function Banner() {

    const covers = ['/img/bg.jpg', '/img/bg2.jpg', '/img/bg3.jpg']
    const [index, setIndex] = useState(0);
    const router = useRouter();

    // const [value, setValue] = useState<number | null>()

    return (
        <div className={styles.banner} onClick={()=>{ setIndex(index+1) }}>
            <Image src={covers[index%3]}
            alt='cover'
            fill={true} 
            style={{objectFit:"cover"}}/>
            <div className={styles.bannerText}>
                <h1 className='text-4xl font-medium'>Announcement</h1>
                <p className='text-l'>
                We would like to announce 
                the vaccination service aimed at 
                promoting health and safety for everyone 
                in the community. This vaccination 
                initiative is a part of our collective 
                effort to combat disease outbreaks and 
                create a secure environment for all of us.
                </p>
            </div>
            <button className='bg-white text-cyan-600 border border-cyan-600
            font-semibold py-2 m-2 rounded z-30 absolute bottom-0 right-0
            hover:bg-cyan-600 hover:text-white hover:border-transparent'
            onClick={(e)=>{router.push('/hospital'); e.stopPropagation()}}>
                Select hospital
            </button>
            

            {/* <Rating className='absolute bottom-0 left-0 z-30'
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            /> */}
        </div>
    );
}