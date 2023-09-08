import React from 'react'
import TopicButton from './TopicButton'



const Topics = ({
    topicList
}: {topicList: string[]}) => {
  return (
    <div className='flex flex-wrap justify-around items-center bg-sky-100 gap-2
    w-5/6 mx-auto p-4'>
      {topicList.map((topic, index) => {
        return (<TopicButton label={topic} key={index}/>)
      }
      )
      }
    </div>
  )
}

export default Topics
