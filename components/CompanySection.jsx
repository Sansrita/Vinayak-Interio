'use client';

import { titleVariants } from "@/utils/animation";
import { motion } from "framer-motion";
import Badge from "./Badge";

const CompanySection = () => {
  return (
    <main className="container mx-auto px-4 py-10 sm:py-12">
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10 sm:mb-16 leading-snug">
        PROFESSIONAL HOME INTERIOR DESIGN COMPANY
      </h2>

      {/* Features */}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={titleVariants}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6"
      >
        <Badge title="SINCE" endCountNum={2017} />
        <Badge title="PREMIUM" subtitle="Materials" />
        <Badge title="YEARS" endCountNum={10} endCountText="-15" />
        <Badge title="COMPLETION" subtitle="45 Working Days" />
        <Badge title="PROJECTS" endCountNum={75} endCountText="+ Per Year" />
        <Badge title="LIFELONG" subtitle="Service Support" />
      </motion.div>
    </main>
  );
};

export default CompanySection;
