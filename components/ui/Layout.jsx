import { useRouter } from 'next/router'
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import MainCoverPic from './MainCoverPic'
import OtherCoverPic from './OtherCoverPic'

function Layout({children}) {
  const router = useRouter()
  return (
    <div>
      {router.asPath==='/' ? 
      <div className={'h-screen w-full'}>
        <Header />
         <MainCoverPic/>
      </div> :      
      <div className={'w-full'}>
        <Header />
        <OtherCoverPic/>
      </div>}
      <div className='z-40 absolute w-full bgc transition-colors duration-500 ease-in'>
        {children}
          <Footer />
      </div>
    </div>
  )
}

export default Layout