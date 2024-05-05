import React from 'react'
import { Outlet } from "react-router-dom";

const Wrapper = () => {
  return (
    <div className='flex gap-4'>
      <div className=""><Outlet/></div>
    </div>
  )
}

export default Wrapper