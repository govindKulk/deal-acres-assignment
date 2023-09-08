import React from 'react'

const Heading = ({heading}: {heading: string}) => {
  return (
    <div className='w-full font-bold text-2xl p-4 text-center'>
      {heading}
    </div>
  )
}

export default Heading
