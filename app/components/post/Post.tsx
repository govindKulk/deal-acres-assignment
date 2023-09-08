'use client'

import React, {useEffect} from 'react'
import PostSection, { PostSectionProps } from './PostSection';

type PostProps = {
    heading: string;
    postIntro: string;
    publishedOn: string;
    img: string;
    sections: PostSectionProps[]
}

 
const Post= ({
    postData
}: {
    postData: PostProps
}) => {

    const {heading, postIntro, publishedOn, img, sections} = postData;

   


  return (
    <div className='px-4 py-2 flex flex-col items-center '> 
      <div className='text-2xl font-semibold'>
        {heading}
      </div>

      <div className='text-center text-neutral-500 py-3'>
        Published On {publishedOn}
      </div>

      <div dangerouslySetInnerHTML={{__html: postIntro}}></div>

      <div>
        {sections.map((section, index) => {
            return (
                <PostSection
                title={section.title}
                content={section.content}
                img = {section.img}
                isList = {section.isList}
                lists={section.lists}
                />
            )
        })}
      </div>
    </div>
  )
}

export default Post
