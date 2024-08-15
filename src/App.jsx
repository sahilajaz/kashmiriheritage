import {  useContext } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom'; 
import { AuthProvider, AuthContext } from './AuthContext'; 
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import BlogsSection from './Components/BlogsSection';
import Blog from './Components/Blog';
import Footer from './Components/Footer';
import About from './Components/About';
import BottomSection from './Components/BottomSection';
import AdminDashboard from './Components/AdminDashboard';
import Login from './Components/Login';
import BlogRead from './Components/BlogRead';
import VideoCompnent from './Components/VideoCompnent'; 
import PodcastSection from './Components/PodcastSection';
import Contact from './Components/Contact';



function App() {
  const { user } = useContext(AuthContext) || {};
  const location = useLocation()

  return (
   
      <main>
        {location.pathname != '/login' && <Navbar />}
        <AuthProvider>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Blog />
              <BottomSection />
            </>
          } />
          <Route path="/blog" element={<BlogsSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogread/:id" element={<BlogRead />} />
          <Route path="/video" element={<VideoCompnent />} /> 
          <Route path="/podcast" element={<PodcastSection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login  />} />
          <Route
            path="/admin"
            element={user ? <AdminDashboard /> : <Navigate to="/login" />}
          />
           <Route path="*" element={<></>} />
        </Routes>
        </AuthProvider>
        {location.pathname !== '/login' && <Footer />}
      </main>
  );
}

export default App;
