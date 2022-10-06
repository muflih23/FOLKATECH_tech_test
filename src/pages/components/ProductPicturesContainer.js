import React from 'react'

function ProductPicturesContainer({src}) {
    return (
        <div className='flex w-full border border-solid border-[#D8D8D8] lg:w-[80px] xl:w-[181px]'>
            <div className='flex w-full items-center justify-center p-2'>
                <img src={src} alt='Foto Produk' />
            </div>
        </div>
    )
}

export default ProductPicturesContainer