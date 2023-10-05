import Image from 'next/image'
import styles from './page.module.css'
import ProductCard from '@/components/ProductCard'
import Banner from '@/components/Banner'
import CardPanal from '@/components/CardPanel'
import PromoteCard from '@/components/PromoteCard'

export default function Home() {
  return (
    <main>
      {/* <Image src="/img/bottle.jpg" alt='abc' fill={true}/> */}
      <Banner/>
      <PromoteCard/>
    </main>
  )
}


