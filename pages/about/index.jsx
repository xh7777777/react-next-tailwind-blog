import React from 'react'
import MdRender from '@/components/postComponents/MdRender'
import MyProfile from '@/components/homeComponent/MyProfile'
function AboutPage({about}) {
  console.log(about)
  return (
    <div className='container px-44 py-20 bgc flex gap-8'>
      <div className='basis-1/4'>
        <MyProfile/>
      </div>
        <di className ='basis-3/4'>
        <MdRender content={about}/>
        </di>
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