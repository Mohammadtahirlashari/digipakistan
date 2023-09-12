import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className='px-5 sm:px-5 md:px-10 lg:px-15'>
        {children}
    </div>
  )
}

export default Wrapper