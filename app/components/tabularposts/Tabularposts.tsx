import React from 'react'
import TableHeader from './TableHeader'
import posts from '@/data/allPostsData.json'
import articles from '@/data/articlesData.json'
import PostCard from '../common/PostCard'
import ArticleCard from './ArticleCard'
import Heading from '../common/Heading'


const Tabularposts = () => {
  return (
    <div>

      <Heading heading='Read More' />
      <div className='=  lg:grid lg:grid-cols-3 bg-sky-100'>
        <div className='my-2 px-4 lg:col-span-1 '>
          <div>

            <TableHeader header='Popular Posts' />
          </div>
          <div className='bg-sky-100 lg:max-h-[600px] lg:lg:overflow-y-scroll'>
            {
              posts.map((post, index) => {
                return (
                  <PostCard key={index} title={post.title} img={post.img} />
                )
              })
            }
          </div>

        </div>

        <div className='my-2 px-4 lg:col-span-1 '>
          {/* Latest Posts do some validation for grabing latest posts through date. */}

          <TableHeader header='Latest Posts' />
          <div className='bg-sky-100 lg:max-h-[600px] lg:overflow-y-scroll'>
            {
              posts.map((post, index) => {
                return (
                  <PostCard key={index} title={post.title} img={post.img} />
                )
              })
            }
          </div>
        </div>

        <div className='my-2 px-4 lg:col-span-1 '>
          {/* Relevant Articles. */}


          <TableHeader header='Relevant Articles' />
          <div className='lg:max-h-[600px] lg:overflow-y-scroll'>

            {
              articles.map((article, index) => {
                return (
                  <ArticleCard key={index} title={article.title} img={article.img} />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tabularposts
