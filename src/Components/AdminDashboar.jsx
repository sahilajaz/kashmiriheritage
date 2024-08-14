import React, { useState, useEffect } from 'react';
import { collection, addDoc, onSnapshot, doc, deleteDoc , getDoc} from "firebase/firestore"; 
import { db, storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL , deleteObject } from "firebase/storage";
import ManageVideo from './ManageVideo';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('blogs');
  const [blogData, updateBlogData] = useState({ title: '', body: '', photo: '' });
  const [videoData, setVideoData] = useState({ title: '', photo: '', description: '', link: '' });
  const [blogs, setBlogs] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "blogs"), (snapshot) => {
      let list = [];
      snapshot.docs.forEach(doc => list.push({ id: doc.id, ...doc.data() }));
      setBlogs(list);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "videos"), (snapshot) => {
      let list = [];
      snapshot.docs.forEach(doc => list.push({ id: doc.id, ...doc.data() }));
      setVideos(list);
    });
    return () => unsub();
  }, []);


  const handleChange = (event) => {
    const { id, value } = event.target;
    updateBlogData(prevState => ({ ...prevState, [id]: value }));
  };


  const handleVideoChange = (event) => {
    const { id, value } = event.target;
    setVideoData(prevState => ({ ...prevState, [id]: value }));
  };


  const handlePhotoChange = async (event, type) => {
    const file = event.target.files[0];
    if (file) {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);
      try {
        const snapshot = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(snapshot.ref);
        if (type === 'blog') {
          updateBlogData(prevState => ({ ...prevState, photo: downloadURL }));
        } else {
          setVideoData(prevState => ({ ...prevState, photo: downloadURL }));
        }
      } catch (error) {
        console.error("Upload failed", error);
      }
    }
  };
  

  const handleSubmit = async (event, type) => {
    event.preventDefault();
    try {
      if (type === 'blog') {
        await addDoc(collection(db, "blogs"), blogData);
        updateBlogData({ title: '', body: '', photo: '' });
      } else {
        await addDoc(collection(db, "videos"), videoData);
        setVideoData({ title: '', photo: '', description: '', link: '' });
      }
    } catch (error) {
      console.error("Error adding document", error);
    }
  };


  const deleteById = async (id, type) => {
    try {
      const docRef = doc(db, type === 'blog' ? 'blogs' : 'videos', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const docData = docSnap.data();
        const photoURL = docData.photo;
  
        if (photoURL) {
          const photoRef = ref(storage, photoURL);
          await deleteObject(photoRef);
        }
      }
      await deleteDoc(docRef);
    } catch (error) {
      console.error("Error deleting document or photo", error);
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
                onClick={() => setActiveTab('videos')}
                className={`w-full sm:w-auto px-4 py-2 rounded transition-colors ${activeTab === 'videos' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                Manage Videos
              </button>
            </li>
          </ul>
        </nav>

        {activeTab === 'blogs' && (
          <div className='max-w-4xl mx-auto bg-white p-6 border rounded shadow-md'>
            <h3 className='text-2xl font-semibold mb-4'>Add New Blog</h3>
            <form onSubmit={(e) => handleSubmit(e, 'blog')} className='space-y-4'>
              <div>
                <label className='block text-lg font-medium mb-2' htmlFor='title'>Title:</label>
                <input
                  id='title'
                  type="text"
                  value={blogData.title}
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
                  onChange={(e) => handlePhotoChange(e, 'blog')}
                  className='w-full p-2 border border-gray-300 rounded'
                />
                {blogData.photo && (
                  <div className='mt-4'>
                    <img
                      src={blogData.photo}
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
                  value={blogData.body}
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

        {activeTab === 'videos' && (
          <div className='max-w-4xl mx-auto bg-white p-6 border rounded shadow-md'>
            <h3 className='text-2xl font-semibold mb-4'>Manage Videos</h3>
            <ManageVideo handleSubmit={handleSubmit} handleVideoChange={handleVideoChange} handlePhotoChange={handlePhotoChange} videoData={videoData} />
          </div>
        )}
      </div>
      <div className='mt-10 py-10 flex flex-col justify-center items-center w-full'>
        {activeTab === 'blogs' ? <h1 className='text-3xl font-extrabold mb-6'>Blogs</h1> : <h1 className='text-3xl font-extrabold mb-6'>Videos</h1>}
        {activeTab === 'blogs' ? (
          <div className="container-content w-full flex flex-col items-center">
            {blogs.map((item, index) => (
              <div className="container flex items-center gap-4 w-full max-w-md border-b py-3 border-gray-300 border shadow-lg mb-7" key={index}>
                <img src={item.photo} className='h-[80px] w-[80px] object-cover rounded-md ms-6 py-1' alt={item.title} />
                <div className='flex-1 flex justify-between items-center px-5 py-1 gap-10'>
                  <h2 className='text-sm font-semibold ms-5'>{item.title}</h2>
                  <button className='bg-red-500 text-white px-4 py-1 text-sm border rounded-md hover:bg-red-700 transition-colors' onClick={() => deleteById(item.id, 'blog')}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="container-content w-full flex flex-col items-center">
            {videos.map((item, index) => (
              <div className="container flex items-center gap-4 w-full max-w-md border-b py-3 border-gray-300 border shadow-lg mb-7" key={index}>
                <img src={item.photo} className='h-[80px] w-[80px] object-cover rounded-md ms-6 py-1' alt={item.title} />
                <div className='flex-1 flex justify-between items-center px-5 py-1'>
                  <h2 className='text-sm font-semibold ms-5 gap-10'>{item.title}</h2>
                  <button className='bg-red-500 text-white px-4 py-1 text-sm border rounded-md hover:bg-red-700 transition-colors' onClick={() => deleteById(item.id, 'video')}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default AdminDashboard;
