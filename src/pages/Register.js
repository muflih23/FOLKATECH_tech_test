import React, { useState } from 'react'
import Card from './components/Card'
import AuthHeader from './components/AuthHeader'
import { useNavigate } from 'react-router-dom'

function Register() {

  const [isReplaced, setIsReplaced] = useState(false);

  const getValue = (e) => {
    e.preventDefault();
    setIsReplaced(!isReplaced);
  }

  const previous = (e) => {
    e.preventDefault();
    setIsReplaced(!isReplaced);
  }

  let navigate = useNavigate();

  const navigateToLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  }

  return (
    <div className='flex w-screen min-h-screen flex-col justify-center items-center'>
    <div className='flex w-full h-full justify-center py-4 px-4'>
      <Card>
        <div className={`w-full flex-col ${isReplaced ? 'hidden' : 'flex'}`}>
          <AuthHeader text={'Daftar Sekarang'}/>
          <form className='flex w-full pt-9 flex-col'>
            <div className='flex flex-col w-full pb-[25px]'>
              <input 
              type='text'
              placeholder='Nama Depan' 
              className='bg-white rounded-[7px] shadow-authform py-5 px-[18px] focus:outline-none font-gotham text-authformtext text-4'/>
            </div>
            <div className='flex flex-col w-full pb-[25px]'>
              <input 
              type='text'
              placeholder='Nama Belakang' 
              className='bg-white rounded-[7px] shadow-authform py-5 px-[18px] focus:outline-none font-gotham text-authformtext text-4'/>
            </div>
            <div className='relative flex flex-col w-full pb-5'>
              <input 
              type='text'
              placeholder='Email' 
              className='bg-white rounded-[7px] shadow-authform py-5 px-[18px] focus:outline-none font-gotham text-authformtext text-4'/>
            </div>
            <div className='flex w-full pb-10'>
              <button onClick={getValue} className='w-full bg-theme text-textWhite font-gotham text-[18px] py-[21px] rounded-[7px] shadow-authbutton'>SELANJUTNYA</button>
            </div>
            <hr className='mb-10 mx-12 border-inset border-[0.5px] border-authline'/>
            <div className='flex flex-col w-full gap-x-1 justify-center items-center md:flex-row'>
              <div className='text-authBottomText text-4 font-gotham'>
                Sudah punya akun?
              </div>
              <button onClick={navigateToLogin} className='text-dark text-4 font-gotham font-bold'>
                Masuk
              </button>
            </div>
          </form>
        </div>
        <div className={`w-full flex flex-col ${isReplaced ? 'flex' : 'hidden'}`}>
          <button onClick={previous} className='flex text-dark font-gotham500 text-[22px]'>
            &#x2190; Kembali
          </button>
          <form className='flex w-full pt-9 flex-col'>
            <div className='flex flex-col w-full pb-[25px]'>
              <input 
              type='number'
              placeholder='Nomor Telepon' 
              className='bg-white rounded-[7px] shadow-authform py-5 px-[18px] focus:outline-none font-gotham text-authformtext'/>
            </div>
            <div className='relative flex flex-col w-full pb-5'>
              <input 
              type='password'
              placeholder='Password' 
              className='bg-white rounded-[7px] shadow-authform py-5 px-[18px] focus:outline-none font-gotham text-authformtext'/>
              <div className='text-dark font-gotham text-[14px] absolute right-0 bottom-[50%] flex items-center px-4 md:text-[16px]'>
                Show
              </div>
            </div>
            <div className='relative flex flex-col w-full pb-5'>
              <input 
              type='password'
              placeholder='Konfirmasi Password' 
              className='bg-white rounded-[7px] shadow-authform py-5 px-[18px] focus:outline-none font-gotham text-authformtext'/>
              <div className='text-dark font-gotham text-[14px] absolute right-0 bottom-[50%] flex items-center px-4 md:text-[16px]'>
                Show
              </div>
            </div>
            <div className='flex w-full pb-10'>
              <button className='w-full bg-theme text-textWhite font-gotham text-[18px] py-[21px] rounded-[7px] shadow-authbutton'>SELANJUTNYA</button>
            </div>
            <hr className='mb-10 mx-12 border-inset border-[0.5px] border-authline'/>
            <div className='flex flex-col w-full gap-x-1 justify-center items-center md:flex-row'>
              <div className='text-authBottomText text-4 font-gotham'>
                Sudah punya akun?
              </div>
              <button onClick={navigateToLogin} className='text-dark text-4 font-gotham font-bold'>
                Masuk
              </button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  </div>
  )
}

export default Register