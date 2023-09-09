import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface BrandBannerProps {
    img: string;
    url: string;
}
const BrandBanner: React.FC<BrandBannerProps> = ({
    img,
    url
}) => {
  return (
    <div className='w-5/6 mx-auto p-4'>

    <Link href={url}>
      <Image src={`/images/${img}`} alt="multipurpose banner" width={400} height={100} className="w-full max-w-full"/>
    </Link>
    </div>
  )
}

export default BrandBanner
