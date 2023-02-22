import React from 'react'
import { Timeline } from 'antd'
import MyHead from '@/components/ui/MyHead'
function TimeLinePage({logger}) {
  return (
      <div > 
        <Timeline className='textc text-3xl pt-20 bgc transition-all duration-500' mode='alternate' items={logger.map(item => {
          return {label:item.time, children:item.content}
        }).reverse()}/>
    </div>

  )
}

export default TimeLinePage


export async function getStaticProps() {
  const logs = await fetch('http://127.0.0.1:3000/logger')
  const logData = await logs.json()
  const wis = await fetch('http://127.0.0.1:3000/about/main')
  const wisData = await wis.json()
  return {
    props: {
      logger:logData.data
    },
    revalidate:1200
  }
}
