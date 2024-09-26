import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  perspective: 1200px;
  background: #100000;
  padding-top: 10%;
  margin-bottom: 3rem;
  overflow: hidden;
`;

const Spinner = styled.figure`
  transform-style: preserve-3d;
  height: 351px; /* Adjust this value as needed */
  transform-origin: 50% 50% -500px;
  transition: 1s;
`;

const CarouselImage = styled.img`
  height: 300px; /* Fixed height */
  width: auto; /* Maintain aspect ratio */
  max-width: 425px; 
  position: absolute;
  left: 30%;
  transform-origin: 50% 50% -500px;
  outline: 1px solid transparent;

  &:nth-child(1) { transform: rotateY(0deg); }
  &:nth-child(2) { transform: rotateY(-45deg); }
  &:nth-child(3) { transform: rotateY(-90deg); }
  &:nth-child(4) { transform: rotateY(-135deg); }
  &:nth-child(5) { transform: rotateY(-180deg); }
  &:nth-child(6) { transform: rotateY(-225deg); }
  &:nth-child(7) { transform: rotateY(-270deg); }
  &:nth-child(8) { transform: rotateY(-315deg); }
`;

const NavButton = styled.span`
  color: #fff;
  margin: 5%;
  display: inline-block;
  text-decoration: none;
  font-size: 2rem;
  transition: 0.6s color;
  position: relative;
  margin-top: -6rem;
  line-height: 0;

  &:hover {
    color: #888;
    cursor: pointer;
  }
`;

const Carousel = () => {
  const [angle, setAngle] = useState(0);
  const spinnerRef = useRef(null);

  const gallerySpin = (sign) => {
    const newAngle = sign ? angle - 45 : angle + 45;
    setAngle(newAngle);
    spinnerRef.current.style.transform = `rotateY(${newAngle}deg)`;
  };

  return (
    <CarouselContainer>
      <Spinner ref={spinnerRef}>
        <CarouselImage src="https://www.andacademy.com/resources/wp-content/uploads/2024/01/Feature-12.webp" alt="" />
        <CarouselImage src="https://st5.depositphotos.com/1152281/67056/i/450/depositphotos_670567036-stock-photo-empty-white-interior-resin-floor.jpg" alt="" />
        <CarouselImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcjwg1pLgl__y0oe0XYra47D1dQ1s4v_cY6A&s" alt="" />
        <CarouselImage src="https://5.imimg.com/data5/SELLER/Default/2023/3/OL/ZF/NY/182877689/3-bhk-duplex-interior-design-services.jpg" alt="" />
        <CarouselImage src="https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
        <CarouselImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy0iFKw9E5WSi7cZLJh0jxaKcmjE15T6gPV2fqseVH3p-hUHQ1IqP4WQRQVIUSczW8jwM&usqp=CAU" alt="" />
        <CarouselImage src="https://media.istockphoto.com/id/819139462/photo/modern-kitchen-design-in-light-interior-with-wood-accents.jpg?s=612x612&w=0&k=20&c=A1kri2eqdY5ryie6x1zLmfj94_Ee2Z0JalqJkelvsG0=" alt="" />
        <CarouselImage src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?cs=srgb&dl=pexels-pixabay-276724.jpg&fm=jpg" alt="" />
      </Spinner>
      <NavButton onClick={() => gallerySpin('-')}>&lt;</NavButton>
      <NavButton onClick={() => gallerySpin('')}>&gt;</NavButton>
    </CarouselContainer>
  );
};

export default Carousel;
