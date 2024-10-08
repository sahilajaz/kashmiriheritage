import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore'; 
import { db } from '../firebase';
import {useNavigate} from 'react-router-dom'

const BlogsSection = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const getBlogs = async () => {
      const dataArr = [];
      try {
        const blogRef = collection(db, "blogs");
        const querySnapshot = await getDocs(blogRef);

        if (querySnapshot.empty) {
          console.log("No such data");
        } else {
          querySnapshot.forEach((doc) => {
            dataArr.push({ id: doc.id, data: doc.data() });
          });
        }
        setData(dataArr);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    getBlogs();
  }, []);
 
  const handleClick = (id) => {
     navigate(`/blogread/${id}`)
  }

  return (
    <section className='mt-44 px-4 mb-20'>
   {
    data.length > 0 ? (
      <div className='card-conatianer'>
        <h1 className='text-4xl text-center mb-16 font-extrabold'>Our Blogs</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 md:ms-64 ms-0'>
       {data.map((blog, index) => (
      <div key={index} className='flex w-80 h-80 justify-center   hover:-translate-y-4 transition-transform duration-75'>
        <div className='border shadow-lg flex flex-col items-center px-3 py-4'>
          <img src={`${blog.data.photo}`} className='w-[200px] h-[200px] py-5 px-4' />
          <h1 className='font-extrabold text-sm sm:text-[1.2rem] text-center py-4 px-5'>{blog.data.title}</h1>
          <button className='px-3 py-1 bg-blue-500 text-white border rounded-lg hover:bg-slate-500'
          onClick={()=>handleClick(blog.id)}
          >Read more</button>
        </div>
      </div>
    ))}
  </div>
      </div>
    )
    : <p className='text-center mt-32 text-5xl mb-20 font-extrabold'>loading ...</p>
   } 
</section>



  );
};

export default BlogsSection;
