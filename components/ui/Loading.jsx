import React from 'react'
import { Spin } from 'antd'
function Loading() {
  return (
    <div className='absolute z-50 flex align-middle justify-center'>
        <Spin />
    </div>
  )
}

export default Loading