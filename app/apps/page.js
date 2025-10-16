import React from 'react'
import FilterApps from '../components/filterApps/page'



export default function Apps() {
    return (
        <section className='max-w-11/12 mx-auto pt-26 '>
            <div className='text-center mb-10 space-y-5'>
                <h2 className='text-5xl font-semibold text-gray-800'>Apps</h2>
                <p className='text-gray-600 mt-2'>Explore our collection of apps designed to enhance your experience.</p>
            </div>
            <FilterApps></FilterApps>
        </section>
    )
}
