import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className='px-4 sm:px-3 md:px-10 lg:px-15'>
        {children}
    </div>
  )
}

export default Wrapper