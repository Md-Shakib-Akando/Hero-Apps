import React from 'react'
import logo from '../../../public/assets/logo.png'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Image from 'next/image'
export default function Footer() {
    return (
        <footer className='bg-[#001931]'>
            <div className='max-w-11/12 mx-auto py-10 '>
                <div className="  flex justify-between items-center">
                    <div className='flex justify-center items-center gap-2'>
                        <Image src={logo} alt="Logo" width={40} height={40} />
                        <h1 className="text-white font-bold text-xl">Hero.io</h1>
                    </div>
                    <div>
                        <h3 className='text-white text-lg'>Social Links</h3>
                        <div className='flex items-center gap-4 mt-2'>
                            <a href="#" className="text-white"><FaFacebook size={20} /></a>
                            <a href="#" className="text-white"><FaTwitter size={20} /></a>
                            <a href="#" className="text-white"><FaLinkedin size={20} /></a>
                        </div>
                    </div>
                </div>
                <div className='border-t border-gray-800 mt-5'></div>
                <div>
                    <p className='text-center text-white mt-5 md:text-lg'>Copyright &#169; 2025 - All right reserved.</p>
                </div>
            </div>
        </footer>
    )
}
