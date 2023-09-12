import Wrapper from '@/components/Wrapper'
import React from 'react'
export const metadata = {
  title: 'Contact Us'
}


const Contact = () => {
  return (
    <Wrapper>
        <div className='grid place-content-center place-items-center h-screen'>
          <h1 className='font-extrabold text-4xl uppercase mb-10'>Contact Us</h1>
          <h2 className='text-2xl md:text-4xl lg:text-6xl text-indigo-600'>Coming Soon</h2>
        </div>
    </Wrapper>
  )
}

export default Contact