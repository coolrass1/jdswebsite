import React from 'react'

const PriceElement = () => {
  return (
    <div className="px-24 grid grid-cols-4 gap-5 py-7">
    <div className="col-span-2 flex justify-center items-start gap-3">
      <div className="w-[25px] h-[15px] bg-slate-800"></div>
      <div className="w-10px overflow-hidden">
        <p className="w-[70%] mt[-10px] border-r-2 border-black">
          {" "}
          Initial consultation taking place during office hours (90minute
          meeting with Solicitor followed by a letter summarising the
          meeting)
        </p>
      </div>
    </div>
    <div className="col-span-1">
      <span>E175.00</span>
    </div>
    <div className="col-span-1">E305.00 </div>
  </div>
  )
}

export default PriceElement