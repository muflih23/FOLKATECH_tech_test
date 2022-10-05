import React from 'react'
import { MdOutlinePerson } from "react-icons/md"
import { BsSearch } from "react-icons/bs"

function Layout({children}) {

  const dropdown = require('../../public/icons/profile_down.png');
  const chart = require('../../public/icons/chart.png');
  const fav = require('../../public/icons/likes.png');

  return (
    <div className='flex w-screen min-h-screen flex-col items-center'>
        <div className='flex w-full flex-row-reverse py-7 px-4 gap-x-4 text-navicon md:px-[53px]'>
            <button className='flex flex-row gap-x-[4px] items-center'>
                <MdOutlinePerson className='text-[32px]'/>
                <img src={dropdown} alt='profile'/>
            </button>
            <button className='hidden items-center md:flex'><img src={chart} alt='chart' className='w-[24px] h-[24px]'/></button>
            <button className='hidden items-center md:flex'><img src={fav} alt='favourite' className='w-[24px] h-[24px]'/></button>
            <div className='flex items-center'>
                <form className='flex w-inherit items-center'>
                    <input type='text' placeholder='Cari produk' className='font-gotham py-[10px] px-6 shadow-authform w-[180px] md:w-[436px] focus:outline-none rounded-l-[9px]'/>
                    <button className='h-[44px] bg-theme px-4 text-white shadow-authform rounded-r-[9px] md:px-8'><BsSearch className='w-[20px] h-[20px] text-textWhite'/></button>
                </form>
            </div>
        </div>
        <div className='flex w-full px-4 bg-[#f5f5f5] lg:px-8 xl:px-[70px]'>
            <div className='flex items-center justify-center bg-theme px-6 py-[10px] font-gotham text-[20px] text-textWhite md:px-11 md:py-[22px]'>
                BELANJA
            </div>
        </div>
        <div className='flex w-full flex-col px-4 lg:px-8 xl:px-[70px]'>
            {children}
        </div>
    </div>
  )
}

export default Layout