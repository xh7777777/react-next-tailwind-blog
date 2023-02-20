import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function PostCard({post}) {
  return (
      <div className="max-w-md card md:max-w-3xl">
            <Link href={`/post/${post.art_id}`}>
            <div className="md:flex">
          <div className="md:shrink-0">
            <Image src={post.cover} className="w-full object-cover md:h-full md:w-64" alt="post cover" width={256} height={256}/>
          </div>
          <div className='flex w-[500px]  flex-col px-8 py-4 h-60 overflow-hidden max-md:w-96 cursor-pointer'>
              <h1 className='textc text-3xl bold'>{post.title}</h1>
              <div className='textc text-xs py-4'>{post.create_time}|{post.cate_name}</div>
              <div className='textc textover'>{post.description}</div>
          </div>
        </div>
            </Link>
      </div>

  )
}

export default PostCard