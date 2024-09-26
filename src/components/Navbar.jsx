import React from "react";
import { useLocation, Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { motion } from "framer-motion";

const NavLinks = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Explore", link: "/explore" },
  { id: 3, title: "Projects", link: "/projects" },
  { id: 4, title: "Services", link: "/services" },
  { id: 5, title: "About", link: "/about" },
  { id: 6, title: "Contact Us", link: "/contacts" },
];

const Navbar = () => {
  const location = useLocation();

  const navbarStyle = {
    background: 'linear-gradient(90deg, rgba(171,167,164,1) 0%, rgba(199,194,185,1) 46%, rgba(231,227,217,0.835171568627451) 90%)',
    border: '2px solid grey',
    fontFamily: "'Roboto', sans-serif",
    minHeight: '60px',
  };

  const linkStyle = {
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'color 0.3s',
  };

  const buttonStyle = {
    backgroundColor: 'grey', 
    color: 'white',
    fontWeight: '500',
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem', 
    transition: 'background-color 0.3s, transform 0.3s',
  };

  return (
    <div style={navbarStyle}>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="container py-6 flex justify-between items-center"
      >
        <div className="flex items-center gap-3">
          <img src={Logo} alt="logo" className="w-10" />
          <span className="text-2xl font-bold text-black md:text-3xl shadow-xl shadow-black ">ARZHEN </span>
        </div>
        <div className="hidden md:flex !space-x-8">
          {NavLinks.map((link) => {
            const isActive = location.pathname === link.link;
            return (
              <Link
                to={link.link}
                key={link.id}
                style={{
                  ...linkStyle,
                  color: isActive ? '#4b5563' : 'black', 
                  textDecoration: isActive ? 'underline' : 'none',
                }}
                className="hover:text-gray-700"
              >
                {link.title}
              </Link>
            );
          })}
        </div>
        <div>
          <button
            style={buttonStyle}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'black')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'grey')}
            onClick={() => alert('Subscribed....')} 
          >
            SUBSCRIBE
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
