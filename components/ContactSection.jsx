
import Image from "next/image";

const posts = [
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description: 'it is a fantastic theme witg tons of design and layout options, and the customer service is simple outstanding. They respond immediately and solve any inconvenience, no matter how small.',
        date: 'March 16, 2024',
        datetime: '2024-03-16',
        category: {title: '4.7', href: '#'},
        author: {
            name: 'ABCD',
            role: 'Co-Founder',
            href: '#',
            imageUrl: 
            "/image/profile1.jpg",
        },
    },
    {
        id: 2,
        title: 'Boost your conversion rate',
        href: '#',
        description: 'it is a fantastic theme witg tons of design and layout options, and the customer service is simple outstanding. They respond immediately and solve any inconvenience, no matter how small.',
        date: 'March 16, 2024',
        datetime: '2024-03-16',
        category: {title: '4.7', href: '#'},
        author: {
            name: 'EFGH',
            role: 'CEO',
            href: '#',
            imageUrl: 
            "/image/profile1.jpg",
        },
    },
    {
        id: 3,
        title: 'Boost your conversion rate',
        href: '#',
        description: 'it is a fantastic theme witg tons of design and layout options, and the customer service is simple outstanding. They respond immediately and solve any inconvenience, no matter how small.',
        date: 'March 16, 2024',
        datetime: '2024-03-16',
        category: {title: '4.7', href: '#'},
        author: {
            name: 'IJKL',
            role: 'CTO',
            href: '#',
            imageUrl: 
            "/image/profile1.jpg",
        },
    },
    {
        id: 4,
        title: 'Boost your conversion rate',
        href: '#',
        description: 'it is a fantastic theme witg tons of design and layout options, and the customer service is simple outstanding. They respond immediately and solve any inconvenience, no matter how small.',
        date: 'March 16, 2024',
        datetime: '2024-03-16',
        category: {title: '4.7', href: '#'},
        author: {
            name: 'MNOP',
            role: 'Customer',
            href: '#',
            imageUrl: 
            "/image/profile1.jpg",
        },
    },
]
export default function ContactSection() {
    return (
        <div className="pt-8">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Customer Reviews</h2>
                <p className="mt-2 text-lg leading-8">
                    Learn how to grow your business with our expert advice.
                </p>
                <div className="mx-auto mt-10 grid lg:grid-cols-3 grid-cols-1 gap-x-8 lg:max-w-none lg:mx-0 sm:py-16 sm:mt-16 py-10 border-b border-gray-200 border-t gap-y-16">
                    {
                        posts.map((post) => (
                            <article key={post.id}>
                                <div>
                                    <time dateTime={post.datetime}>
                                        <Image src="/image/star.svg" alt="img" width={80} height={5}/>
                                    </time>
                                    <a href={post.category.href}>
                                    {post.category.title}
                                    </a>
                                </div>

                                <div className="group relative">
                                    <h3>
                                        <a href={post.href}>
                                            <span>{post.title}</span>
                                        </a>
                                    </h3>
                                    <p>
                                        {post.description}
                                    </p>
                                </div>

                                <div>
                                    <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-500 " />
                                    <div>
                                        <p>
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
                </div>
            </div>
        </div>
    )
}