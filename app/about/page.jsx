import React from 'react';

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
      </div>
    </div>
  );
};

export default page;
