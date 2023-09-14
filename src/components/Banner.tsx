'use client'
import { useState } from 'react';
import styles from './banner.module.css';
import Image from "next/image";

export default function Banner() {

    const covers = ['/img/bg.jpg', '/img/bg2.jpg', '/img/bg3.jpg']
    const [index, setIndex] = useState(0);

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
        </div>
    );
}