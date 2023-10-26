import LocationDateReserve from "@/components/LocationDateReserve";
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import getHospitals from "@/libs/getHospitals";

export default async function Booking() {

    const session = await getServerSession(authOptions);
	if(!session || !session.user.token)	return null
	const profile = await getUserProfile(session.user.token)
	var createdAt = new Date(profile.data.createdAt)

    const hospitals = await getHospitals();

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4 text-center">
            <div className="text-xl font-medium">
                Booking
            </div>

            {/* <div className="flex flex-col">
                <label className="py-2">
                    Your name-surname: <input className="border-solid border-2 border-black rounded" name="NameSurname" />
                </label>

                <label className="py-2">
                    Id: <input className="border-solid border-2 border-black rounded" name="NameSurname" />
                </label>
            </div> */}

{
				session?
				<div className='z-30 font-semibold text-xl text-center'>
					User Profile
					<div className="text-left text-lg">
						<div>Name: {profile.data.name}</div>
						<div>Email: {profile.data.email}</div>
						<div>Tel.: {profile.data.tel}</div>
						<div>Member Since {createdAt.toString()}</div>
					</div>

				</div>
				:null
			}

            <div className="w-full space-y-2 flex flex-col">
                <div className="z-30 text-md text-left text-gray-600">
                    Pick-Up Date and Location
                </div>
                <LocationDateReserve hospitals={hospitals}/>

                {/* <div className="text-md text-left text-gray-600">
                    Return Date and Location
                </div>
                <LocationDateReserve/> */}
            </div>

            {/* <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 py-2 text-white shadow-sm">
                Book
            </button> */}
            
        </main>
    )
}