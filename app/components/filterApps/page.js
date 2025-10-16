"use client"
import React, { useState } from 'react'
import AppCards from '../AppCard/page';

export default function FilterApps() {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <>
            <div>
                <input type="text"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search apps..." className="w-full md:w-1/2 lg:w-1/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className='pb-10'>
                <AppCards searchTerm={searchTerm} />
            </div>
        </>
    )
}
