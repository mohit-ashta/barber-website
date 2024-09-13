import React from 'react'
import { galleryData } from '@/constants/galleryData'
import { PrimaryButton } from '@/components/atoms/primary-button';
import { GridCard } from '@/components/molecules/grid-card';

export const GalleryTemplate = () => {
  const Num = [1,4,6,7,12,14,17];
  return (
    <section className='container'>
    <div className="row mt-5">
           {
             galleryData.map((item,id)=>(
              <GridCard marginB="mb-0" cols={`${ Num.includes(item.id) ? "col-lg-8" : "col-lg-4"}`}
              imgSrc={item.imgSrc} icon={item.icon}
               key={id}
             />))
           }
    </div>
    <div className='text-center mb-5'>
    <PrimaryButton  title={"Load More"}/>
    </div>
    </section>
  )
}
