import React from 'react'
import guides from '@/data/guidesData.json'
import GuideCard from './GuideCard'

const Guides = () => {
  return (
    <div className='font-bold text-2xl text-center p-4'> <div className='py-2'>
        Checkout Guides
    </div>
   
    <div className='flex flex-wrap justify-center items-center gap-8'>
        {
            guides.map((guide, index) => {
                return (
                    <GuideCard title={guide.title} img={guide.img} theme={guide.theme} key={index} />
                )
            })
        }
    </div>
    </div>
  )
}

export default Guides
