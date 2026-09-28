import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Home from './page/Home'
import Dashboard from './page/Dashboard/Dashboard'
import Login from './page/Dashboard/Login'
import Blogs from './page/Blogs'
import BlogDetail from './page/BlogDetail'
import SmoothScroll from './components/SmoothScroll'
import './App.css'

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('adminToken');
  return token ? children : <Navigate to="/admin/login" />;
};

function App() {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard' || location.pathname.startsWith('/dashboard/');

  const appContent = (
    <div className={isDashboard ? "fixed inset-0 w-full h-full overflow-hidden bg-[#f8fafc]" : "w-full min-h-screen bg-cover bg-center bg-no-repeat bg-fixed bg-[url('/images/Chettinad-bg-mobile.webp')] md:bg-[url('/images/Chettinad-bg-desktop.webp')]"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
      </Routes>
    </div>
  );

  return isDashboard ? appContent : <SmoothScroll>{appContent}</SmoothScroll>;
}

export default App
