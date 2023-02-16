import React from 'react'
import {IoMdArrowDropupCircle} from 'react-icons/io'
import ScrollToTop from 'react-scroll-up'
function Footer() {
    function goTop() {

    }
  return (
    <div className='bgc h-14'>
        123333333
        <ScrollToTop showUnder={200} duration={500}>
        <IoMdArrowDropupCircle className='text-5xl textc fixed right-10 bottom-10 hover:text-orange-600 transition-all duration-150 cursor-pointer' onClick={goTop}/>
        </ScrollToTop>
    </div>
  )
}

export default Footer