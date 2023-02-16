import React from 'react'
import { getArticleDetailAPI } from '@/API';
import MdRender from '@/components/postComponents/MdRender';
import PostNav from '@/components/postComponents/postNav';
function PostDetailPage({detail}) {
  return (
    <div className='container lg:px-40 md:px-20'>
    <h1 className='text-4xl my-10 textc text-center'>
      {detail.title}
    </h1>
    <div className=' border-b-2 border-gray-500 mb-8 text-center pb-4 textc'>
      {detail.create_time} | {detail.cate_name}
    </div>
    <div className='flex gap-8 relative'>
      <div className=' basis-1/4'>
        <PostNav content={detail.content}/>
      </div>
      <div className=' basis-3/4'>
        <MdRender content={detail.content}/>
      </div>
    </div>
  </div>
  )
}

export default PostDetailPage

export async function getServerSideProps(context) {
  const id = context.params.art_id;
  const res = await fetch(`http://127.0.0.1:3000/article/detail/${id}`)
  const data = await res.json();
  return {
    props:{
      detail:data.data[0]
    }
  }
}