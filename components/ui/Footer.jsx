import React from 'react'
import {IoMdArrowDropupCircle} from 'react-icons/io'
import ScrollToTop from 'react-scroll-up'
import Link from 'next/link'
function Footer() {
  return (
    <div className=' bg-slate-100 dark:bg-neutral-900 h-14  border-orange-500 mt-16'>
        <div className='flex pt-8 justify-center textc'>
           ©2023 by <span><Link href='/' className='cursor-pointer pl-2 text-orange-500 hover:text-orange-700 transition-all duration-300'> xh777</Link></span>
        </div>
        <div className='bg-slate-100 dark:bg-neutral-900 flex pb-16 justify-center'>
            <a className='text-orange-500 hover:text-orange-700 transition-all duration-300' href="https://beian.miit.gov.cn/" target='_blank' rel='noreferrer'>沪ICP备2023004327号</a>
        </div>

        <ScrollToTop showUnder={200} duration={500}>
          <IoMdArrowDropupCircle className='text-5xl textc fixed right-10 bottom-10 hover:text-orange-600 transition-all duration-150 cursor-pointer' onClick={goTop}/>
        </ScrollToTop>
    </div>
  )
}

export default Footer