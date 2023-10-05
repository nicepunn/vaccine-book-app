'use client'
import { useReducer, useState } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

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

    const mockHosRepo = [
        {hid:"001", hname:'Chulalongkorn Hospital', image:'/img/hospital/chula.jpg'},
        {hid:"002", hname:'Rajvithi Hospital', image:'/img/hospital/rajavithi.jpg'},
        {hid:"003", hname:'Thammasart University Hospital', image:'/img/hospital/thammasart.jpg'}
    ]

    return (
        <div>
            <div style={{margin:'20px', display:'flex', flexDirection:'row', flexWrap:'wrap',
            justifyContent:'space-around', alignContent:'space-around'}}>
                {
                    mockHosRepo.map((hosItem)=>(
                        <Link href={`/hospital/${hosItem.hid}`} className="w-1/5">
                            <ProductCard hospitalName={hosItem.hname} imgSrc={hosItem.image} currentStar={keyPair.get(hosItem.hname)??0}
                            onRating={(hospital:string, newRating:number)=>{dispatchKeyPair({type:'change', hospitalName:hospital, rating:newRating})}}/>
                        </Link>
                    ))
                }

                {/* <ProductCard hospitalName='Chulalongkorn Hospital' imgSrc='/img/hospital/chula.jpg' currentStar={keyPair.get('Chulalongkorn Hospital')??0}
                onRating={(hospital:string, newRating:number)=>{dispatchKeyPair({type:'change', hospitalName:hospital, rating:newRating})}}/>
                <ProductCard hospitalName='Rajvithi Hospital' imgSrc='/img/hospital/rajavithi.jpg' currentStar={keyPair.get('Rajvithi Hospital')??0}
                onRating={(hospital:string, newRating:number)=>{dispatchKeyPair({type:'change', hospitalName:hospital, rating:newRating})}}/>
                <ProductCard hospitalName='Thammasart University Hospital' imgSrc='/img/hospital/thammasart.jpg' currentStar={keyPair.get('Thammasart University Hospital')??0}
                onRating={(hospital:string, newRating:number)=>{dispatchKeyPair({type:'change', hospitalName:hospital, rating:newRating})}}/> */}
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