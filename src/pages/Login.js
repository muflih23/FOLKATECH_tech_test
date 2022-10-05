import React from 'react'
import Card from './components/Card'
import AuthHeader from './components/AuthHeader'
import { useNavigate } from "react-router-dom"

function Login() {

  let navigate = useNavigate();

  const navigateToRegister = (e) => {
    e.preventDefault();
    //console.log('button clicked !');
    navigate("../regist", { replace: false });  
  }

  const loginHandler = (e) => {
    e.preventDefault();
    navigate("/home");
  }

  return (
    <div className='flex w-screen min-h-screen flex-col justify-center items-center'>
      <div className='flex w-full h-full justify-center py-4 px-4'>
        <Card>
          <AuthHeader text={'Masuk'}/>
          <form className='flex w-full pt-9 flex-col'>
            <div className='flex flex-col w-full pb-[25px]'>
              <input 
              type='text'
              placeholder='Email' 
              className='bg-white rounded-[7px] shadow-authform py-5 px-[18px] font-gotham text-authformtext focus:outline-none '/>
            </div>
            <div className='relative flex flex-col w-full pb-5'>
              <input 
              type='password'
              placeholder='Password' 
              className='bg-white rounded-[7px] shadow-authform py-5 px-[18px] font-gotham text-authformtext focus:outline-none '/>
              <div className='text-dark font-gotham text-[14px] absolute right-0 bottom-[50%] flex items-center px-4 md:text-[16px]'>
                Show
              </div>
            </div>
            <div className='flex flex-row-reverse w-full pb-[30px]'>
              <div className='font-gotham text-3 text-dark'>Lupa password</div>
            </div>
            <div className='flex w-full pb-[39px]'>
              <button onClick={loginHandler} className='w-full bg-theme text-textWhite font-gotham text-[18px] py-[21px] rounded-[7px] shadow-authbutton'>MASUK</button>
            </div>
            <hr className='mb-10 mx-12 border-inset border-[0.5px] border-authline'/>
            <div className='flex flex-col w-full gap-x-1 justify-center items-center md:flex-row'>
              <div className='text-authBottomText text-4 font-gotham'>
                Belum punya akun?
              </div>
              <button onClick={navigateToRegister} className='text-dark text-4 font-gotham font-bold'>
                Daftar disini
              </button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}

export default Login