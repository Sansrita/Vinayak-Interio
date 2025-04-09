'use client';

import Image from "next/image";
import Badge from "./Badge";

const CompanySection = () => {
  return (
    <main className="container mx-auto px-4 py-12">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        PROFESSIONAL HOME INTERIOR DESIGN COMPANY
      </h2>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-24">
        <Badge title="SINCE" subtitle="2017" />
        <Badge title="PREMIUM" subtitle="Materials" />
        <Badge title="10 - 15 YEARS" subtitle="Warranty" />
        <Badge title="COMPLETION" subtitle="45 Working Days" />
        <Badge title="PROJECTS" subtitle="75+ Per Year" />
        <Badge title="LIFELONG" subtitle="Service Support" />
      </div>

    </main>
  );
};

export default CompanySection;
