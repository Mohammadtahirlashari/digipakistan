import Wrapper from '@/components/Wrapper'
import React from 'react'

export const metadata = {
  title: 'Blog'
}

const Blog = () => {
  return (
<Wrapper>
<div className='grid place-content-center place-items-center h-screen'>
  <h1 className='font-extrabold text-4xl uppercase'>Latest Blog</h1>
          <h2 className='text-2xl md:text-4xl lg:text-6xl text-indigo-600'>Coming Soon</h2>
        </div>
</Wrapper>
    )
}

export default Blog