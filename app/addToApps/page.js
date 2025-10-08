import React from 'react'
import AppsForm from '../components/appsForm/page'

export default function AddToApps() {
    return (
        <div className="min-h-screen bg-[#efeeee] pt-32 pb-10 px-4 sm:px-6 lg:px-8">

            <div className="mb-8 flex flex-col items-center text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">App Listing Form</h1>
                <p className="text-gray-600 mt-3">Fill in the details to create a new app listing</p>
            </div>

            <AppsForm></AppsForm>
        </div>
    )
}
