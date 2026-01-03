import React from "react";
import { FaLeaf, FaTractor, FaWater } from "react-icons/fa";

const Blogs = () => {
    const blogPosts = [
        {
            id: 1,
            icon: <FaLeaf className="text-green-600 text-4xl mb-4" />,
            title: "The Future of Organic Farming",
            desc: "Discover how sustainable organic farming practices are revolutionizing Bangladesh’s agriculture sector and increasing long-term productivity.",
            aos: "fade-up",
            link: "https://www.ceatspecialty.com/gb/blog/technology/whats-the-outlook-for-organic-farming-in-the-future"
        },
        {
            id: 2,
            icon: <FaTractor className="text-green-600 text-4xl mb-4" />,
            title: "Modern Tools Empowering Farmers",
            desc: "From smart irrigation to soil monitoring — explore how technology is changing the way farmers grow and manage crops efficiently.",
            aos: "fade-up",
            link:"https://timesofagriculture.in/modern-agricultural-tools/"
        },
        {
            id: 3,
            icon: <FaWater className="text-green-600 text-4xl mb-4" />,
            title: "Efficient Water Management Techniques",
            desc: "Learn practical ways to save water and improve irrigation systems for healthier crops and a greener environment.",
            aos: "fade-up",
            link:"https://regenx.ag/blog/agricultural-water-management/"
        },
    ];

    return (
        <section
            id="blogs"
            className="py-20 bg-linear-to-b from-white to-green-50"
        >
            <div className="max-w-6xl mx-auto px-6 text-center">
                {/* Header */}
                <div data-aos="fade-down" className="mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">
                        Latest <span className="text-green-600">Agriculture Blogs</span>
                    </h2>
                    <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                        Stay updated with the latest trends, farming tips, and insights to
                        make your agricultural journey more productive and sustainable.
                    </p>
                </div>

                {/* Blog Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogPosts.map((post, i) => (
                        <div
                            key={post.id}
                            data-aos={post.aos}
                            data-aos-delay={i * 150}
                            className="bg-white border border-gray-100 shadow-md hover:shadow-lg rounded-2xl p-6 text-left transition-all duration-300"
                        >
                            <div className="flex flex-col items-start">
                                {post.icon}
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">{post.desc}</p>
                                <a
                                    href={post.link}
                                    className="text-green-600 font-medium hover:text-green-700 transition"
                                >
                                    Read More →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;
