import React from 'react'

const TableHeader = ({
    header
}: {header: string}) => {
  return (
    <div className='font-semibold text-xl text-center py-4 border border-b-black border-t-black bg-white'>
      {header}
    </div>
  )
}

export default TableHeader
