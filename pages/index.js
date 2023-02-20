import React, { useContext, useEffect } from 'react'
import PostCard from '@/components/homeComponent/PostCard'
import MyProfile from '@/components/homeComponent/MyProfile'
import CateList from '@/components/homeComponent/CateList'
import TagCloud from '@/components/homeComponent/TagCloud'
import {BsArrowRight} from 'react-icons/bs'
import { useRouter } from 'next/router'
import { getArticleTableAPI } from '@/API'
import { useRequest } from 'ahooks'
import { Spin } from 'antd'
function HomePage({cates,tags}) {
  const {data,loading} = useRequest(() => {return getArticleTableAPI({pageIndex:1,pageSize:5})})
  const router = useRouter()
  return (
      <div className='w-full container flex p-8'>
        <div className=' basis-3/4 flex-grow flex flex-col gap-8'>
          {data?data.data.data.data?.map(item =>  <PostCard key={item.art_id} post={item}/>): <Spin/>}
          <div className=' self-end md:text-xl hover:text-orange-500 dark:text-orange-500 cursor-pointer pr-20 flex items-center' onClick={() => router.push('/post')}>
            查看更多<BsArrowRight/>
          </div>
        </div>
        <div className=' basis-1/4 max-lg:hidden flex flex-col gap-8'>
          <MyProfile/>  
          <CateList cates={cates}/>
          <TagCloud tags={tags}/>
        </div>
      </div>
  )
}

export default HomePage

export async function getStaticProps() {
  const cates = await fetch('http://127.0.0.1:3000/category')
  const cateData = await cates.json()
  const tags = await fetch('http://127.0.0.1:3000/tag')
  const tagsData = await tags.json()
  return {
    props: {
      cates:cateData.data,
      tags:tagsData.data,
    },
    revalidate:1200
  }
}