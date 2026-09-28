import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import { API_BASE_URL } from '../config';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogDetails();
  }, [id]);

  const fetchBlogDetails = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/blogs`);
      const data = await response.json();
      const foundBlog = data.find(b => b.id.toString() === id);
      setBlog(foundBlog);
    } catch (error) {
      console.error('Error fetching blog details:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="w-16 h-16 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4 text-center">
        <Helmet>
          <title>Story Not Found | Chettinad Bites</title>
        </Helmet>
        <Navbar />
        <div className="max-w-2xl mx-auto bg-[#2a3822]/80 backdrop-blur-md rounded-2xl p-12 border border-[#e7dfd1]/20 mt-10">
          <h2 className="text-3xl font-serif text-[#e7dfd1] mb-4">Story Not Found</h2>
          <Link to="/blogs" className="text-amber-400 hover:text-amber-300 underline underline-offset-4">Return to Recipes & Stories</Link>
        </div>
      </div>
    );
  }

  // Generate plain text excerpt for meta description
  const excerpt = blog.content ? blog.content.substring(0, 160).replace(/\n/g, ' ') + '...' : 'Read our latest story about Chettinad culture and cuisine.';
  const imageUrl = blog.image ? `https://chettinad.co.in${blog.image}` : 'https://chettinad.co.in/images/hero-1.webp';

  return (
    <div className="min-h-screen pt-32 pb-20 relative z-10 px-4 sm:px-8 md:px-16 lg:pl-[14vw] lg:pr-[8vw] xl:pl-[16vw] xl:pr-[10vw] font-sans">
      <Helmet>
        <title>{blog.title} | Chettinad Bites</title>
        <meta name="description" content={excerpt} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={excerpt} />
        <meta property="og:image" content={imageUrl} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={excerpt} />
        <meta name="twitter:image" content={imageUrl} />
      </Helmet>

      <Navbar />
      
      <div className="max-w-7xl mx-auto">
        <Link to="/blogs" className="inline-flex items-center text-[#2a3822] hover:text-amber-700 mb-8 transition-colors font-bold tracking-wide drop-shadow-sm">
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Stories
        </Link>

        <article className="w-full">
          {/* Hero Image */}
          <div className="w-full h-64 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-xl border-4 border-white/20 mb-10">
            <img 
              src={blog.image ? `${API_BASE_URL}${blog.image}` : 'https://via.placeholder.com/1200x600?text=No+Image'} 
              alt={blog.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Heading and Content area */}
          <div className="w-full text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2a3822] font-serif drop-shadow-lg leading-tight mb-4">
              {blog.title}
            </h1>
            <p className="text-[#2a3822]/70 font-semibold tracking-widest uppercase text-sm mb-10 font-sans">
              Published {new Date(blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-lg prose-amber max-w-none text-[#2a3822] font-serif leading-relaxed whitespace-pre-wrap">
            {blog.content}
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogDetail;
