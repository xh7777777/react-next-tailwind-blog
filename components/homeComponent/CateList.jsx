import React from 'react'
import {MdCategory} from 'react-icons/md'
import Link from 'next/link'
function CateList({cates}) {
  return (
    <div className='card max-w-xs w-72 text-center py-8 px-6'>
        <h2 className='flex items-center mb-3 textc'>
            <MdCategory className=''/>
            分类
        </h2>
        <ul className='flex flex-col gap-3 textc'>
        {cates.map(item => {
            return <Link href={'/post/category/'+item.cate_name} key={item.cate_id} className='flex justify-between cursor-pointer hover:text-orange-600 transition-colors duration-150'>
                <span>{item.cate_name}</span>
                <span>{item.total}</span>
            </Link>
        })}
        </ul>
    </div>
  )
}

export default CateList