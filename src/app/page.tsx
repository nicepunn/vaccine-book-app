import Image from 'next/image'
import styles from './page.module.css'
import ProductCard from '@/components/ProductCard'
import Banner from '@/components/Banner'

export default function Home() {
  return (
    <main>
      {/* <Image src="/img/bottle.jpg" alt='abc' fill={true}/> */}
      <Banner/>
      <div style={{margin:'20px', display:'flex', flexDirection:'row', flexWrap:'wrap',
    justifyContent:'space-around', alignContent:'space-around'}}>
        <ProductCard/>
      </div>
    </main>
  )
}
