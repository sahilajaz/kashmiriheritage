import React from 'react'

const Hero = () => {
  return (
    <section className='relative mt-[0.2px]'>
        <div className="bg-[url('/1.jpg')] bg-center bg-cover flex justify-center items-center sm:h-[660px] relative top-[64px]">
          <div className="absolute inset-0 bg-black/55 z-10"></div>
          <div className="relative text-center z-20 px-6 md:px-12 lg:px-24">
            <h1 className='text-white text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6 leading-tight drop-shadow-lg'>
              Welcome to Kashmiri Heritage
            </h1>
            <p className='text-white mx-auto max-w-3xl text-justify leading-8 drop-shadow-md'>
              Reviving Kasmair's Islamic and spiritual roots is about reconnecting with Kashmir’s rich cultural and religious heritage. This journey involves embracing the region’s unique blend of Sufi traditions and scholarly contributions, which have shaped its identity. By honoring these traditions and adapting them to modern life, we aim to strengthen community bonds and enrich our spiritual understanding. 
              This revival not only preserves our heritage but also inspires contemporary aspirations, blending the wisdom of the past with the needs of today.
            </p>
          </div>
        </div>
    </section>
  )
}

export default Hero
