import React from 'react'

interface SectionListProps {
    title: string;
    content: string;
}

const SectionList: React.FC<SectionListProps> = ({
    title,
    content
}) => {
  return (
    <li className='py-2'>
        <div className='font-semibold text-lg'>
            {title}
        </div>
        <div className='font-regular'>
            {content}
        </div>
      
    </li>
  )
}

export default SectionList
