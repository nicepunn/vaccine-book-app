import CardPanal from "@/components/CardPanel";
import getHospital from "@/libs/getHospitals";
import HospitalCatalog from "@/components/HospitalCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

export default function Hospital() {

    const hospitals = getHospital()


    return (
        <main className='text-center p-5'>
            <h1 className="text-xl">Select hospital</h1>
            <Suspense fallback={<p>Loading ... <LinearProgress/></p>}>
                <HospitalCatalog hospitalJson={hospitals}/>
            </Suspense>

            {/* <hr className="my-10"/>
            <CardPanal/> */}
        </main>
    )
}