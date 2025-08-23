import Name from './Name'
function Header() {
    return <>
       <div className=' grid gap-2 text-zinc-400'>
        <h1 className=' inline-flex md:text-5xl sm:text-4xl text-2xl'>Hello i'am <Name/></h1>
        <h1 className=' inline-flex md:text-5xl sm:text-4xl text-2xl' ><span className='text-zinc-800 opacity-80' style={{ WebkitTextStroke: '2px oklch(82.8% 0.189 84.429)'}}>MERN &nbsp;</span>Developer</h1>
        <h1 className=' inline-flex md:text-5xl sm:text-4xl text-2xl'>Based In <span className='text-zinc-800 opacity-80' style={{ WebkitTextStroke: '2px oklch(82.8% 0.189 84.429)'}}>&nbsp;India </span></h1>
       </div>
    </>
}

export default Header;