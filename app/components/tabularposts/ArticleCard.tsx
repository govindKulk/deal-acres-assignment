import Image from 'next/image';
import React from 'react'

interface ArticleCard {
    title: string;
    img: string;
}
const ArticleCard: React.FC<ArticleCard> = ({
    title,
    img
}) => {
  return (
    <div className='flex flex-col items-center '>
      <Image alt={title} width={300} height={100} src={`/images/${img}`} className='w-full'/>
        <div className='w-full font-semibold text-lg bg-neutral-300 text-center py-2'>
            {title}
        </div>
    </div>

  )
}

export default ArticleCard
