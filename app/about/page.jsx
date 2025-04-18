'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { TbArrowRight } from "react-icons/tb";
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { desVariants, titleVariants } from '@/utils/animation';

const Page = () => {
  const imageUrl = "/image/whoweare.jpg";
  const router = useRouter();
  

  return (
    <div>
      {/* Smaller Header Section */}
      <div
        className="bg-center bg-cover bg-no-repeat min-h-[60vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <h1 className="text-6xl font-semibold text-black tracking-widest text-center py-20">
          Who are we?
        </h1>
      </div>

      <div className='container'>
        <div className='pt-4'>
          <motion.h2
          inital ="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className='text-3xl font-semibold text-center lg:p-10 lg:text-5xl'>We have great idea & Interior Design.</motion.h2>
          <motion.p
          inital ="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          className='text-2xl text-center font-medium pb-10 mt-5'>
            Our Interior design company is a company that provides interior design services for homes, offices, apartments and others. We provide the best interior design services for you. We have a team that is experienced in the field of interior.
          </motion.p>
        </div>

        <div className='items-center lg:flex gap-x-8 px-4 lg:px-20 xl:px-32 mb-12'>
          {/* Left Image Section */}
          <div className="w-full pb-16 h-[500px] relative">
            <Image
              src="/image/about123.jpg"
              alt="img"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Right Content Section */}
          <div>
            <p className='pb-8 tracking-wide mt-6'>
              Our Interior design company is a company that provides interior design services for homes, offices, apartments and others. We provide the best interior design services for you. We have a team that is experienced in the field of interior. <br /><br />
              Our Interior design company is a company that provides interior design services for homes, offices, apartments and others. We provide the best interior design services for you. We have a team that is experienced in the field of interior. <br /><br />
              <span className='text-xl font-extrabold tracking-tight'>
                Interior design company is a company that provides interior design services for homes, offices, apartments and others.
              </span>
            </p>
            <Button
              onClick={() => router.push('/')}
              className="inline-flex items-center px-8 py-3 shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2"
            >
              Read More <TbArrowRight className='w-5 h-5 ml-2' />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
