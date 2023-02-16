import React, { useEffect, useRef,useState } from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import { getArticleTableAPI } from '@/API'
import { Pagination } from 'antd'
import { usePagination } from 'ahooks'
import { Spin } from 'antd'
import PostCard from '@/components/homeComponent/PostCard'
function PostPage() {
  const searchRef = useRef()
  const { data, loading, pagination } = usePagination((current)=> 
  {
    return getArticleTableAPI(current.current,current.pageSize)
  },
  {defaultPageSize:5,defaultCurrent:1});
  const [currentList,setCurrentList] = useState([])
  return (
    <div className='container px-60'>
      <h1 className='text-5xl my-10 textc'>
        全部文章
      </h1>
       <div className='relative mb-96 flex items-center cursor-pointer border-b-slate-400 dark:border-b-slate-200 border-b-2 pb-8'>
          <input type="search" className=' px-4 w-72 h-10 rounded-md shadow-lg outline-orange-600' ref={searchRef} placeholder='搜索文章'/>
          <BiSearchAlt2 className='absolute left-60'/>
       </div>
       {loading? <Spin/>:
        <div>
            <ul>
                {data.data.data.data.map(item => <PostCard key={item.art_id} post={item}/>)}
            </ul>
            <Pagination
            className='textc'
            current={pagination.current}
            pageSize={pagination.pageSize}
            total={data?.data.data.length}
            onChange={pagination.onChange}
            style={{ marginTop: 16, textAlign: 'center' }}
          />
        </div>

       }

    </div>
  )
}

export default PostPage