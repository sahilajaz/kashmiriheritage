import React from 'react'

const Contact = () => {
  return (
    <section className='mt-16  sm:mt-10 w-full lg:mb-80 sm:mb-96 mb-[500px]'>
      <div className="w-full relative">
        <div className='bg-slate-700 w-full h-[30vw] flex flex-col justify-center items-center'>
          <h1 className='text-center text-sm sm:text-4xl font-extrabold text-white'>Contact Us</h1>
          <p className='text-center text-sm sm:text-1xl mt-3 text-white'>Questions, feedback—we're here for it all</p>
        </div>
        <div className="contact-card absolute lg:top-[500px] sm:top-[400px] top-[300px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-full lg:max-w-[800px] max-w-[500px] max-h--[400px] px-4 sm:px-6 md:px-8">
          <form className='flex flex-col gap-6 bg-white p-6 sm:p-8 rounded-lg shadow-lg'>
            <div>
              <label className="block" htmlFor="name">Your name:</label>
              <input  id='name' type="text" placeholder='Enter your name' className='border border-black py-1 px-3 rounded-md w-full'/>
            </div>
            <div>
              <label className="block" htmlFor="email">Your Email:</label>
              <input type="email" placeholder='Enter your email' className='border border-black py-1 px-3 rounded-md w-full' required/>
            </div>
            <div>
              <label className="block" htmlFor="message">Message:</label>
              <textarea id='message' placeholder='Enter your message' required rows="4" className='border border-black py-1 px-3 rounded-md w-full'/>
            </div>
            <button type='submit' className='py-2 text-bold bg-gray-800 text-white border rounded-md text-1xl w-full sm:w-1/4 md:w-1/6 hover:scale-110 transform transition duration-100'>Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
