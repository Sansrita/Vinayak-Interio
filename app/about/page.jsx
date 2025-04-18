import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { TbArrowRight } from "react-icons/tb";

const page = () => {
  const imageUrl = "/image/whoweare.jpg";

  return (
    <div>
      <div
        className="bg-center bg-cover bg-no-repeat min-h-[60vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <h1 className="text-6xl font-semibold text-black tracking-widest text-center lg:py-64">
          Who are we?
        </h1>
      </div>

      <div className='container'>
        <div className='pt-4'>
          <h2 className='text-3xl font-semibold text-center lg:p-10 lg:text-5xl'>We have great idea & Interior Design.</h2>
          <p className='text-2xl text-center font-medium pb-10 mt-5'>
            Our Interior design company is a company that provides interior design services for homes, offices, apartments and others. We provide the best interior design services for you. We have a team that is experienced in the field of interior. 
          </p>
        </div>

        <div className='items-center lg:flex gap-x-8'>
          {/* Left Image Section */}
          <div className='w-full'>
            <Image src="/image/gallery1123.jpg" alt="img" width={700} height={700} />
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
            <Button className="inline-flex items-center px-8 py-3 shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">Read More <TbArrowRight className='w-5 h-5 ml-2'/> </Button>
          </div>
        </div>

        {/* Team Section */}
        <div></div>
      </div>
    </div>
  );
};

export default page;
