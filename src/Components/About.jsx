import React from 'react';
import Carousel from 'react-material-ui-carousel';

const carouselData = [
    { id: 1, pic: "/c1.jpg" },
    { id: 2, pic: "/newcs.jpg" },
    { id: 3, pic: "/c3.jpg" },
    { id: 4, pic: "/c4.jpg" },
    { id: 5, pic: "/c5.jpg" },
    { id: 6, pic: "/newcs2.jpg" }
];

const aboutUsArray = [
    {
        id:1,
        title:"Welcome to Kashmiri Islamic Heritage",
        para: "At Kashmiri Islamic Heritage, we are dedicated to preserving and honoring the rich Islamic heritage of Kashmir. Our platform offers a profound exploration of the lives and teachings of the Awliya Allah (RA), who have profoundly shaped the spiritual and cultural landscape of our region."
    },
    {
        id: 2 ,
        title: "Discover Our Mission",
        para: "Our mission is to illuminate the legacy of Kashmir’s esteemed Sufi saints and their significant contributions to Islamic spirituality, culture, and social reform. Through our engaging content—including insightful videos, in-depth articles, and historical narratives—we aim to inspire a deeper appreciation and understanding of our sacred traditions."
    },
    {
        id: 3,
        title:"Explore Our Content",
        para: 'Dive into our curated series, "The Arrival of Islam in the Valley of Kashmir", and more, featuring a rich collection of episodes that highlight the timeless wisdom and spiritual practices of the Awliya Allah (RA). Our content is designed to resonate with both those familiar with Sufi teachings and those new to this profound tradition.'
    },
    {
        id: 4,
        title: "Join Our Community",
        para: "Connect with us on social media and be part of a community committed to celebrating and preserving the essence of Kashmiri Islamic heritage. Engage with our posts, share your thoughts, and participate in our events to contribute to the ongoing dialogue about our cherished traditions.Welcome to a journey of spiritual discovery and cultural revival. Together, let’s preserve and celebrate the heritage that defines us."
    }
]

const About = () => {
    return (
        <section className='mt-2 py-10 mb-20'>
            <div className="carousel-container w-full h-[900px]">
                <Carousel>
                    {carouselData.map((item) => (
                        <div key={item.id} className='w-full h-[60vh] sm:h-[900px]'>
                            <div className="absolute inset-0 bg-black/30"></div>
                            <img src={item.pic} alt={`Carousel image ${item.id}`} className='w-[100vh] sm:w-full h-[60vh] sm:h-[900px] mt-9 sm:mt-0' />
                        </div>
                    ))}
                </Carousel>
            </div>
            <div className="about-container mt-1 sm:mt-56 px-4">
           <h1 className='text-center text-4xl mb-6 font-extrabold'>About Us</h1>
            {
                aboutUsArray.map((item , index) => (
                 <div className='max-w-5xl mx-auto p-6 mb-4 bg-white shadow-lg rounded-lg border border-gray-200' key={index}>
                 <h2 className='text-center text-1xl sm:text-2xl font-bold mb-4'>{item.title}</h2>
                 <p className='text-justify leading-relaxed font-ubuntu'>{item.para}</p>
                 </div>
                ))
            }
        </div>
         </section>
    );
}

export default About;


