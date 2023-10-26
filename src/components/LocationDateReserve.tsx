"use client"

import { DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from "@mui/x-date-pickers"
import { Select, MenuItem } from '@mui/material'
import { useState } from 'react'
import dayjs, { Dayjs } from "dayjs"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import { addBooking } from "@/redux/features/bookSlice"
import { BookingItem } from "../../interfaces"
import { useSearchParams } from "next/navigation";

export default function LocationDateReserve({hospitals}: {hospitals: Object}) {

    const urlParams = useSearchParams()
	const hid = urlParams.get('id')
	const hName = urlParams.get('name')
	const [name, setName] = useState<string>('')
	const [surname, setSurname] = useState<string>('')
	const [id, setID] = useState<string>('')
    const [reserveDate, setReserveDate] = useState<Dayjs | null>(null)
    const [location, setLocation] = useState('BKK')

    const dispatch = useDispatch<AppDispatch>()
    
    const createBooking = () => {
		if( name && id && reserveDate && location ){
			const item: BookingItem = {
				name: name,
				surname: surname,
				id: id,
				date: dayjs(reserveDate).format('YYYY/MM/DD'),
				location: location
			}
			dispatch(addBooking(item))
		}
	}

    return (
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2
        w-full px-10 py-5 flex flex-row justify-center">
            
            <div className="text-md text-left text-gray-600">
				Name
			</div>
			<input type="text" className="bg-white w-[400px] h-[2em] rounded-md px-2 py-1 shadow-sm"
				placeholder="Name"
				value={name}
				onChange={(value)=>{setName(value.target.value);}}/>
			<div className="text-md text-left text-gray-600">
				Surname
			</div>
			<input type="text" className="bg-white w-[400px] h-[2em] rounded-md px-2 py-1 shadow-sm"
				placeholder="Surname"
				value={surname}
				onChange={(value)=>{setSurname(value.target.value);}}/>
			<div className="text-md text-left text-gray-600">
				ID number
			</div>
			<input type="text" className="bg-white w-[400px] h-[2em] rounded-md px-2 py-1 shadow-sm"
				placeholder="ID number"
				value={id}
				onChange={(value)=>{setID(value.target.value);}}/>
			<div className="text-md text-left text-gray-600">
				Date
			</div>
            
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white"
                value={reserveDate}
                onChange = {(value)=>{setReserveDate(value);}}/>
            </LocalizationProvider>

            <Select variant="standard" name="location" id="location"
            value={location} className="h-[2em] w-[200px]"
            onChange={(e)=>{setLocation(e.target.value);}}>
                {
					hospitals.data.map((hospital)=>(
						<MenuItem key={hospital.id} value={hospital.name}>
							{hospital.name}
						</MenuItem>
					))
				}
            </Select>

            <button className="block ring-inset ring-2 ring-orange-300 rounded-md bg-orange-500 hover:bg-orange-600 px-3 py-2 shadow-sm text-white"
			onClick={createBooking}>
				Book
			</button>

        </div>
    )
}