import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import BlogsSection from "./Components/BlogsSection";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";
import About from "./Components/About";
import BottomSection from "./Components/BottomSection";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./Components/AdminDashboar";
import Login from "./Components/Login";
import { useState } from "react";
import BlogRead from "./Components/BlogRead";

function App() {
  const[showNav , setShowNav] = useState(true)
   
 

  return (
    <main>
      {
        showNav && (
          <Navbar />
        )
      }
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Blog />
            <BottomSection/> 
          </>
        } />
        <Route path="/blog" element={<BlogsSection />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/blogread/:id" element={<BlogRead/>}/>
        <Route path="/login" element={<Login setShowNav={setShowNav}/>}/>
      </Routes>
      {
        showNav && (
          <Footer/>
        )
      }
    </main>
  );
}

export default App;
