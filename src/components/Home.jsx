import React from 'react';
import CountdownTimer from './CountDown';
import icon from "../assets/home-page bike.png"

const Home = () => {
  return (
    <section id='home' className=" min-h-screen flex md:flex-row flex-col justify-between items-center px-9 md:py-11 py-[7rem]">
      <div className="">
        <CountdownTimer />
        <h1 className="md:text-5xl text-4xl  mt-4 font-bold mb-4">Launching New Bike</h1>
        <p className="md:text-xl text-[1rem] mb-6 md:w-[90%] ">Embrace the open road with powerful rides built for any adventure. Whether city streets or rugged trails, let's journey together, one throttle at a time.</p>
        <div className='flex gap-5 items-center'>
          <button className="px-6 py-3 border  bg-black text-white rounded-3xl transition-all hover:duration-300 hover:bg-white hover:text-black font-semibold hover:border hover:border-black">Learn More</button>
          <button className="px-6 py-3 border border-black  bg-white text-black rounded-3xl transition-all hover:duration-300 font-semibold hover:transition-transform hover:scale-105 ">Buy Now</button>
        </div>
      </div>
      <div className='w-full'>
        <img src={icon} alt="bike-img" />
      </div>
    </section>
  );
};

export default Home;
