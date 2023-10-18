'use client'
import ProductCard from "./ProductCard";
import Link from "next/link";

export default async function HospitalCatalog({hospitalJson}: {hospitalJson: Object}) {
    
    const hospitalJsonReady = await hospitalJson
    
    return (
        <>
        Explore {hospitalJsonReady.count} medels in our catalog

        <div style={{margin:'20px', display:'flex', flexDirection:'row', flexWrap:'wrap',
            justifyContent:'space-around', alignContent:'space-around'}}>
                {
                    hospitalJsonReady.data.map((hosItem: Object)=>(
                        <Link href={`/hospital/${hosItem._id}`} className="w-1/5">
                            <ProductCard hospitalName={hosItem.name} imgSrc={hosItem.picture}/>
                        </Link>
                    ))
                }
        </div>

        </>
    )


}