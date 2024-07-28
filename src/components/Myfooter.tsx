import React from 'react'
import Link from 'next/link'

const Myfooter = () => {
  return (
    <main className='bg-red-500 lg:h-[54px] h-[81px] flex justify-center items-center'>

        <div className=' flex lg:justify-between justify-center gap-[2px] flex-col lg:flex-row items-center w-full lg:mx-[150px] mx-[20px]'>
          
            <div className='leading-[20.8px]'><span className="text-white lg:text-sm text-[13px] font-medium">©2023 </span>
              <Link href={"/"}>
                <span className="text-white lg:text-sm text-[13px] font-medium underline">
                  Guess This Word
                </span>
              </Link>
              <span className="text-white lg:text-sm text-[13px] font-medium">. All Rights Reserved.</span>
            </div>
            
            
            <div className="justify-center items-center gap-2.5 inline-flex">
              <Link href={"/"}>
                <div className="text-white lg:text-sm text-[13px] font-medium leading-[26px]">New Game</div>
              </Link>
              <div className="w-1.5 h-1.5 bg-MutedYellow-4 rounded-full" />
              <Link href={"/"}>
                <div className="text-white lg:text-sm text-[13px] font-medium leading-[26px]">Privacy Policy</div>
              </Link>
              <div className="w-1.5 h-1.5 bg-MutedYellow-4 rounded-full" />
              <Link href={"/"}>
                <div className="text-white lg:text-sm text-[13px] font-medium leading-[26px]">About</div>
              </Link>
              <div className="w-1.5 h-1.5 bg-MutedYellow-4 rounded-full" />
              <Link href={"/"}>
                <div className="text-white lg:text-sm text-[13px] font-medium leading-[26px]">Feedback</div>
              </Link>

            </div>
        </div>

    </main>
  )
}

export default Myfooter