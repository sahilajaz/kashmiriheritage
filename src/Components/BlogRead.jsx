import {useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore"
import { db } from '../firebase'


const BlogRead = () => {
    const[post , setPost] = useState([])
    const {id} = useParams()

    useEffect(() => {
        const getPostData = async () => {
            const postArr = []
          const postRef = doc(db, "blogs", id);
          const docSnap = await getDoc(postRef);
          if (docSnap.exists()) {
            postArr.push({id:docSnap.id , data:docSnap.data()})
            setPost(postArr)
          } else {
            console.log("No such document!");
          }
        };
      
        getPostData(); 
      
      }, [id]); 

      
      


  return (
    <section className='mt-32 mb-16'>
  <div className='w-full '>
    {post.length > 0 ? (
      post.map((postItem, index) => (
        <div key={index} className=''>
          <h1 className='text-sm sm:text-3xl font-extrabold text-center mb-10 sm:underline'>{postItem.data.title}</h1>
          <div className='w-full h-[800px] flex justify-center mb-10'>
          <img 
            src={postItem.data.photo} 
            alt="Blog Post" 
            className='h-[800px] w-[800px]'
          />
          </div>
          <p className='px-20 text-justify font-ubuntu leading-6 sm:leading-9  sm:tracking-wide'>{postItem.data.body}</p>
        </div>
      ))
    ) : (
      <p className='text-center mt-20 font-extrabold text-4xl'>Loading...</p>
    )}
  </div>
</section>

  )
}

export default BlogRead
