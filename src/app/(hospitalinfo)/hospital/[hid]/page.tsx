import Image from "next/image"

export default function HospitalDetailPage({params}: {params: {hid: string}}) {
    
    const mockHosRepo = new Map()
    mockHosRepo.set("001", {hname:'Chulalongkorn Hospital', image:'/img/hospital/chula.jpg'})
    mockHosRepo.set("002", {hname:'Rajvithi Hospital', image:'/img/hospital/rajavithi.jpg'})
    mockHosRepo.set("003", {hname:'Thammasart University Hospital', image:'/img/hospital/thammasart.jpg'})
    
    return (
        <main>
            <h1 className="text-lg font-medium">Hospital ID {params.hid}</h1>
            <div className="flex flex-row my-5">
                <Image src={(mockHosRepo.get(params.hid)).image}
                alt="Hospital Image" width={0} height={0} sizes="100vw"
                className="rounded-lg w-[30%]"/>
                <div className="text-md mx-5">
                    {(mockHosRepo.get(params.hid)).hname}
                </div>
            </div>
        </main>
    )
}

export async function generateStaticParams() {
    return [{hid:'001'}, {hid:'002'}, {hid:'003'}, {hid:'004'}]
}