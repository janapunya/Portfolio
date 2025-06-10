import { useState } from 'react'
import Display from './display'
import ClickSpark from './reactBits/Click_spark'


function App() {
  return (
    <>
      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={35}
        sparkCount={11}
        duration={1200}
      >
        <div className='bg-zinc-950 text-white h-auto z-0'>

            <Display />
        </div>
      </ClickSpark>
    </>
  )
}

export default App
