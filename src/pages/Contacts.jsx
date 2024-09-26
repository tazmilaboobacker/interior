import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Footer from '../components/Footer';

const Contacts = () => {
  const form = useRef();
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_yco6fyk', 'template_13xyani', form.current, 'w7alR9oqnscYDD9O2')
      .then(
        () => {
          setMessage('Message sent successfully ✅');
          setTimeout(() => {
            setMessage('');
          }, 5000);
          form.current.reset();
        },
        () => {
          setMessage('Message not sent (service error) ❌');
        }
      );
  };

  return (
    <>
      <div
        className="flex flex-col items-center justify-center h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://watermark.lovepik.com/photo/40019/4287.jpg_wh1200.jpg)",
          height: '70vh',
        }}
      >
        {/* Card with blur background */}
        <div className="card w-[400px] bg-black/5 backdrop-blur-lg border border-gray-300 bg-base-100 mt-10 mb-10 p-6 flex items-center justify-center shadow-lg" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <form ref={form} onSubmit={sendEmail} className="space-y-4 w-[90%] flex flex-col items-center justify-center" id="contact-form">
            <div className="space-y-4 w-[90%]">
              <h1 className='text-3xl text-white font-bold text-center mb-4 underline'>Get in touch</h1>
              <input
                type="text"
                name="user_name"
                required
                placeholder="Enter your name"
                className="w-[100%] p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <br />
              <input
                type="email"
                name="user_email"
                required
                placeholder="Enter your email"
                className="w-[100%] p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <textarea
              name="user_project"
              required
              placeholder="Enter your message"
              className="w-[90%] p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <p className="text-sm text-red-500" id="contact-message">
              {message}
            </p>

            <button
              type="submit"
              className="w-[50%] py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contacts;

