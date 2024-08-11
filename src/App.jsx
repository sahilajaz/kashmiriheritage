import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import BlogsSection from "./Components/BlogsSection";
import Blog from "./Components/Blog";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Blog /> 
          </>
        } />
        <Route path="/blogs" element={<BlogsSection />} />
      </Routes>
    </main>
  );
}

export default App;
