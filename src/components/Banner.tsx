import styles from './banner.module.css';
import Image from "next/image";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <Image src='/img/bg.jpg' 
            alt='cover' 
            fill={true} 
            objectFit='cover'/>
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