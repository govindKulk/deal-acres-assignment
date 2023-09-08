import Image from 'next/image';
import React from 'react'
import SectionList from './SectionList';

type List = {
    title: string;
    content: string;
}

export interface PostSectionProps {
    title: string;
    content: string;
    img?: string;
    isList?: boolean;
    lists?: List[];
}


const PostSection: React.FC<PostSectionProps> = ({
    title,
    content,
    img,
    isList,
    lists
}) => {

    
  return (
    <div className='py-4'>
        <div>
            {
            img && 
            <Image src={`/images/${img}`} width={200}
            className='w-full'
            height={100} alt='section image'/>
            }   
        </div>
        <div className='text-xl font-semibold py-2'>
            {title}
        </div>
        <div className='text-lg font-regular'>
            {content}
        </div>
        <ul>
        {
            isList && 
                lists?.map((list, index) => {
                return (
                
                <SectionList title={list.title} content={list.content} key={index} />
                )
            })
        }
        </ul>
      
    </div>
  )
}

export default PostSection
