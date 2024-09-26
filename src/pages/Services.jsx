import React from "react";
import { FaVectorSquare } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { BiSolidDollarCircle } from "react-icons/bi";
import { motion } from "framer-motion";
import { SlideUp } from "../animation/animate";

const ServiceCard = [
  {
    id: 1,
    title: "Luxury Facilities",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur",
    icon: <FaVectorSquare />,
    link: "#",
    delay: 0.2,
  },
  {
    id: 2,
    title: "Quality Products",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur",
    icon: <FaPenToSquare />,
    link: "#",
    delay: 0.4,
  },
  {
    id: 3,
    title: "Affordable Price",
    description:
      "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    icon: <BiSolidDollarCircle />,
    link: "#",
    delay: 0.6,
  },
];

const Services = () => {
  return (
    <div
      style={{
        backgroundImage: `url('https://cdn.domestika.org/c_fit,dpr_auto,f_auto,q_80,t_base_params,w_820/v1699364591/content-items/014/526/360/sketch-blueprint-bright-interior-new-apartment-hand-drawn-illustration%2520%25281%2529-original.jpg?1699364591')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px 0', 
      }}
    >
      <div className="container py-20 bg-white bg-opacity-50 rounded-md"> 
       
        <div className="space-y-2 text-center max-w-[450px] mx-auto mb-5">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView={"animate"}
            className="text-5xl font-bold text-orange-500 font-serif "
          >
            What we provide
          </motion.h1>
          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView={"animate"}
            className="text-black-500 text-lg "
          >
            Bring your dream home to life with one-on-one design help & hand
            picked products
          </motion.p>
        </div>
        {/* card section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
  {ServiceCard.map((card) => {
    return (
      <motion.div
        variants={SlideUp(card.delay)}
        initial="initial"
        whileInView={"animate"}
        key={card.id}
        className="space-y-4 bg-orange-500 text-white border-[1px] border-black/30 px-6 py-12 hover:bg-orange-600 hover:text-yellow-200 transition duration-300" // Updated styles
      >
        <span className="inline-block text-xl border-[1px] border-white rounded-full p-3">
          {card.icon}
        </span>
        <p className="text-2xl font-bold font-serif">{card.title}</p>
        <p className="text-white text-xs">{card.description}</p>
        <a
          href={card.link}
          className="inline-block border-b border-white"
        >
          Learn More
        </a>
      </motion.div>
    );
  })}
</div>

      </div>
    </div>
  );
};

export default Services;
