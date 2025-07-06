import React from 'react'

const Technology = () => {
  return (
    <>
    <div className=' mt-10 px-15 Technology'><h1 className='text-4xl'>Technology</h1></div>
    <div className='px-15 my-10 '>
        <div className='flex justify-evenly mt-10 '>
          <div className='h-15 w-15 ml-4'><img src="/images/html.png" alt="Html" /></div>
          <div className='h-15 w-15 ml-4'><img src="/images/css.png" alt="Css" /></div>
          <div className='h-15 w-15 ml-4'><img src="/images/js.png" alt="Js" /></div>

        </div>
        <div className=' flex justify-evenly mt-15'>
          <div className='h-15 w-15 ml-5'><img src="/images/Bootstrap.png" alt="Bootstrap" /></div>
          <div className='h-15 w-15 ml-5'><img src="/images/tailwind.png" alt="Tailwind" /></div>
          <div className='h-15 w-15 ml-5'><img src="/images/gssap.png" alt="Gsap" /></div>
          <div className='h-15 w-15 ml-5'><img src="/images/react.png" alt="React" /></div>
          <div className='h-15 w-15 ml-5'><img src="/images/node_js.png" alt="Node_Js" /></div>
          <div className='h-15 w-15 ml-5'><img src="/images/mongodb.png" alt="Mongo Db" /></div>
        </div>
    </div>
    </>

  )
}

export default Technology