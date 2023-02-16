import { useRouter } from 'next/router'
import React from 'react'
import {AiFillTags} from 'react-icons/ai'
function TagCloud({tags}) {
  const router = useRouter()
  function handleSearch(tag_name) {
    router.push(`/post/tag/${tag_name}`)
  }
  return (
    <div className='card max-w-xs w-72 text-center py-8 px-6 text'>
    <h2 className='flex items-center mb-3 textc'>
        <AiFillTags/>
        标签
    </h2>
    <div className='flex flex-wrap cursor-pointer'>
        {tags.map(item => {
            return <span onClick={() => handleSearch(item.tag_name)} key={item.tag_id} style={{color:item.color}} className={item.mx+' '+item.size}>{item.tag_name}</span>
        }) }
    </div>
</div>
  )
}

export default TagCloud

