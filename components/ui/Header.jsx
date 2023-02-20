import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import {AiFillHome} from "react-icons/ai"
import {RiArticleFill} from 'react-icons/ri'
import {TbTimeline} from 'react-icons/tb'
import {BiUserPin,BiSearchAlt2} from 'react-icons/bi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsMoonStarsFill,BsCloudSunFill} from 'react-icons/bs'
import {RiSearchFill} from 'react-icons/ri'
import { useRouter } from 'next/router'
import { themeContext } from '../Provider/ContextProvider'
import { setThemeContext } from '../Provider/ContextProvider'
import { throttle } from '@/utils'
import { Modal } from 'antd'
const navItem = [
    {
        key:'home',
        value:'主页',
        to:'/',
        icon: <AiFillHome />
    },
    {
        key:'post',
        value:'文章',
        to:'/post',
        icon: <RiArticleFill />
    },
    {
        key:'timeline',
        value:'日志',
        to:'/timeline',
        icon: <TbTimeline />
    },
    {
        key:'about',
        value:'关于',
        to:'/about',
        icon: <BiUserPin />
    },
  //   {
  //     key:'search',
  //     value:'搜索',
  //     to:'',
  //     icon: <RiSearchFill />
  //  },
]

function Header() {
  const [navOffset,setNavOffset] = useState('max-md:translate-x-full')
  const [isUp,setIsUp] = useState('')
  const [scrollY, setScrollY] = useState(0)
  const router = useRouter()
  const searchRef = useRef()
  const theme= useContext(themeContext)
  const setTheme = useContext(setThemeContext)
  const [open,setOpen] = useState(false)
  useEffect(() => {
    window.onscroll = throttle(() => {
      const y = document.documentElement.scrollTop
      if(y > 200 && y > scrollY){
        setIsUp('-translate-y-20')
      } else {
        setIsUp('')
      }
      setScrollY(y)
    }, 300)
  })
  function handleSearch() {
    
  }
  function toggleTheme() {
    if(theme === 'dark') setTheme('')
    else setTheme('dark')
  }
  function handleShowNav() {
    if(navOffset === 'max-md:translate-x-full') setNavOffset('max-md:translate-x-0') 
    else setNavOffset('max-md:translate-x-full')
  }
  function handleSkip(to) {
    setNavOffset('max-md:translate-x-full')
    if(to)
      router.push(to)
    else
      setOpen(true)
  }
  async function handleOk() {

  }
  return (
    <nav className={`fixed dark:bg-neutral-700 inset-x-0 top-0 transition-all duration-500 bg-slate-200 ease-in z-50 `+isUp}>
    <div className="container flex justify-between items-center max-md:px-20 px-10">
      <h1 className="text-2xl bold max-md:py-6"><Link href='/' className='dark:text-slate-200 text-neutral-700'>777WebSite</Link></h1>
      <GiHamburgerMenu className='dark:text-slate-200 text-neutral-700 text-2xl md:hidden cursor-pointer' onClick={handleShowNav}/>
      <ul className={`flex items-center justify-around max-md:flex-col max-md:right-0 max-md:absolute bg-slate-200 dark:bg-neutral-700 max-md:w-1/3 max-md:min-h-screen max-md:top-20 max-md:justify-start max-md:gap-4 transition-all duration-500 ease-in `+navOffset}>
        {navItem.map(item => <li key={item.key} className=' dark:text-slate-200 text-neutral-700 border-b-2 border-transparent hover:border-orange-600 transition-all duration-100 ease-in hover:dark:text-orange-600' >
            <a className='cursor-pointer py-5 px-5 text-inherit flex items-center gap-x-1' onClick={() =>handleSkip(item.to)}>{item.icon}{item.value}</a>
        </li>)}
      </ul>
      <BsMoonStarsFill className={`absolute text-2xl dark:text-slate-200 text-neutral-700 right-7 cursor-pointer ${theme==='dark'?'hidden':''}`} onClick={toggleTheme}/>
      <BsCloudSunFill className={`absolute text-2xl dark:text-slate-200 text-neutral-700 right-7 cursor-pointer ${theme!=='dark'?'hidden':''}`}  onClick={toggleTheme}/>
    </div>
    {/* <Modal
        title="搜索文章"
        open={open}
        onOk={handleOk}
        onCancel={() => setOpen(false)}
        footer=''
      >
        <input type="search" className=' px-4 w-72 h-10 rounded-md shadow-lg outline-orange-600' ref={searchRef} placeholder='搜索文章'/>
        <BiSearchAlt2 className='absolute left-56 text-2xl' onClick={handleSearch}/>
      </Modal> */}
  </nav>
  )
}

export default Header