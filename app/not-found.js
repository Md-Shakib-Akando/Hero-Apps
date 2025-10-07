import React from 'react'
import notFoundImg from '../public/assets/error-404.png'
import Image from 'next/image'
import Link from 'next/link'
export default function NotFound() {
    return (
        <div>
            <div className='min-h-[calc(100vh-170px)] pt-30'>
                <div className='flex justify-center'>
                    <Image src={notFoundImg} alt="404 Not Found" />

                </div>
                <div className='mt-8'>
                    <h1 className='text-2xl md:text-6xl font-bold text-center'>Oops, page not found!</h1>
                    <p className='text-center mt-4 text-lg'>The page you are looking for is not available.</p>

                </div>
                <div className='flex justify-center my-6'>
                    <Link
                        href="/"

                        className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-[#8c4ee3] transition"
                    >
                        Go Back
                    </Link>
                </div>

            </div>
        </div>
    )
}

