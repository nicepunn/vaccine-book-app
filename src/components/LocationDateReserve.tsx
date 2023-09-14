"use client"

import { DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from "@mui/x-date-pickers"
import { Select, MenuItem } from '@mui/material'
import { useState } from 'react'

export default function LocationDateReserve() {

    const [reserveDate, setReserveDate] = useState(null)
    const [location, setLocation] = useState('BKK')
    
    return (
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2
        w-fit px-10 py-5 flex flex-row justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white"
                value={reserveDate}
                onChange={(value)=>{setReserveDate(value); alert(value)}}/>
            </LocalizationProvider>

            <Select variant="standard" name="location" id="location"
            value={location} className="h-[2em] w-[200px]"
            onChange={(e)=>setLocation(e.target.value)}>
                <MenuItem value="BKK">Bangkok</MenuItem>
                <MenuItem value="CNX">Chiang Mai</MenuItem>
                <MenuItem value="HKT">Phuket</MenuItem>
            </Select>
        </div>
    )
}