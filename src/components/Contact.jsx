import { useState } from 'react';
// import emailjs from 'emailjs-com';
import Wicon from "../assets/WhatsappIcon.png"
import icon from "../assets/ContactImg.png"

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);
  
    // const sendEmail = (e) => {
    //   e.preventDefault();
    //   setIsSubmitting(true);
    //   emailjs
    //     .sendForm(
    //       process.env.REACT_APP_SERVICE_ID,
    //       process.env.REACT_APP_TEMPLATE_ID,
    //       e.target,
    //       process.env.REACT_APP_PUBLIC_KEY
    //     )
    //     .then(
    //       (result) => {
    //         setStateMessage('Message sent!');
    //         setIsSubmitting(false);
    //         setTimeout(() => {
    //           setStateMessage(null);
    //         }, 5000);
    //       },
    //       (error) => {
    //         setStateMessage('Something went wrong, please try again later');
    //         setIsSubmitting(false);
    //         setTimeout(() => {
    //           setStateMessage(null);
    //         }, 5000);
    //       }
    //     );
    //   e.target.reset();
    // };
  
  
  
    return (
      <section id='contact' className='py-16 mt-5 px-6'>
        <h2 className="text-4xl font-bold md:my-6 my-0 pb-5 text-center">Contact Us</h2>
        <div className=" md:px-8  gap-9 flex flex-col lg:flex-row justify-around items-center" >
          <div className="w-full lg:w-1/2">
  
            <form className="flex flex-col space-y-4">
              <div className='flex flex-col gap-5'>
                <input
                  type="text"
                  placeholder='Name'
                  name="user_name"
                  className="mt-1 bg-transparent text-black font-semibold hover:border-black block w-full p-2 border border-black focus:border-black focus:outline-none rounded-md shadow-sm placeholder-custom"
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder='Email'
                  className="mt-1 bg-transparent text-black font-semibold hover:border-black focus:border-black focus:outline-none block w-full px-2 py-3 border border-black rounded-md shadow-sm placeholder-custom"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder='Your message'
                  rows={5}
                  className="mt-2 bg-transparent text-black font-semibold hover:border-black focus:border-black focus:outline-none block w-full p-2 border border-black rounded-md shadow-sm placeholder-custom"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                //   className="px-4 font-semibold border border-black py-2 bg-transparent rounded-[20px] hover:bg-black hover:duration-500 transition ease-in"
                className='mt-4 border flex px-4 bg-black text-white py-2 rounded-3xl transition-transform duration-300 hover:scale-105  font-semibold hover:border hover:border-black'
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                <div>
                 
                </div>
              </div>
              {stateMessage && <p className="text-center text-sm mt-4">{stateMessage}</p>}
            </form>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <img src={icon} alt="contact_us" className="w-full h-auto" />
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactForm;