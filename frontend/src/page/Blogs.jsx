import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import { API_BASE_URL } from '../config';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/blogs`);
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const pageTitle = "Recipes & Stories | Chettinad Bites";
  const pageDescription = "Discover the rich culinary heritage of Chettinad through our curated collection of traditional recipes and fascinating food tales.";

  return (
    <div className="min-h-screen pt-32 pb-20 relative z-10 pl-[16vw] pr-[12vw] sm:px-12 md:px-16 lg:pl-[14vw] lg:pr-[8vw] xl:pl-[16vw] xl:pr-[10vw] font-sans">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content="https://chettinad.co.in/blogs" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Helmet>

      <Navbar />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#2a3822] font-serif drop-shadow-lg mb-4">
            Recipes & Stories
          </h1>
          <p className="text-lg text-[#2a3822]/80 max-w-2xl mx-auto drop-shadow-md font-semibold">
            Discover the rich culinary heritage of Chettinad through our curated collection of traditional recipes and fascinating food tales.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-16 h-16 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin"></div>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center bg-[#2a3822]/60 backdrop-blur-md rounded-2xl p-12 border border-[#e7dfd1]/20">
            <p className="text-[#e7dfd1] text-xl font-serif">No stories published yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10">
            {blogs.map((blog) => (
              <Link 
                to={`/blogs/${blog.id}`} 
                key={blog.id}
                className="group flex flex-col border border-[#2a3822]/20 rounded-[32px] overflow-hidden hover:border-[#2a3822]/40 hover:bg-[#2a3822]/5 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={blog.image ? `${API_BASE_URL}${blog.image}` : 'https://via.placeholder.com/400x300?text=No+Image'} 
                    alt={blog.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <p className="text-[#8a3020] text-xs font-bold tracking-widest uppercase mb-3">
                    {new Date(blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                  <h3 className="text-2xl font-serif font-bold text-[#2a3822] mb-3 line-clamp-2 leading-tight group-hover:text-amber-700 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-[#2a3822]/70 mb-6 line-clamp-3 leading-relaxed text-sm font-medium">
                    {(() => {
                      const pTags = [...(blog.content || '').matchAll(/<p[^>]*>(.*?)<\/p>/gi)];
                      if (pTags.length > 0) {
                        return pTags.map(p => p[1].replace(/<[^>]*>?/gm, '').trim()).join(' ');
                      }
                      return (blog.content || '').replace(/<[^>]*>?/gm, '').trim();
                    })()}
                  </p>
                  <div className="mt-auto flex items-center text-[#2a3822] group-hover:text-amber-700 font-bold text-xs tracking-widest uppercase transition-colors">
                    Read Story
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
