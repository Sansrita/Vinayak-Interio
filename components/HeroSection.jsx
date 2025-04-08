import Image from "next/image";
import { Button } from "./ui/button";
import { TbArrowUpRight } from "react-icons/tb";

const HeroSection = () => {
  return (
    <div className='container py-12 xl:py-24 h-[auto] text-center lg:py-0 lg:text-left lg:flex lg:justify-between'>
        {/* Left Section */}
      <div className='lg:w-1/2 xl:py-14 lg:py-8 pl-8 pr-32'>
        <p className='tracking-widest uppercase'>Offer for the best Interior</p>
        <h1 className="text-6xl xl:text-[72px] xl:leading-[80px] tracking-[-2px] font-bold mb-5">
            An interior that reflects you
        </h1>
        <p className='pb-6 text-muted-foreground xl:pb-10'>
            Get the best interior design services in town. Our team of experts will help you create a beautiful home as you need. Get the best interior design services in town. Our team of experts will help you create a beautiful home as you need. 
        </p>
        <Button className="inline-flex items-center px-8 py-3 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
          Book Now <TbArrowUpRight className="w-5 h-5 ml-2"/>
        </Button>
      </div>

      {/* Right Image Section */}
      <div className='w-1/2'>
        <Image 
          src="/image/hero1.jpg"
          width={800}
          height={500}
          alt="hero"
          className="absolute right-20 xl:h-[448px] xl:w-[700px] lg:h-[344px] lg:w-[500px] hidden lg:block"
        />
      </div>
    </div>
  );
};

export default HeroSection;
