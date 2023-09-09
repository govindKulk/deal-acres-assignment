import Image from 'next/image';
import React from 'react'
import SectionList from './SectionList';
import PostHeader from './PostHeader';

type List = {
    title: string;
    content: string;
}

export interface PostSectionProps {
    title: string;
    content: string;
    img?: string;
    isList?: string | undefined;
    lists?: List[];
    isItalic?: string | undefined;
}


const PostSection: React.FC<PostSectionProps> = ({
    title,
    content,
    img,
    isList,
    lists,
    isItalic
}) => {

    console.log(isItalic)
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
        <PostHeader size='medium' heading={title} align='left' style={isItalic ? 'italic': ''}/>
        <div className='text-lg font-regular text-justify'>
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
