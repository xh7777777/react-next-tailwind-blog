import React, { useEffect, useRef,useState } from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import { getArticleTableAPI } from '@/API'
import { Pagination } from 'antd'
import { Spin } from 'antd'
import PostCard from '@/components/homeComponent/PostCard'
function PostPage() {
  const searchRef = useRef()
  const [loading ,setLoading] = useState(false)
  const [currentPage,setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(5)
  const [total,setTotal] = useState(0)
  const [currentList,setCurrentList] = useState([])
  useEffect(()=> {
    if(currentList.length === 0) {
      (async function() {
        setLoading(true);
        const {data:res} =await getArticleTableAPI(currentPage,pageSize);
        setCurrentList(res.data.data);
        if(total === 0)
          setTotal(res.data.length);
        setLoading(false);
      })()
    }
  }, [loading,currentList])
  async function onPageChange(page,pageSize) {
    setLoading(true);
    const {data:res} =await getArticleTableAPI(currentPage,pageSize);
    setCurrentList(res.data.data);
    if(total === 0)
      setTotal(res.data.length);
    setLoading(false);
  }
  return (
    <div className='container lg:px-60 md:px-20'>
      <h1 className='text-5xl my-10 textc'>
        全部文章
      </h1>
       <div className='relative mb-6 flex items-center cursor-pointer border-b-slate-400 dark:border-b-slate-200 border-b-2 pb-8'>
          <input type="search" className=' px-4 w-72 h-10 rounded-md shadow-lg outline-orange-600' ref={searchRef} placeholder='搜索文章'/>
          <BiSearchAlt2 className='absolute left-56 text-2xl'/>
       </div>
       {loading? <Spin/>:
        <div>
            <ul className='flex flex-col gap-8'>
                {currentList.map(item => <PostCard key={item.art_id} post={item}/>)}
            </ul>
            <Pagination
            className='textc'
            current={currentPage}
            pageSize={pageSize}
            total={total}
            onChange={onPageChange}
            style={{ marginTop: 16, textAlign: 'center' }}
          />
        </div>

       }

    </div>
  )
}

export default PostPage