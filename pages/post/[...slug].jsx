import React, { useEffect, useRef,useState } from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import { getArticleTableAPI } from '@/API'
import { Pagination } from 'antd'
import { Spin } from 'antd'
import PostCard from '@/components/homeComponent/PostCard'
import { usePagination } from 'ahooks'
import { useRouter } from 'next/router'
async function ArticleInfo(params,path) {
   const obj = {
    pageIndex:params.current,
    pageSize:params.pageSize
   }
    if(path[0]==='category') {
      obj.category_name = path[1];
    } else if(path[0]==='tag') {
      obj.tag_name = path[1];
    } else if(path[0]==='search'){
      obj.searchText = path[1];
    }
    const {data:res} = await getArticleTableAPI(obj);
    return {
      total:res.data.data.length,
      list:res.data.data
    }
}
async function getArticle(params,path){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ArticleInfo(params,path));
    }, 1000);
  });
}
function PostFilterPage() {
  const searchRef = useRef()
  const router= useRouter()
  const { data, loading, pagination } = usePagination((params) => getArticle(params, router.query.slug), {defaultPageSize:5});
  return (
       <div className='container lg:px-60 md:px-20'>
      <h1 className='text-5xl my-10 textc'>
        查询结果
      </h1>
       <div className='relative mb-6 flex items-center cursor-pointer border-b-slate-400 dark:border-b-slate-200 border-b-2 pb-8'>
          <input type="search" className=' px-4 w-72 h-10 rounded-md shadow-lg outline-orange-600' ref={searchRef} placeholder='搜索文章'/>
          <BiSearchAlt2 className='absolute left-56 text-2xl'/>
       </div>
       {loading? <Spin className='mx-auto mb-40'/>:
        <div>
            <ul className='flex flex-col gap-8'>
                {data.list.map(item => <PostCard key={item.art_id} post={item}/>)}
            </ul>
            <Pagination
              current={pagination.current}
              pageSize={pagination.pageSize}
              total={data?.total}
              onChange={pagination.onChange}
              showQuickJumper
              style={{ marginTop: 16, textAlign: 'center' }}
            />
        </div>
       }
    </div>
   
  )
}

export default PostFilterPage