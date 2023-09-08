import React from 'react'

const TopicButton = ({label}: {label: string}) => {
  return (
    <button className='
    text-center text-capitalize topic-shadow
 ` p-2 rounded-full
    bg-gray-100
    '>
      {label}
    </button>
  )
}

export default TopicButton
