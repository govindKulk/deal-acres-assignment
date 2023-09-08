import React from 'react'
import Topics from './Topics';
import PostsFeed from './PostsFeed';
import { PostCardProps } from './PostCard';
import Heading from '../common/Heading';

interface FeedbarProps {
  topics: string[];
  allPosts: PostCardProps[];
}

const Feedbar: React.FC<FeedbarProps> = ({
  topics,
  allPosts
}) => {
  return (
    <div>
     
      <Topics topicList = {topics} />
      <PostsFeed posts={allPosts}/>
    </div>
  )
}

export default Feedbar
