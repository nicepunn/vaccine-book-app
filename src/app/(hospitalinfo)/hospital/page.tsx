import CardPanal from "@/components/CardPanel";
import getHospitals from "@/libs/getHospitals";
import HospitalCatalog from "@/components/HospitalCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import addHospitalForm from "@/components/addHospitalForm";
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";


export default async function Hospital() {

    const hospitals = getHospitals()
    const session = await getServerSession(authOptions);
	const profile = session ? await getUserProfile(session.user.token) : null;

    return (
        <main className='text-center p-5'>
            <h1 className="text-xl">Select hospital</h1>
            <Suspense fallback={<p>Loading ... <LinearProgress/></p>}>
                <HospitalCatalog hospitalJson={hospitals}/>
                    {
                        (profile?.data.role == "admin")?
                        <addHospitalForm/>
                        :null
                    }
            </Suspense>

            {/* <hr className="my-10"/>
            <CardPanal/> */}
        </main>
    )
}