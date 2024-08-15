import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const Contact = () => {
  const form = useRef();
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('success'); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iivn1gz', 'template_frulqhz', form.current, 'ud7Fl2P9ycg_sEPiR')
      .then((result) => {
          setAlertMessage('Email sent successfully!');
          setAlertSeverity('success');
          setAlertOpen(true);
          form.current.reset();
      }, (error) => {
          console.error('Failed to send email:', error.text);
          setAlertMessage('Failed to send email.');
          setAlertSeverity('error');
          setAlertOpen(true);
      });
  };

  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  return (
    <section className='mt-16 sm:mt-10 w-full lg:mb-80 sm:mb-96 mb-[500px]'>
      <div className="w-full relative">
        <div className='bg-slate-700 w-full h-[30vw] flex flex-col justify-center items-center'>
          <h1 className='text-center text-sm sm:text-4xl font-extrabold text-white'>Contact Us</h1>
          <p className='text-center text-sm sm:text-1xl mt-3 text-white'>Questions, feedback—we're here for it all</p>
        </div>
        <div className="contact-card absolute lg:top-[500px] sm:top-[400px] top-[300px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-full lg:max-w-[800px] max-w-[500px] px-4 sm:px-6 md:px-8">
          <form className='flex flex-col gap-6 bg-white p-6 sm:p-8 rounded-lg shadow-lg' ref={form} onSubmit={sendEmail}>
            <div>
              <label className="block" htmlFor="name">Your name:</label>
              <input id='name' name='user_name' type="text" placeholder='Enter your name' className='border border-black py-1 px-3 rounded-md w-full' required />
            </div>
            <div>
              <label className="block" htmlFor="email">Your Email:</label>
              <input id='email' name='user_email' type="email" placeholder='Enter your email' className='border border-black py-1 px-3 rounded-md w-full' required />
            </div>
            <div>
              <label className="block" htmlFor="message">Message:</label>
              <textarea id='message' name='message' placeholder='Enter your message' required rows="4" className='border border-black py-1 px-3 rounded-md w-full' />
            </div>
            <button type='submit' className='py-2 text-bold bg-gray-800 text-white border rounded-md text-1xl w-full sm:w-1/4 md:w-1/6 hover:scale-110 transform transition duration-100'>
              Send
            </button>
          </form>
        </div>
      </div>

      <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity={alertSeverity}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </section>
  );
};

export default Contact;
