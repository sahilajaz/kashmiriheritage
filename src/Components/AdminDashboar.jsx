import React, { useState , useEffect} from 'react';
import { collection, addDoc ,  getDocs} from "firebase/firestore"; 
import { db, storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";


const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('blogs');
  const [blogadata, updateBlogdata] = useState({
    title: '',
    body: '',
    photo: ''
  });
 const[blogs , setBlogs] = useState([])

  useEffect(() => {
    const getAllblogs = async () => {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      const fetchedBlogs = []
      querySnapshot.forEach((doc) => {
        fetchedBlogs.push({ id: doc.id, ...doc.data() })
        // console.log(doc.id, " => ", doc.data());
      })
      setBlogs(fetchedBlogs)
    }
    getAllblogs()
  } , [])


  const handleChange = (event) => {
    const { id, value } = event.target;
    updateBlogdata(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handlePhotoChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);
      try {
        const snapshot = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(snapshot.ref);
        updateBlogdata(prevState => ({
          ...prevState,
          photo: downloadURL
        }));
      } catch (error) {
        console.error("Upload failed", error);
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newBlog = {
      title: blogadata.title,
      body: blogadata.body,
      photo: blogadata.photo
    };

    try {
      await addDoc(collection(db, "blogs"), newBlog);
  
      updateBlogdata({
        title: '',
        body: '',
        photo: ''
      });
    } catch (error) {
      console.error("Error adding blog", error);
    }
  };

  return (
    <section className='p-6 mt-32 py-8'>
      <div className='container mx-auto'>
        <h2 className='text-3xl font-bold mb-4 text-center'>Admin Dashboard</h2>
        <nav className='mb-6'>
          <ul className='flex flex-col sm:flex-row justify-center space-x-0 sm:space-x-4 space-y-2 sm:space-y-0'>
            <li>
              <button
                onClick={() => setActiveTab('blogs')}
                className={`w-full sm:w-auto px-4 py-2 rounded transition-colors ${activeTab === 'blogs' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                Manage Blogs
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('faqs')}
                className={`w-full sm:w-auto px-4 py-2 rounded transition-colors ${activeTab === 'faqs' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                Manage FAQs
              </button>
            </li>
          </ul>
        </nav>

        {activeTab === 'blogs' && (
          <div className='max-w-4xl mx-auto bg-white p-6 border rounded shadow-md'>
            <h3 className='text-2xl font-semibold mb-4'>Add New Blog</h3>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <label className='block text-lg font-medium mb-2' htmlFor='title'>Title:</label>
                <input
                  id='title'
                  type="text"
                  value={blogadata.title}
                  onChange={handleChange}
                  required
                  className='w-full p-2 border border-gray-300 rounded'
                />
              </div>
              <div>
                <label className='block text-lg font-medium mb-2' htmlFor='photo'>Photo:</label>
                <input
                  id='photo'
                  type="file"
                  onChange={handlePhotoChange}
                  className='w-full p-2 border border-gray-300 rounded'
                />
                {blogadata.photo && (
                  <div className='mt-4'>
                    <img
                      src={blogadata.photo}
                      alt="Preview"
                      className='w-32 h-32 object-cover'
                    />
                  </div>
                )}
              </div>
              <div>
                <label className='block text-lg font-medium mb-2' htmlFor='body'>Blog Content:</label>
                <textarea
                  id='body'
                  value={blogadata.body}
                  onChange={handleChange}
                  required
                  className='w-full p-2 border border-gray-300 rounded'
                />
              </div>
              <button
                type="submit"
                className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors'
              >
                Submit
              </button>
            </form>
          </div>
        )}
      

        {activeTab === 'faqs' && (
          <div className='max-w-4xl mx-auto bg-white p-6 border rounded shadow-md'>
            <h3 className='text-2xl font-semibold mb-4'>Manage FAQs</h3>
            <p>This section is for managing FAQs. You can add, edit, or delete FAQs here.</p>
          </div>
        )}
      </div>
      <div className='mt-10 py-10 flex flex-col justify-center items-center w-full'>
     {activeTab === 'blogs' ? <h1 className='text-3xl font-extrabold mb-6'>Blogs</h1> : <h1>FAQ's</h1>}
      {
      activeTab === 'blogs' ? (
      <div className="container-content w-full flex flex-col items-center">
      {blogs.map((item, index) => (
      <div className="container flex items-center gap-4 w-full max-w-md border-b py-3 border-gray-300 border shadow-lg" key={index}>
      <img src={`${item.photo}`} className='h-[80px] w-[80px] object-cover rounded-md ms-4' alt={item.title} />
      <div className='flex-1 flex justify-between items-center px-2'>
        <h2 className='text-lg font-semibold ms-5'>{item.title}</h2>
        <button className='bg-red-500 text-white px-4 py-1 text-sm border rounded-md hover:bg-red-700 transition-colors'>Delete</button>
      </div>
    </div>
      ))}
     </div>
     )
     : ""    
    }
   </div>
    </section>
  );
};

export default AdminDashboard;
