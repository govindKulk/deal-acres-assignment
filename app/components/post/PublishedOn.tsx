import React from 'react'

interface PublishedOnProps {
    date: string
    align?: string;
}
const PublishedOn: React.FC<PublishedOnProps> = ({
    date,
    align
}) => {
  return (
    <div className={`text-neutral-500 py-3 
    ${align === 'center'? 'text-center': 'text-left'}`}>
        Published On {date}
      </div>
  )
}

export default PublishedOn
