import React, { useContext } from 'react'
import MdRender from '@/components/postComponents/MdRender'
import MyProfile from '@/components/homeComponent/MyProfile'
function AboutPage({about}) {
  return (
      <div className='container lg:px-44 max-md:px-12 py-20 bgc flex gap-8 duration-500 transition-colors'>
      <div className='basis-1/4 max-md:hidden'>
        <MyProfile/>
      </div>
        <div className ='basis-3/4 grow'>
        <MdRender content={about}/>
        </div>
    </div>
  )
}

export default AboutPage

export async function getStaticProps() {
  const res = await fetch('http://127.0.0.1:3000/about')
  const data = await res.json()
  return {
    props: {
      about:data.data.content
    },
    revalidate:1200
  }
}