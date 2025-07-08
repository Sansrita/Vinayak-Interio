"use client"

import { desVariants, tagVariants, titleVariants } from "@/utils/animation"
import { motion } from "framer-motion"

export default function Poem() {
  return (
    <div className="pt-16 pb-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.h2
          initial="offscreen"
          whileInView="onscreen"
          variants={titleVariants}
          className="text-3xl font-bold tracking-tight sm:text-4xl mb-4"
        >
          "Transforming homes with love."
        </motion.h2>

        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          variants={desVariants}
          className="text-lg leading-8 text-white-600 mb-8"
        >
          --(A Before-After story of your dream home)
        </motion.p>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={tagVariants}
          className="border-t border-b border-gray-200 py-12 mb-8"
        >
          <p className="text-xl font-medium text-primary mb-8 italic">
            "We don't just shape space—we plant the roots where love finds grace."
          </p>

          <div className="prose prose-lg mx-auto text-white-700 leading-relaxed">
            <p className="mb-4">
              Not just walls, nor floors alone,
              <br />
              We shape the place you call your own.
              <br />
              With every beam and quiet hue,
              <br />
              We craft a space that welcomes you.
            </p>

            <p className="mb-4">
              Where sunlight dances, softly stays,
              <br />
              And love is felt in quiet ways.
              <br />
              Each corner tells a story true—
              <br />
              Of warmth, of care, designed for you.
            </p>

            <p className="mb-6">
              We build not just with tools and art,
              <br />
              But with a thoughtful, beating heart.
              <br />
              Transforming homes from floor to above—
              <br />
              We build with purpose. We build with love.
            </p>
          </div>
        </motion.div>

        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          variants={desVariants}
          className="text-xl font-semibold text-primary"
        >
          We build with purpose. We build with love.
        </motion.p>
      </div>
    </div>
  )
}
