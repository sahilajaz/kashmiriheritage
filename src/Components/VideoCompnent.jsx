import {useState , useEffect} from 'react'
import { collection, getDocs } from "firebase/firestore";
import {db} from '../firebase'

const VideoCompnent = () => {
const[videoData , setVideoData] = useState([])

useEffect(() => {
  const getVideoData = async () => {
    try {
      const vidoeArr = []
      const snapShot = await getDocs(collection(db , "videos"))
      snapShot.forEach((doc) => {
        vidoeArr.push({id:doc.id , data: doc.data()})
      })
      setVideoData(vidoeArr)
    }
    catch(e) {
      console.error(e)
    }
  }
  getVideoData()
}, [])



  return (
    <section className='mt-32'>
  <div className="card-container px-4">
    <h1 className='text-center font-extrabold text-4xl'>Our Videos</h1>
    {
      videoData.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
      {videoData.map((el, id) => (
        <div className='card bg-white shadow-lg rounded-lg overflow-hidden px-5' key={id}>
          <div className="pic-container h-[40vh] sm:h-[50vh] lg:h-[40vh] overflow-hidden">
            <img src={`${el.data.photo}`} alt={el.data.title} className='w-full h-full object-cover'/>
          </div>
          <div className='p-4'>
            <h2 className='text-lg sm:text-xl font-semibold'>{el.data.title}</h2>
            <p className='mt-2 text-gray-700 text-sm sm:text-base text-justify font-ubuntu'>{el.data.description}</p>
            <a href={`${el.data.link}`} target="_blank" rel="noopener noreferrer">
              <button className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 '>
                Watch Now
              </button>
            </a>
          </div>
        </div>
      ))}
    </div>
      )
      : (
        <p className='text-center mt-32 text-5xl mb-20 font-extrabold'>loading ...</p>
      )
    }
  </div>
</section>

  )
}

export default VideoCompnent
