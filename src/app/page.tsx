"use client";
import Image from 'next/image'
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import SDFGeometryComponent from './components/SDFGeometryComponent';
import ImageCarousel from './components/Carousel';
import { motion } from "framer-motion";
import TextAnim from "./components/TextAnim";
import * as THREE from 'three';
import StarryRock from './components/StarryRock';

import { useEffect, useRef } from "react";
const images = [
  "me-iceland.jpg",
  "me-film.jpg", 
  "freddo-and-i.JPEG"
];
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 15
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const transition = { 
  duration: 10, 
  ease: "easeInOut",
  repeat: Infinity,
  repeatType: "reverse",
  repeatDelay: 1
  // duration: 2
}

export default function Home() {

  return (
    <div className="relative">
      <SDFGeometryComponent/>
      <main className="relative z-10 h-screen w-full overflow-x-hidden">
        <div className='border border-black h-5/6 w-11/12 m-20 flex flex-col'>
          <div className="flex-1 m-4">
            <h1 className='text-5xl'>Parker Conrad</h1>
            <h2 className='text-lg'>Software Engineer</h2>
            <ul className="font-bold list-none">
              <li>HOME</li>
              <li>PROJECTS</li>
              <li>CONTACT</li>
              <li>MY STORY</li>
            </ul>
          </div>
          <p className='font-bold w-1/6 m-4 self-end'>Originating from the Oregon Coast, I believe software development is my medium for the greatest magnitude of social good. 
            Combining technical experiences from the scientific instrument, automotive mfg., and academic domains, along with my time 
            as a founder of an eco-focused surfboard manufacturing company. I come with a unique perspective to the industry and an optimistic outlook 
            for the role of tech in our everyday lives.
          </p>
        </div>
      </main>
    </div>
  )
}

