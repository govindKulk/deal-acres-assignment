

import {useEffect} from "react"
import Image from 'next/image'
import postData from "@/postData.json"
import topicsData from '@/topicsData.json'
import allPostsData from '@/allPostsData.json';
import Post from "./components/post/Post"
import Feedbar from "./components/feedbar/Feedbar"
import { PostSectionProps } from "./components/post/PostSection"
import Tabularposts from "./components/tabularposts/Tabularposts";
import Guides from "./components/guides/Guides";
import Locations from "./components/locations/Locations";


export default function Home() {


  

 
  return (
    <div className="max-w-screen-2xl mx-auto">
   <div className='flex flex-col min-h-screen lg:grid lg:grid-cols-6'>
    <div className="lg:col-span-4 px-2 py-2">
      <Post postData={postData }/>
    </div>
    <div className="lg:col-span-2 px-2 py-2">

    <Feedbar allPosts={allPostsData} topics={topicsData}/>
    </div>
    </div>
    <Tabularposts/>
    <Guides/>
    <Locations/>
   </div>
  )
}

