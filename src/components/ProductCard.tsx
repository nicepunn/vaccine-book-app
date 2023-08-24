import styles from './productcard.module.css'
import Image from 'next/image'

export default function ProductCard() {
    return (
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image src='/img/bottle.jpg'
                alt='Product Picture'
                fill={true}
                objectFit='cover'/>
            </div>
            <div className={styles.cardtext}>
            A vaccine is a biological substance that stimulates 
            the immune system of an individual to recognize and 
            fight against specific infectious agents, such as 
            viruses or bacteria. 
            </div>
        </div>
    )
}