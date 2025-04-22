'use client';

import Image from "next/image";
import { Button } from "./ui/button";
import { TbArrowUpRight } from "react-icons/tb";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className='container py-12 xl:py-24 h-[auto] text-center lg:py-0 lg:text-left lg:flex lg:justify-between'>
      {/* Left Section */}
      <div className='lg:w-1/2 xl:py-14 lg:py-8 pl-8 pr-32'>
        <motion.p
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className='tracking-widest uppercase'>Offer for the best Interior
        </motion.p>
        <motion.h1
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          className="text-6xl xl:text-[72px] xl:leading-[80px] tracking-[-2px] font-bold mb-5">
          An Interior That Reflects You
        </motion.h1>
        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          variants={tagVariants}
          className="pb-6 xl:pb-10 text-gray-500 hover:text-white hover:font-bold transition-colors duration-200"
        >
          Transform your space with expert-crafted interiors tailored to your lifestyle. At Vinayak Interio, we blend creativity and functionality to design homes that feel as good as they look.
        </motion.p>

        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
        >
          <Link href="https://wa.me/message/A5C4GDLREM33G1">
            <Button className="inline-flex items-center px-8 py-3 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
              Book Now <TbArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>

      </div>

      {/* Right Image Section */}
      <div className='w-1/2'>
        <Image
          src="/image/hero1.jpg"
          width={800}
          height={500}
          alt="hero"
          className="absolute right-20 xl:h-[448px] xl:w-[700px] lg:h-[344px] lg:w-[500px] hidden lg:block rounded-xl"
        />

      </div>
    </div>
  );
};

export default HeroSection;
