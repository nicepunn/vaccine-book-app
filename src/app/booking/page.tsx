import LocationDateReserve from "@/components/LocationDateReserve";

export default function Booking() {
    return (
        <main className="w-[100%] flex flex-col items-center space-y-4 text-center">
            <div className="text-xl font-medium">
                Booking
            </div>

            <div className="flex flex-col">
                <label className="py-2">
                    Your name-surname: <input className="border-solid border-2 border-black rounded" name="NameSurname" />
                </label>

                <label className="py-2">
                    Id: <input className="border-solid border-2 border-black rounded" name="NameSurname" />
                </label>
            </div>

            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">
                    Pick-Up Date and Location
                </div>
                <LocationDateReserve/>

                {/* <div className="text-md text-left text-gray-600">
                    Return Date and Location
                </div>
                <LocationDateReserve/> */}
            </div>

            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 py-2 text-white shadow-sm">
                Check
            </button>
            
        </main>
    )
}