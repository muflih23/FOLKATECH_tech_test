import React from 'react'
import Layout from './components/Layout'
import { BsChevronDoubleRight } from 'react-icons/bs'
import StoreLeftComponent from './components/StoreLeftComponent'
import MainStoreComponent from './components/MainStoreComponent'

function Home() {
  return (
    <Layout>
      <div className='flex w-full flex-row justify-start items-center gap-x-[18px] pt-6 pb-7 text-navicon'>
        <div className='font-ghotam text-[14px]'>Home</div>
        <BsChevronDoubleRight className='w-[13px] h-[13px]' />
        <div className='font-ghotam text-[14px]'>Produk</div>
        <BsChevronDoubleRight className='w-[13px] h-[13px]' />
        <div className='font-ghotam text-[14px] text-theme'>Roasted Bean</div>
      </div>
      <div className='w-full flex flex-row justify-start gap-x-[18px]'>
        <StoreLeftComponent />
        <MainStoreComponent />
      </div>
    </Layout>
  )
}

export default Home