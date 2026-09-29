import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Dashboard/Sidebar';
import BlogUpload from '../../components/Dashboard/BlogUpload';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('blog-upload');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'blog-upload':
        return <BlogUpload />;
      default:
        return <div className="flex items-center justify-center h-full text-slate-400">Select a menu item from the sidebar</div>;
    }
  };

  return (
    <div className="flex h-screen bg-[#f8fafc] font-sans overflow-hidden selection:bg-amber-200 selection:text-amber-900">
      {/* Dynamic Background Elements for Premium Feel */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[50%] rounded-full bg-orange-500/5 blur-[100px] pointer-events-none"></div>

      {/* Sidebar Overlay for Mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Layout */}
      <div className={`fixed inset-y-0 left-0 z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition-transform duration-300 ease-in-out flex-shrink-0`}>
        <Sidebar activeTab={activeTab} setActiveTab={(tab) => {
          setActiveTab(tab);
          setIsSidebarOpen(false); // Close sidebar on mobile after selection
        }} />
      </div>

      {/* Main Content Layout */}
      <div className="flex-1 flex flex-col relative z-10 h-screen overflow-hidden w-full">
        {/* Optional top bar for user profile, search, etc */}
        <header className="h-16 md:h-20 flex items-center justify-between px-4 md:px-10 bg-white/80 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <button 
              className="md:hidden p-2 rounded-xl bg-white border border-slate-200 text-slate-600 shadow-sm hover:bg-slate-50 transition-colors"
              onClick={() => setIsSidebarOpen(true)}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="hidden sm:flex items-center bg-white border border-slate-200 rounded-full px-4 py-2 w-48 md:w-64 shadow-sm focus-within:ring-2 focus-within:ring-amber-500/20 focus-within:border-amber-500 transition-all">
              <svg className="w-4 h-4 text-slate-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none text-sm w-full text-slate-700" />
            </div>
          </div>
          
          <div className="flex items-center space-x-2 md:space-x-6">
            <button className="hidden md:block p-2 rounded-full text-slate-400 hover:text-amber-500 hover:bg-amber-50 transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold shadow-md ring-2 ring-white cursor-pointer transform hover:scale-105 transition-transform text-sm md:text-base">
                A
              </div>
              <button 
                onClick={handleLogout}
                className="flex items-center px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-bold text-[#8a3020] bg-white border border-[#8a3020]/20 hover:bg-[#8a3020] hover:text-white rounded-xl transition-all duration-300 shadow-sm"
              >
                <svg className="w-3 h-3 md:w-4 md:h-4 md:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span className="hidden md:inline">Logout</span>
              </button>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-10 scroll-smooth">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

