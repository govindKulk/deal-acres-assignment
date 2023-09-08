import React from 'react'
import PostCard, { PostCardProps } from './PostCard'



const PostsFeed = ({posts}: {posts: PostCardProps[]}) => {
  return (
    <div className='bg-sky-100 w-5/6 mx-auto my-2'>
      <div className='font-bold text-xl p-2 my-2'>
        You might also like.
      </div>

        {
            posts.map((post, index) => {
                return (
                    <PostCard
                    title={post.title}
                    img={post.img}
                    />
                )
            })
        }
    </div>
  )
}

export default PostsFeed
