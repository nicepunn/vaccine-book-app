import Image from "next/image"
import getHospital from "@/libs/getHospital"
import { Link } from '@mui/material';

export default async function HospitalDetailPage({params}: {params: {hid: string}}) {
    
        
    const hospitalDetail = await getHospital(params.hid)
    
    return (
        <main className="text-center p-5">
            <h1 className="text-lg font-medium">{hospitalDetail.data.name}</h1>
            <div className="flex flex-row my-5">
                <Image src={hospitalDetail.data.picture}
                alt="Hospital Image" width={0} height={0} sizes="100vw"
                className="rounded-lg w-[30%]"/>
                <div className="text-md mx-5">{hospitalDetail.data.name}
                    <div className="text-md mx-5">{hospitalDetail.data.address}</div>
                    <div className="text-md mx-5">{hospitalDetail.data.district}</div>
                    <div className="text-md mx-5">{hospitalDetail.data.province}</div>
                    <div className="text-md mx-5">{hospitalDetail.data.postalcode}</div>
                    <div className="text-md mx-5">{hospitalDetail.data.tel}</div>

                    <Link href={`/booking?id=${params.hid}&name=${hospitalDetail.data.name}`}>
						<button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm">
							Booking
						</button>
					</Link>
                </div>
            </div>
        </main>
    )
}

export async function generateStaticParams() {
    return [{hid:'001'}, {hid:'002'}, {hid:'003'}, {hid:'004'}]
}