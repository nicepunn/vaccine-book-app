'use client'
import { useReducer, useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";
import getHospitals from "@/libs/getHospitals";

export default function CardPanal() {

    const ratingReducer = (keyPair: Map<string, number>, action:{type:string, hospitalName:string, rating:number}) => {
        switch(action.type) {
            case 'change': {
                keyPair.set(action.hospitalName, action.rating)
                return new Map(keyPair)
            }
            case 'remove': {
                keyPair.delete(action.hospitalName)
                return new Map(keyPair)
            }
            default: return keyPair
        }
    }
    const [keyPair, dispatchKeyPair] = useReducer(ratingReducer, new Map<string, number>)

    const [currentStar, setCurrentStar] = useState<Number>();

    // const mockHosRepo = [
    //     {hid:"001", hname:'Chulalongkorn Hospital', image:'/img/hospital/chula.jpg'},
    //     {hid:"002", hname:'Rajvithi Hospital', image:'/img/hospital/rajavithi.jpg'},
    //     {hid:"003", hname:'Thammasart University Hospital', image:'/img/hospital/thammasart.jpg'}
    // ]


    const [hosResponse, setHosResponse] = useState(null)

    useEffect(()=>{
        const fetchData = async () => {
            const hoss = await getHospitals()
            setHosResponse(hoss)
        }
        fetchData()
    }, [])

    if(!hosResponse) return (
        <p>loading ...</p>
    )

    return (
        <div>
            <div style={{margin:'20px', display:'flex', flexDirection:'row', flexWrap:'wrap',
            justifyContent:'space-around', alignContent:'space-around'}}>
                {
                    hosResponse.data.map((hosItem: Object)=>(
                        <Link href={`/hospital/${hosItem._id}`} className="w-1/5">
                            <ProductCard hospitalName={hosItem.name} imgSrc={hosItem.picture} currentStar={keyPair.get(hosItem.name)??0}
                            onRating={(hospital:string, newRating:number)=>{dispatchKeyPair({type:'change', hospitalName:hospital, rating:newRating})}}/>
                        </Link>
                    ))
                }
            </div>

            <div className="w-full text-xl font-medium">Key Pair: {keyPair.size}</div>
            { Array.from(keyPair).map((hospital)=>
                <div key={hospital[0]} onClick={()=>dispatchKeyPair({type:'remove', hospitalName:hospital[0], rating:0})}>
                    {hospital[0] + " Rating = " + hospital[1]}
                </div>
            )}
        </div>
    )
}