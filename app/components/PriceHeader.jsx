import React from 'react'

const PriceHeader = () => {
  return (
    <div className="px-24  grid grid-cols-4 items-center bg-primary min-h-[60px] text-slate-100">
    <div className="col-span-2 flex gap-2">
      <span>logo</span>
      <span>GENERAL</span>
    </div>
    <div className="col-span-1">OFFICE HOURS</div>
    <div className="col-span-1"> OUT OF OFFICE HOURS</div>
  </div>
  )
}

export default PriceHeader