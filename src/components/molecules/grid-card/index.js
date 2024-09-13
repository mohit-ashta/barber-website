import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'
import { Routes } from '@/constants/routes';
export const GridCard = ({imgSrc , date,title,desc,link, cols,linkName,marginB,icon}) => {
  const router = useRouter();
  return (
    <div className={`col-12 ${marginB ? marginB :" mb-3"} px-3 ${cols ? cols : 'col-lg-4'}`}  data-aos="zoom-out-up" onClick={()=>router.push(Routes.DETAIL.absolutePath)}>
    <div className="mb-0 position-relative"  style={{ height: "400px"}}>
      <Image
      width={100}
      height={100}
        className="rounded h-100"
        layout='responsive'
        style={{ objectFit: "cover" }}
        src={imgSrc}
        alt="image"
      />
    </div>
    <div className='position-absolute end-0 top-0 me-4 mt-2'><span>{icon}</span></div>
    <span className="d-inline-block mb-2 small text-muted">
    {date}
    </span>
    <h5 className="mb-0">
   {title}
    </h5>
    <p className="mb-2  fs-6 lead text-muted">
     {desc}
    </p>
    <Link className="text-primary-color fw-bold text-decoration-none" href={link || "#"}>
   {linkName}
    </Link>
  </div>
  )
}
