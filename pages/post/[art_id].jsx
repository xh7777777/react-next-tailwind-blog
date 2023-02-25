import React, {useState} from 'react'
import MdRender from '@/components/postComponents/MdRender';
import PostNav from '@/components/postComponents/postNav';
import { getCommentAPI } from '@/API';
import CommentForm from '@/components/postComponents/CommentForm';
import CommentList from '@/components/postComponents/CommentList';
import { useRequest } from 'ahooks';
import { Spin } from 'antd';
import MyHead from '@/components/ui/MyHead';
function PostDetailPage({detail,id}) {
  const [fresh,setFresh] = useState(false)
  const {data,loading} = useRequest(() => {
    return getCommentAPI(id)
  }, {refreshDeps:[fresh]})
  return (
    <div className='container lg:px-40 md:px-20'>
      <MyHead />
    <h1 className='text-4xl my-10 textc text-center'>
      {detail.title}
    </h1>
    <div className=' border-b-2 border-gray-500 mb-8 text-center pb-4 textc'>
      {detail.create_time} | {detail.cate_name}
    </div>
    <div className='flex gap-8 relative'>
      <div className=' basis-1/4 max-md:hidden'>
        <PostNav content={detail.content}/>
      </div>
      <div className=' basis-3/4 flex flex-col max-md:px-8'>
        <MdRender content={detail.content}/>
        <div className='border-y-2 border-slate-300 mt-8'>
          <CommentForm art_id = {id} setFresh={setFresh} fresh={fresh}/>
        </div>
        {data && !loading ?  <div>
          <CommentList list={data.data.data} setFresh={setFresh} fresh={fresh}/>
        </div>: <Spin/>}
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
      detail:data?.data[0],
      id
    }
  }
}