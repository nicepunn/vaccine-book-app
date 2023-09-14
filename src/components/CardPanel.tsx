'use client'
import { useReducer, useState } from "react";
import ProductCard from "./ProductCard";

export default function CardPanal() {

    // const compareReducer = (compareList:Set<string>, action:{type:string, cardName:string})=> {
    //         switch(action.type) {
    //             case 'add': {
    //                 return new Set(compareList.add(action.cardName))
    //             }
    //             case 'remove': {
    //                 compareList.delete(action.cardName)
    //                 return new Set(compareList)
    //             }
    //             default: return compareList
    //         }
    // }
    // const [compareList, dispatchCompare] = useReducer(compareReducer, new Set<string>)


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

    return (
        <div>
            <div style={{margin:'20px', display:'flex', flexDirection:'row', flexWrap:'wrap',
            justifyContent:'space-around', alignContent:'space-around'}}>
                {/* <ProductCard hospitalName='Chulalongkorn Hospital' imgSrc='/img/hospital/chula.jpg'
                onCompare={(hospital:string)=>{dispatchCompare({type:'add', cardName:hospital})}}/>
                <ProductCard hospitalName='Rajvithi Hospital' imgSrc='/img/hospital/rajavithi.jpg'
                onCompare={(hospital:string)=>{dispatchCompare({type:'add', cardName:hospital})}}/>
                <ProductCard hospitalName='Thammasart University Hospital' imgSrc='/img/hospital/thammasart.jpg'
                onCompare={(hospital:string)=>{dispatchCompare({type:'add', cardName:hospital})}}/> */}

                <ProductCard hospitalName='Chulalongkorn Hospital' imgSrc='/img/hospital/chula.jpg' currentStar={keyPair.get('Chulalongkorn Hospital')??0}
                onRating={(hospital:string, newRating:number)=>{dispatchKeyPair({type:'change', hospitalName:hospital, rating:newRating})}}/>
                <ProductCard hospitalName='Rajvithi Hospital' imgSrc='/img/hospital/rajavithi.jpg' currentStar={keyPair.get('Rajvithi Hospital')??0}
                onRating={(hospital:string, newRating:number)=>{dispatchKeyPair({type:'change', hospitalName:hospital, rating:newRating})}}/>
                <ProductCard hospitalName='Thammasart University Hospital' imgSrc='/img/hospital/thammasart.jpg' currentStar={keyPair.get('Thammasart University Hospital')??0}
                onRating={(hospital:string, newRating:number)=>{dispatchKeyPair({type:'change', hospitalName:hospital, rating:newRating})}}/>
            </div>

            <div className="w-full text-xl font-medium">Key Pair: {keyPair.size}</div>
            { Array.from(keyPair).map((hospital)=>
                <div key={hospital[0]} onClick={()=>dispatchKeyPair({type:'remove', hospitalName:hospital[0], rating:0})}>
                    {hospital[0] + " Rating = " + hospital[1]}
                </div>
            )}
            
            {/* <div className="w-full text-xl font-medium">Compare List: {compareList.size}</div>
            { Array.from(compareList).map((hospital)=>
                <div key={hospital} onClick={()=>dispatchCompare({type:'remove', cardName:hospital})}>
                    {hospital}
                </div>
            )} */}
        </div>
    )
}