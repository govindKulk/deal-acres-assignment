import Image from 'next/image';
import React from 'react'

interface GuideCardProps {
    title: string;
    theme: string;
    img: string;
}
const GuideCard: React.FC<GuideCardProps>= ({
    title,
    theme,
    img
}) => {

    let bgColor = `bg-${theme}-300`;
    let borderColor = `border-l-${theme}-600`;
    let textColor = `text-${theme}-600`;

    switch(theme) {
        case 'orange':
            bgColor = "bg-orange-100";
            borderColor = "border-l-orange-300";
            textColor = "text-orange-300";
            break;
        case 'yellow':
            bgColor = "bg-amber-100";
            borderColor = "border-l-amber-300";
            textColor = "text-amber-300";
            break;
        case 'green':
            bgColor = "bg-lime-100";
            borderColor = "border-l-lime-300";
            textColor = "text-lime-300";
            break;
        case 'purple':
            bgColor = "bg-purple-100";
            borderColor = "border-l-purple-300";
            textColor = "text-purple-300";
            break;
        case 'blue':
            bgColor = "bg-sky-100";
            borderColor = "border-l-sky-300";
            textColor = "text-sky-300";
            break;
      }

    
  return (
    <div className={`flex flex-col items-center ${bgColor} border-l-[8px] ${borderColor} py-2 px-3`}>
      <div className='font-bold text-xl py-2 '>
        {
            title.split(' ')[0]
        }
        <br/>
        <span className={`${textColor}`}>
            {
                title.split(' ')[1]
            }
        </span>
      </div>

      <Image src={`/images/guides/${img}`} alt={title} width={50} height={50} className='max-w-[100px] ' />
    </div>
  )
}

export default GuideCard
