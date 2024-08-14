import React from 'react'
import { Link } from 'react-router-dom'

const dataArr = [
    {
        id: 1,
        title: "Videos",
        pic: "/video.jpg",
        para: "Watch our collection of videos, including documentary-style episodes, interviews, and educational content. Discover the stories and teachings of the Sufi saints who shaped the spiritual landscape of Kashmir.",
        links: "/video"   
    },
    {
        id: 2,
        title: "Podcast",
        pic: "/pod.jpg",
        para: "Tune into our podcast series where we discuss the lives and teachings of the Awliya Allah (RA), share interviews with scholars, and delve into various aspects of Sufism and Kashmiri heritage.",
        links: "/podcast"
    },
    {
        id: 3 ,
        title: "About Us",
        pic: "1.jpg",
        para:"Learn more about Kashmiri Islamic Heritage, our team, and our mission. Discover the vision behind our platform and how we aim to honor and preserve the Islamic heritage of Kashmir.",
        links: "/about"
    }
]

const BottomSection = () => {
  return (
    <section className='mt-10'>
    <h1 className='text-center text-2xl sm:text-4xl font-extrabold py-4'>More About Us</h1>
    <div className="card-container  mt-6 mb-16 px-4 lg:px-16 md:max-w-[1200px]  ms-0 md:ms-32 ">
        {
            dataArr.map((item, index) => (
                <div className="card flex flex-col md:flex-row gap-5 px-4 py-4 border shadow-lg cursor-pointer hover:none sm:hover:translate-x-11 transition-transform md:px-5 md:py-4 mb-3" key={index}>
                    <img src={`${item.pic}`} className='w-full h-72 object-cover' />
                    <div className='card-body '>
                        <h1 className='text-xl md:text-2xl mb-4 font-bold ms-0 md:ms-20'>{item.title}</h1>
                        <p className='px-2 sm:px-4 md:px-20 font-ubuntu text-justify leading-5 md:leading-9'>{item.para}</p>
                        <Link to={`${item.links}`}>
                            <button className='bg-black w-full sm:w-auto ms-0 md:ms-20 text-white px-3 py-1 rounded-md font-bold text-xl mt-4 hover:scale-110 transition-transform'>Learn more</button>
                        </Link>
                    </div>
                </div>
            ))
        }
    </div>
</section>


  )
}

export default BottomSection

