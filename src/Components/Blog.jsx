import React from 'react';
import { Link } from 'react-router-dom';

const blogArray = [
  {
    id: "1",
    pic: "/blogpic.jpg",
    title: "Unveiling the Rich Tapestry of Kashmiri Islamic Heritage",
    para: "Explore the intricate tapestry of Kashmiri Islamic heritage, delving into its deep historical roots, spiritual teachings, and vibrant cultural practices. Our blog offers an insightful journey through the rich traditions that have shaped Kashmiri society over the centuries, providing readers with a comprehensive understanding of the region's unique contributions to Islamic culture. Discover how these traditions continue to influence contemporary issues and inspire a sense of identity and community among Kashmiris today."
  },

   ];

const Blog = () => {
  return (
    <section className='mt-20 px-4 sm:px-16'>
    <h1 className='text-center text-1xl sm:text-5xl py-7 font-bold'>Blogs</h1>
    <div className="flex flex-wrap gap-10  py-5"> 
      {
        blogArray.map((blog, index) => (
          <div key={index} className="flex flex-col  lg:flex-row  gap-7 px-4 sm:px-16 py-4 shadow-lg w-full sm:w-auto"> 
            <img src={blog.pic} alt={blog.title} className="w-full sm:w-1/2 max-w-[400px] rounded-md" /> 
            <div className="flex flex-col gap-3 max-w-full"> 
              <h1 className='font-extrabold text-sm sm:text-3xl capitalize mb-3'>{blog.title}</h1>
              <p className='text-justify leading-7 font-ubuntu sm:text-1xl'>{blog.para}</p>
              <Link to="/blogs">
                <button className='bg-black w-32 text-white px-3 py-1 rounded-md font-bold text-xl mt-4 hover:scale-110 transition-transform'>Read more</button>
              </Link>
            </div>
          </div>
        ))
      }
    </div>
  </section>
  
  
  

  )
}

export default Blog;
