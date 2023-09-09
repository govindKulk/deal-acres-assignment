// data imports
import postData from "@/data/postData.json"
import topicsData from '@/data/topicsData.json'
import allPostsData from '@/data/allPostsData.json';

// ui imports
import Post from "./components/post/Post"
import Feedbar from "./components/feedbar/Feedbar"
import Tabularposts from "./components/tabularposts/Tabularposts";
import Guides from "./components/guides/Guides";
import Locations from "./components/locations/Locations";


export default function Home() {





  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className='flex flex-col min-h-screen lg:grid lg:grid-cols-6'>

        <div className="lg:col-span-4 px-2 py-2">
          {/* Post Section */}
          <Post postData={postData} />
        </div>

        <div className="lg:col-span-2 px-2 py-2">
          {/* Feeds section */}
          <Feedbar allPosts={allPostsData} topics={topicsData} />
        </div>
      </div>

      {/* more posts */}
      <Tabularposts />

      {/* guides */}
      <Guides />

      {/* Search Property by Cities */}
      <Locations />
    </div>
  )
}

