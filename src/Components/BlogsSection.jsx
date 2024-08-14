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
      <div key={index} className='flex justify-center   hover:-translate-y-4 transition-transform duration-75'>
        <div className='border shadow-lg flex flex-col items-center px-3 py-4'>
          <img src={`${blog.data.photo}`} className='w-[200px] h-[200px] py-5' />
          <h1 className='font-bold text-sm text-center py-4'>{blog.data.title}</h1>
          <button className='px-3 py-1 bg-blue-500 text-white border rounded-lg hover:bg-slate-500'
          onClick={()=>handleClick(blog.id)}
          >Read more</button>
        </div>
      </div>
    ))}
  </div>
      </div>
    )
    : <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto h-52">
    <div className="animate-pulse flex space-x-4">
      <div className="flex-1 space-y-6 py-1">
        <div className="h-2 bg-slate-700 rounded"></div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-slate-700 rounded col-span-2"></div>
            <div className="h-2 bg-slate-700 rounded col-span-1"></div>
          </div>
          <div className="h-2 bg-slate-700 rounded"></div>
        </div>
      </div>
    </div>
  </div>
   } 
</section>



  );
};

export default BlogsSection;
