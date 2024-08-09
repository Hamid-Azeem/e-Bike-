import React, { useContext, useState } from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { CartContext } from './CartContext'; 

import icon1 from "../assets/Product-images/CBR1000.png"
import icon2 from "../assets/Product-images/daito675.png"
import icon3 from "../assets/Product-images/Ninja300.png"
import icon4 from "../assets/Product-images/NinjaH2.png"
import icon5 from "../assets/Product-images/R600.png"
import icon6 from "../assets/Product-images/YZF.png"

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

AOS.init();

const bikes = [
  {
    id: 1,
    img: icon1,
    bikeName: "Honda CBR 1000RR",
    category: "Sport, Twin Disc",
    price: 13000,
    originalPrice: 16999, 
    discount: "30%"
  },
  {
    id: 2,
    img: icon2,
    bikeName: "Daito 675R",
    category: "Sport, Twin Disc",
    price: 6500,
    originalPrice: 7999, 
    discount: "30%"
  },
  {
    id: 3,
    img: icon3,
    bikeName: "Kawasaki Ninja 300",
    category: "Sport, Twin Disc",
    price: 4000,
    originalPrice: 5499, 
    discount: "30%"
  },
  {
    id: 4,
    img: icon4,
    bikeName: "Kawasaki Ninja H2",
    category: "Sport, Twin Disc",
    price: 25000,
    originalPrice: 28999, 
    discount: "30%"
  },
  {
    id: 5,
    img: icon5,
    bikeName: "Suzuki GSX-R600",
    category: "Sport, Twin Disc",
    price: 5000,
    originalPrice: 7499, 
    discount: "30%"
  },
  {
    id: 6,
    img: icon6,
    bikeName: "Yamaha YZF-R6",
    category: "Sport, Twin Disc",
    price: 11000,
    originalPrice: 12999, 
    discount: "30%"
  }
];

const Products = () => {
  const [favorites, setFavorites] = useState(Array(bikes.length).fill(false));
  const { addToCart } = useContext(CartContext); 
  const [animatingCard, setAnimatingCard] = useState(null);

  const toggleFavorite = (index) => {
    const newFavorites = [...favorites];
    newFavorites[index] = !newFavorites[index];
    setFavorites(newFavorites);
  };

  const handleAddToCart = (bike, index) => {
    addToCart(bike);

    setAnimatingCard(index);
    setTimeout(() => setAnimatingCard(null), 1000); // Reset animation state after 1 second
  };

  return (
    <section id='products' className="md:py-20 py-0">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold md:my-6 my-0 pb-5">Popular Bikes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:mx-[10rem] mx-6">
          {bikes.map((bike, index) => (
            <div
              key={index}
              className={`relative w-[300px] p-3 bg-white rounded-lg shadow-md overflow-hidden ${animatingCard === index ? "animate-to-cart" : ""}`}
              data-aos="fade-up" // Add AOS animation attribute
              data-aos-delay={`${index * 100}`} // Optional delay for staggered animations
              data-aos-duration="1000" // Duration of the animation
            >
              <div className="relative">
                <img className="w-full h-48 object-contain" src={bike.img} alt={bike.bikeName} />
                <span className="absolute top-2 left-2 bg-black text-white text-xs font-semibold rounded-full px-2 py-1">
                  {bike.discount}
                </span>
                <button
                  onClick={() => toggleFavorite(index)}
                  className="absolute top-2 right-2 bg-white rounded-full p-2 text-black focus:outline-none"
                >
                  {favorites[index] ? (
                    <MdFavorite className="w-6 h-6 text-red-500" />
                  ) : (
                    <MdFavoriteBorder className="w-6 h-6" />
                  )}
                </button>
              </div>
              <div className="p-4">
                <h2 className="text-xl text-center font-semibold">{bike.bikeName}</h2>
                <p className="text-gray-600 text-center">({bike.category})</p>
                <div className="flex items-baseline justify-center mt-2 py-2">
                  <span className="text-2xl font-semibold">${bike.price}</span>
                  <span className="text-gray-500 line-through ml-2">${bike.originalPrice}</span>
                </div>
                <button
                  className="mt-4 border w-[70%] bg-black text-white py-2 rounded-3xl transition-all hover:duration-300 hover:bg-white hover:text-black font-semibold hover:border hover:border-black"
                  onClick={() => handleAddToCart(bike, index)} 
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;