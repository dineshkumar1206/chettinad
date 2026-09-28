import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '../../config';

const BlogUpload = () => {
  const [blogs, setBlogs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);

  // Form states
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isUploading, setIsUploading] = useState(false);

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
    }
  };

  const openModalForNew = () => {
    setEditId(null);
    setImage(null);
    setImagePreview(null);
    setTitle('');
    setContent('');
    setIsModalOpen(true);
  };

  const openModalForEdit = (blog) => {
    setEditId(blog.id);
    setImagePreview(blog.image ? `${API_BASE_URL}${blog.image}` : null);
    setImage(null);
    setTitle(blog.title);
    setContent(blog.content);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        const token = localStorage.getItem('adminToken');
        await fetch(`${API_BASE_URL}/api/blogs/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setBlogs(blogs.filter(b => b.id !== id));
      } catch (error) {
        console.error('Error deleting blog:', error);
      }
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsUploading(true);

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) {
      formData.append('image', image);
    }

    try {
      const url = editId 
        ? `${API_BASE_URL}/api/blogs/${editId}`
        : `${API_BASE_URL}/api/blogs`;
      
      const method = editId ? 'PUT' : 'POST';
      const token = localStorage.getItem('adminToken');

      const response = await fetch(url, {
        method,
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });
      
      if (response.ok) {
        fetchBlogs();
        setIsModalOpen(false);
      } else {
        console.error('Error saving blog');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="w-full h-full relative">
      {/* Header section */}
      <div className="flex justify-between items-center mb-8 border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-3xl font-bold font-serif text-[#2a3822]">Manage Blogs</h2>
          <p className="text-slate-500 mt-1 text-sm">View, edit, and publish your recipes and stories.</p>
        </div>
        <button 
          onClick={openModalForNew}
          className="bg-[#8a3020] hover:bg-[#6b2518] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-md flex items-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add New Post
        </button>
      </div>

      {/* Blog List Grid */}
      {blogs.length === 0 ? (
        <div className="text-center py-20 bg-white/50 backdrop-blur-sm rounded-xl border border-dashed border-slate-300">
          <svg className="w-16 h-16 mx-auto text-slate-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
          </svg>
          <h3 className="text-xl font-serif text-[#2a3822] mb-2">No Blogs Yet</h3>
          <p className="text-slate-500">Click the "Add New Post" button to create your first blog.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden group hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={blog.image ? `${API_BASE_URL}${blog.image}` : 'https://via.placeholder.com/400x300?text=No+Image'} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-xl font-serif font-bold text-[#8a3020] mb-2 line-clamp-2">{blog.title}</h3>
                <p className="text-sm text-slate-600 mb-4 line-clamp-3 font-sans whitespace-pre-line">{blog.content}</p>
                <div className="mt-auto flex gap-3 pt-4 border-t border-slate-100">
                  <button 
                    onClick={() => openModalForEdit(blog)}
                    className="flex-1 flex justify-center items-center py-2 text-sm font-medium text-amber-700 bg-amber-50 rounded hover:bg-amber-100 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(blog.id)}
                    className="flex-1 flex justify-center items-center py-2 text-sm font-medium text-red-600 bg-red-50 rounded hover:bg-red-100 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm overflow-y-auto">
          <div className="bg-[#e7dfd1] rounded-2xl w-full max-w-3xl my-8 relative shadow-2xl border border-[#d8cdb8] overflow-hidden">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-[#d8cdb8]/50 bg-white/40">
              <h2 className="text-2xl font-serif font-bold text-[#2a3822]">
                {editId ? 'Edit Blog Post' : 'Create New Post'}
              </h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-[#8a3020] hover:bg-[#8a3020]/10 p-2 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSave} className="p-6 md:p-8 max-h-[75vh] overflow-y-auto custom-scrollbar">
              <div className="space-y-6">
                
                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-bold font-serif text-[#2a3822] mb-2 uppercase tracking-wide">
                    Cover Image
                  </label>
                  <div className="flex items-center space-x-6">
                    <div className="shrink-0">
                      {imagePreview ? (
                        <img className="h-24 w-32 object-cover rounded-lg shadow-sm border border-[#d8cdb8]" src={imagePreview} alt="Preview" />
                      ) : (
                        <div className="h-24 w-32 bg-white/50 rounded-lg flex items-center justify-center border-2 border-dashed border-[#d8cdb8] text-slate-400">
                          No image
                        </div>
                      )}
                    </div>
                    <label className="block">
                      <span className="sr-only">Choose profile photo</span>
                      <input type="file" onChange={handleImageChange} accept="image/*" className="block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-[#8a3020] file:text-white
                        hover:file:bg-[#6b2518] file:cursor-pointer file:transition-colors
                      "/>
                    </label>
                  </div>
                </div>

                {/* Title & Content */}
                <div className="p-5 bg-white/40 rounded-xl border border-[#d8cdb8]/50 space-y-4">
                  <div>
                    <label className="block text-sm font-bold font-serif text-[#2a3822] mb-2 uppercase tracking-wide">
                      Post Title
                    </label>
                    <input 
                      type="text" 
                      value={title} 
                      onChange={(e) => setTitle(e.target.value)} 
                      placeholder="e.g. The Secret Spices of Chettinad" 
                      className="w-full px-4 py-3 bg-white border border-[#d8cdb8] rounded-lg focus:ring-2 focus:ring-[#8a3020] focus:border-transparent outline-none font-serif text-lg text-[#2a3822] placeholder:font-sans placeholder:text-sm"
                      required 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold font-serif text-[#2a3822] mb-2 uppercase tracking-wide">
                      Blog Content
                    </label>
                    <textarea 
                      value={content} 
                      onChange={(e) => setContent(e.target.value)} 
                      placeholder="Write your story here..." 
                      rows="10" 
                      className="w-full px-4 py-3 bg-white border border-[#d8cdb8] rounded-lg focus:ring-2 focus:ring-[#8a3020] focus:border-transparent outline-none resize-y text-[#2a3822] font-sans"
                      required 
                    />
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="mt-8 flex justify-end gap-4 pt-4 border-t border-[#d8cdb8]/50">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2.5 rounded-lg text-[#2a3822] font-semibold hover:bg-black/5 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-8 py-2.5 bg-[#2a3822] hover:bg-[#1a2315] text-[#e7dfd1] rounded-lg font-bold font-serif tracking-wide shadow-md transition-colors"
                >
                  {editId ? 'Save Changes' : 'Publish Blog'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogUpload;
