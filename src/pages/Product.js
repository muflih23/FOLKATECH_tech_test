import React from 'react'
import Layout from './components/Layout';
import { BsChevronDoubleRight, BsCheck2Square } from 'react-icons/bs';
import Counter from './components/Counter';

function Product() {

  const mainProduct = require('../public/images/presser_main.png');
  const star = require('../public/images/star.png');

  return (
    <Layout>
      <div className='flex w-full flex-row justify-start items-center gap-x-[18px] pt-6 pb-7 text-navicon'>
        <div className='font-ghotam text-[14px]'>Home</div>
        <BsChevronDoubleRight className='w-[13px] h-[13px]' />
        <div className='font-ghotam text-[14px] text-theme'>HARIO CAFE PRESS SLIM GREY</div>
      </div>
      <div className='flex w-full flex-col justify-center items-center py-[60px] max-w-[1212px] lg:px-20'>
        <div className='flex w-full flex-row items-start justify-center gap-x-[60px]'>
          <div className='flex w-[560px] border border-solid border-[#D8D8D8]'>
            <div className='flex w-full items-center justify-center p-2'>
              <img src={mainProduct} alt='Alat pembuat kopi'/>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex font-gotham700 text-[24px] text-navicon tracking-[5px] pb-5'>HARIO CAFE PRESS SLIM GREY 240ML</div>
            <div className='flex font-gotham text-[22px] text-navicon pb-2'>UbruKopi</div>
            <div className='flex w-full gap-x-[2px] justify-start h-[10px] items-center pb-5'>
                <div className='flex w-[18px]'>
                    <img src={star} className='flex w-full' alt='rating'/>
                </div>
                <div className='flex w-[18px]'>
                    <img src={star} className='flex w-full' alt='rating'/>
                </div>
                <div className='flex w-[18px]'>
                    <img src={star} className='flex w-full' alt='rating'/>
                </div>
                <div className='flex w-[18px]'>
                    <img src={star} className='flex w-full' alt='rating'/>
                </div>
                <div className='flex w-[18px]'>
                    <img src={star} className='flex w-full' alt='rating'/>
                </div>
                <div className='flex font-gotham text-[18px] text-authformtext w-[18px]'>{`(7)`}</div>
            </div>
            <div className='flex w-full justify-between pb-5'>
              <div className='flex w-full font-gotham600 text-left text-[22px] text-theme leading-[21.5px]'>Rp. 480.000</div>
              <div className='flex w-full font-gotham text-[12px] text-[#6F8EFF] leading-[11.48px] items-center justify-end'>
                <div>
                  <BsCheck2Square />
                </div>
                <div>Tersedia</div>
              </div>
            </div>
            <div className='flex w-full justify-start items-center gap-x-4'>
              <Counter />
              <div>Tambah ke keranjang</div>
              <div>Like</div>
            </div>
            <div>Deskripsi Produk</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Product