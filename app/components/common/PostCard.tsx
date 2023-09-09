import Image from 'next/image';
import React from 'react'

export interface PostCardProps {
    title: string;
    img: string;
}
const PostCard: React.FC<PostCardProps> = ({
    title,
    img
}) => {
  return (
    <div className='p-2 border border-b-gray-700 '>
      
      <div className='flex items-center'>
        
            <Image alt={title} width={100} height={50} className='md:w-full max-w-[150px]' src={`/images/${img}`} />
       

        <div className='p-2'>
        {title}
        </div>
      </div>
    </div>
  )
}

export default PostCard
