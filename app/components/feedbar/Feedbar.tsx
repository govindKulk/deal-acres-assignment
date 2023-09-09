import React from 'react'
import Topics from './Topics';
import PostsFeed from './PostsFeed';
import { PostCardProps } from '../common/PostCard';
import Heading from '../common/Heading';
import BrandBanner from './BrandBanner';

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
      <BrandBanner img='brand-banner-1.png' url='/banner1'/>
      <PostsFeed posts={allPosts}/>
      <BrandBanner img='brand-banner-2.png' url='/banner2'/>
    </div>
  )
}

export default Feedbar
