import React, {useState} from 'react'

function Counter() {

  const [count, setCount] = useState(0);

  const substractOne = () => {
    if(count > 0) {
        setCount(count - 1);        
    } else {
        setCount(count);
    }
  }
  const addOne = () => {
    if(count < 99 ){
        setCount(count + 1);
    } else {
        setCount(count);
    }
  }
    
  return (
    <div className='flex items-center'>
        <button onClick={substractOne} type='button' className='flex w-[58px] h-[53px] justify-center items-center border border-solid border-[#F1F1F1] font-gotham500 text-[#979797] text-[22px] hover:bg-theme hover:text-textWhite'>-</button>
        <div type="text" className='flex  w-[78px] h-[53px] justify-center items-center border border-solid border-[#F1F1F1] font-gotham500 text-[#979797] text-[22px]'>{count}</div>
        <button onClick={addOne} type='button' className='flex w-[58px] h-[53px] justify-center items-center border border-solid border-[#F1F1F1] font-gotham500 text-[#979797] text-[22px] hover:bg-theme hover:text-textWhite'>+</button>
    </div>
  )
}

export default Counter