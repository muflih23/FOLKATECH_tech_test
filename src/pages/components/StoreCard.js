import React from 'react'
import { useNavigate } from 'react-router-dom';

function StoreCard() {

  const example = require('../../public/images/kopi1.png');
  const star = require('../../public/images/star.png');
  const loveButton = require('../../public/icons/likes.png');
  const chartButton = require('../../public/icons/chart.png');

  let navigate = useNavigate();

  const navigateToProductPage = (e) => {
    e.preventDefault();
    navigate("/product");
  }
    
  return (
    <div onClick={navigateToProductPage}  className='flex w-[328px] rounded-[4px] border border-solid border-[#ececec] shadow-storeCard hover:border-theme'>
        <div className='flex w-full p-4 flex-col items-center group'>
            <div className='w-full pb-[21px] relative'>
                <img src={example} alt='kopi 1' />
                <div className='flex absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] justify-center items-center text-center invisible group-hover:visible'>
                    <div className='flex w-[150px] bg-itemsHover justify-between items-center rounded-[43px] p-4'>
                        <button type='button'><img src={loveButton} alt='like'/></button>
                        <button type='button'><img src={chartButton} alt='tambahkan ke keranjang'/></button>
                    </div>
                </div>
            </div>
            <div className='flex w-full font-gotham700 text-center text-[18px] lg:text-[20px] text-navicon leading-[19px] pb-[10px] justify-center'>ABID CLEVER DRIPPER 102</div>
            <div className='flex w-full font-gotham500 text-center text-[16px] lg:text-[16px] text-navicon leading-[15px] pb-[10px] justify-center'>UBRUKOPI</div>
            <div className='flex w-full gap-x-[2px] justify-center h-[10px] items-center pb-[10.5px]'>
                <div className='flex w-[10px]'>
                    <img src={star} alt='rating'/>
                </div>
                <div className='flex w-[10px]'>
                    <img src={star} alt='rating'/>
                </div>
                <div className='flex w-[10px]'>
                    <img src={star} alt='rating'/>
                </div>
                <div className='flex w-[10px]'>
                    <img src={star} alt='rating'/>
                </div>
                <div className='flex w-[10px]'>
                    <img src={star} alt='rating'/>
                </div>
                <div className='flex font-gotham text-[10px] text-authformtext w-[10px]'>{`(7)`}</div>
            </div>
            <div className='flex w-full font-gotham500 text-center text-[18px] text-theme leading-[17.23px] justify-center'>Rp. 480.000</div>
        </div>
    </div>
  )
}

export default StoreCard