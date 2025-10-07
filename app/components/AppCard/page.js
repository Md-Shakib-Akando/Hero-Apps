import React from 'react'
import iconDownload from '../../../public/assets/icon-downloads.png'
import iconRating from '../../../public/assets/icon-ratings.png'
import cardImg from '../../../public/assets/TimerPlan.png'
import Image from 'next/image'
export default function AppCards() {
    return (
        <div className="bg-white shadow-md rounded-md p-4 overflow-hidden  border border-gray-100">
            {/* Image placeholder */}
            <div className=" h-[303px] ">
                <Image src={cardImg} alt="App Image" className="w-full h-full object-cover rounded-lg" />
            </div>

            {/* Content */}
            <div className="mt-2">
                <h3 className="text-[#0B172A] font-semibold text-lg mb-3">
                    Forest: Focus For Productivity
                </h3>

                {/* Bottom stats */}
                <div className="flex justify-between items-center">
                    {/* Downloads */}
                    <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-md">
                        <Image src={iconDownload} alt="Downloads" width={16} height={16} />
                        <span className="text-green-600 font-medium text-sm">9M</span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 bg-orange-50 px-2 py-1 rounded-md">
                        <Image src={iconRating} alt="Rating" width={16} height={16} />
                        <span className="text-orange-600 font-medium text-sm">5</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
