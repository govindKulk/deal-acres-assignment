import React from 'react'
import TableHeader from './TableHeader'
import posts from '@/allPostsData.json'
import articles from '@/articlesData.json'
import PostCard from '../feedbar/PostCard'
import ArticleCard from './ArticleCard'
import Heading from '../common/Heading'


const Tabularposts = () => {
  return (
    <div>

    <Heading heading='Read More' />
    <div className='=  lg:grid lg:grid-cols-3 bg-sky-100'>
      <div className='my-2 px-4 lg:col-span-1 lg:max-h-[600px] overflow-y-scroll'>
        <div>

      <TableHeader header='Popular Posts'/>
        </div>
        <div className='bg-sky-100'>
        {
        posts.map((post, index) => {
            return (
                <PostCard title={post.title} img={post.img} />
            )
        })
      }
        </div>
        
      </div>

      <div className='my-2 px-4 lg:col-span-1 lg:max-h-[600px] overflow-y-scroll'>
        {/* Latest Posts do some validation for grabing latest posts through date. */}

        <TableHeader header='Latest Posts'/>
        <div className='bg-sky-100'>
        {
        posts.map((post, index) => {
            return (
                <PostCard title={post.title} img={post.img} />
            )
        })
      }
        </div>
      </div>

      <div className='my-2 px-4 lg:col-span-1 lg:max-h-[600px] overflow-y-scroll'>
        {/* Relevant Articles. */}

        <TableHeader header='Relevant Articles'/>
        {
            articles.map((article, index) => {
                return (
                    <ArticleCard title={article.title} img={article.img} />
                )
            })
        }
      </div>
    </div>
    </div>
  )
}

export default Tabularposts
