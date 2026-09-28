import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-64 bg-[#1e293b] text-slate-300 flex flex-col h-screen shadow-2xl transition-all duration-300 border-r border-slate-800">
      <div className="p-6 border-b border-slate-700/50">
        <h2 className="text-2xl font-bold text-white tracking-wider font-serif bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-500">
          Admin Portal
        </h2>
        <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest">Chettinad Bites</p>
      </div>
      
      <div className="flex-1 py-6 px-4">
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => setActiveTab('blog-upload')}
              className={`w-full flex items-center px-4 py-3 rounded-xl transition-all duration-300 group ${
                activeTab === 'blog-upload'
                  ? 'bg-gradient-to-r from-amber-500/20 to-amber-600/10 text-amber-400 border border-amber-500/30 shadow-lg shadow-amber-500/5'
                  : 'hover:bg-slate-800/50 hover:text-white hover:pl-6'
              }`}
            >
              <svg className={`w-5 h-5 mr-3 transition-colors ${activeTab === 'blog-upload' ? 'text-amber-400' : 'text-slate-500 group-hover:text-amber-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              <span className="font-medium">Blog Upload</span>
            </button>
          </li>
          {/* Future menus can go here */}
        </ul>
      </div>

      <div className="p-4 mt-auto border-t border-slate-700/50">
        <Link 
          to="/" 
          className="flex items-center w-full px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-all duration-300 group"
        >
          <svg className="w-5 h-5 mr-3 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Main Site
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
