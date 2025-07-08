"use client";

import { desVariants, tagVariants, titleVariants } from "@/utils/animation";
import { motion } from "framer-motion";
import Image from "next/image";

const posts = [
    {
        id: 1,
        title: "Transformed My Living Room!",
        href: "#",
        description:
            "The design team exceeded my expectations. Every detail — from lighting to furniture — was thoughtfully selected.",
        date: "March 16, 2024",
        datetime: "2024-03-16",
        category: { title: "4.8", href: "#" },
        author: {
            name: "Aarav Mehta",
            role: "Customer",
            href: "#",
        },
    },
    {
        id: 2,
        title: "Stylish, Practical, and Stress-Free",
        href: "#",
        description:
            "I loved how the team balanced style with functionality. The process was smooth, and they always kept me in the loop.",
        date: "April 4, 2024",
        datetime: "2024-04-04",
        category: { title: "4.7", href: "#" },
        author: {
            name: "Emily Chen",
            role: "Customer",
            href: "#",
        },
    },
    {
        id: 3,
        title: "Incredible Attention to Detail",
        href: "#",
        description:
            "From the initial consultation to the final reveal, everything was handled with care and precision.",
        date: "April 20, 2024",
        datetime: "2024-04-20",
        category: { title: "4.9", href: "#" },
        author: {
            name: "Mohit Kapoor",
            role: "Customer",
            href: "#",
        },
    },
];

export default function ContactSection() {
    return (
        <div className="pt-8">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.h2
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={titleVariants}
                    className="text-3xl font-bold tracking-tight sm:text-4xl">“Experience spoken through every story.”</motion.h2>
                <motion.p
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={desVariants}
                    className="mt-2 text-lg leading-8">
                    --(Our clients feedback)
                </motion.p>
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={tagVariants}
                    className="mx-auto mt-10 grid lg:grid-cols-3 grid-cols-1 gap-x-8 lg:max-w-none lg:mx-0 sm:py-16 sm:mt-16 py-10 border-b border-gray-200 border-t gap-y-16">
                    {
                        posts.map((post) => (
                            <article key={post.id}
                                className="flex max-w-xl flex-col items-start justify-between"
                            >
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time dateTime={post.datetime}>
                                        <Image src="/image/star.svg" alt="img" width={80} height={5} />
                                    </time>
                                    <a href={post.category.href}
                                        className="relative z-10 bg-primary rounded-full text-white px-3 py-1.5 font-medium hover:bg-gray-100 hover:text-black transition-all"
                                    >
                                        {post.category.title}
                                    </a>
                                </div>

                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 group-hover:text-gray-600">
                                        <a href={post.href}>
                                            <span>{post.title}</span>
                                        </a>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6">
                                        {post.description}
                                    </p>
                                </div>

                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-10 w-10 rounded-full text-gray-500 bg-gray-200 p-1"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 19.5a7.5 7.5 0 0115 0v.75H4.5v-.75z"
                                        />
                                    </svg>
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold">
                                            <a href={post.author.href}>
                                                <span />
                                                {post.author.name}
                                            </a>
                                        </p>
                                        <p>{post.author.role}</p>
                                    </div>
                                </div>
                            </article>
                        ))
                    }
                </motion.div>
            </div>
        </div>
    )
}