"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Stone from "@/public/stonebg.png";
import Phone from "@/public/phone.png";
import Sucess from '@/components/Sucess';

const Page = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Use the global CSS class
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div className='bg-black Poppins lg:p-8'>
    
      <div className="justify-center  flex flex-col text-center py-20 p-2 2xl:py-32 2xl:p-24">
        <div>
        <h2 className="text-2xl Poppins md:text-5xl xl:text-7xl 2xl:text-8xl font-bold text-primary">
          <span className='text-black'>SUCCESSFUL</span>
          <span className="text-accent text-[#7b61ff]"> APPLICATIONS</span>
        </h2>
        </div>
        <div className=''>
        <p className="mt-4 text-base  md:text-2xl xl:text-4xl Poppin 2xl:text-5xl 2xl:px-72 text-center text-white">
          Solving diverse business needs through <br/> great  design and UX.
        </p>
        </div>
      </div>

      <div className='px-4 Poppind  items-center justify-center 2xl:px-40'>
        <div>
          <div className='relative'>
            <Image src={Stone} alt='' className="lg:w-full h-96 object-cover md:h-full" width={1000} height={1000} />
            <div className='absolute top-10 md:top-24  lg:left-10 xl:top-40 lg:top-28 left-4 xl:left-16 2xl:top-32 2xl:left-0 text-white'>
              <div className='flex justify-start items-start 2xl:p-20'>
                <div className='text-2xl md:text-4xl lg:text-5xl'>
                  <h2 className="2xl:text-6xl font-bold leading-tight 2xl:leading-snug text-foreground mb-4">
                    Making Virtual <br /> Reality Accessible
                  </h2>
                  <p className="2xl:text-2xl pr-48 xl:text-lg font-light leading-normal lg:text-base text-[#FFFFFF] text-xs mb-6">
                    Welcome to Okomo360, the world’s first <br /> dedicated 360-degree VR platform. We’re <br /> redefining video technology, making immersive <br /> VR experiences not just a luxury.
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sucess />
      <div  className=" bg-black text-white  py-14 text-center">
        <div ref={textRef} className='text flex flex-col gap-4 justify-center text-white' >
        <span className="  text-lg text-white md:text-3xl  xl:text-4xl Poppins">READY FOR YOUR NEXT PROJECT?</span>
        <span  className=" text-white text-4xl md:text-6xl xl:text-8xl font-extrabold hover:italic hover:text-[#7b61ff] text-accent">
          LET&apos;S TALK
        </span>
        </div>
      </div>
    </div>
  );
}

export default Page;
