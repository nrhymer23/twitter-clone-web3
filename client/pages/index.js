import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'
import Feed from '../components/home/Feed'

const style = {
    wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`, 
    content: `max-w-[1400px] w-2/3 flex justify-between` //Creates a centered page with responsive display
}

export default function Home(){
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <Sidebar/>
        <Feed />   
        <h2>Widget</h2>
      </div>
    </div>
  )
}

