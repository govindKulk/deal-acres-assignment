'use client'

import React, { useEffect } from 'react'
import PostSection, { PostSectionProps } from './PostSection';
import PostHeader from './PostHeader';
import PublishedOn from './PublishedOn';
import Image from 'next/image';

type PostProps = {
  heading: string;
  postIntro: string;
  publishedOn: string;
  img: string;
  sections: PostSectionProps[];

}


const Post = ({
  postData
}: {
  postData: PostProps
}) => {

  const { heading, postIntro, publishedOn, img, sections,  } = postData;




  return (

    <div className='px-4 py-2 flex flex-col  '>
      <PostHeader heading={heading} align='left' size='large' />

      <PublishedOn date={publishedOn} align='left' />

      <div className="text-justify" dangerouslySetInnerHTML={{ __html: postIntro }}></div>

      <div className='py-4'>
        <Image src={`/images/${img}`} alt='post cover' width={200} height={100} className='w-full max-w-full' />
      </div>


      <div>
        {sections.map((section, index) => {
          return (
            <PostSection
              title={section.title}
              content={section.content}
              img={section.img}
              isList={section.isList}
              isItalic={section.isItalic}
              lists={section.lists}
              key={index}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Post
