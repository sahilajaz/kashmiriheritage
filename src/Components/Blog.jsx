import React from 'react';
import { Link } from 'react-router-dom';

const blogArray = [
    {
    id: "1",
    pic: "/sultan.jpeg",
    title: "The Great Sultan of the Ottomans",
    para: "Sultan Abdul Hamid II, a pivotal figure in the late Ottoman Empire, stands as a testament to an era marked by both grandeur and challenge. Ruling from 1876 to 1909, his reign was characterized by a complex interplay of reform and resistance. Amidst a backdrop of political upheaval and social transformation, Abdul Hamid II navigated the empire through turbulent waters, seeking to preserve its integrity and influence. His governance was marked by ambitious modernization efforts, yet faced with increasing internal and external pressures, leading to a reign that remains both revered and controversial. His legacy endures as a reflection of the Ottoman Empire’s struggle to balance tradition with the winds of change."
   },
   {
    id: "1",
    pic: "/sultan.jpeg", 
    title: "The Great Sultan of the Ottomans",
    para: "Sultan Abdul Hamid II, a pivotal figure in the late Ottoman Empire, stands as a testament to an era marked by both grandeur and challenge. Ruling from 1876 to 1909, his reign was characterized by a complex interplay of reform and resistance. Amidst a backdrop of political upheaval and social transformation, Abdul Hamid II navigated the empire through turbulent waters, seeking to preserve its integrity and influence. His governance was marked by ambitious modernization efforts, yet faced with increasing internal and external pressures, leading to a reign that remains both revered and controversial. His legacy endures as a reflection of the Ottoman Empire’s struggle to balance tradition with the winds of change."
   },{
    id: "1",
    pic: "/sultan.jpeg", 
    title: "The Great Sultan of the Ottomans",
    para: "Sultan Abdul Hamid II, a pivotal figure in the late Ottoman Empire, stands as a testament to an era marked by both grandeur and challenge. Ruling from 1876 to 1909, his reign was characterized by a complex interplay of reform and resistance. Amidst a backdrop of political upheaval and social transformation, Abdul Hamid II navigated the empire through turbulent waters, seeking to preserve its integrity and influence. His governance was marked by ambitious modernization efforts, yet faced with increasing internal and external pressures, leading to a reign that remains both revered and controversial. His legacy endures as a reflection of the Ottoman Empire’s struggle to balance tradition with the winds of change."
   }
];

const Blog = () => {
  return (
    <section className='mt-20 px-4 sm:px-16'>
      <h1 className='text-center text-1xl sm:text-5xl py-7  font-bold'>Blogs</h1>
    <div className="flex flex-wrap gap-10 border py-5"> 
      {
        blogArray.map((blog, index) => (
          <div key={index} className="flex flex-col lg:flex-row items-center gap-6 px-4 sm:px-16 py-4 shadow-xl w-full sm:w-auto"> 
            <img src={blog.pic} alt={blog.title} className="w-full sm:w-1/2 max-w-[400px] rounded-md" /> 
            <div className="flex flex-col max-w-full"> 
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
