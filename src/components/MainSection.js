import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card from "../models/Card.jsx";
import samsonImage from '../images/Samson.jpeg'; 
import marjiaImage from '../images/Marjia.jpeg';

gsap.registerPlugin(ScrollTrigger);

function MainSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Animate the title and description
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    // Animate the cards with a staggered effect as they scroll into view
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: index * 0.2, // Each card has a staggered delay based on its index
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto my-14 p-4">
      
      {/* Description Above the Cards */}
      <div ref={sectionRef} className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 pt-8">A Privacy-Preserving Data Access System</h1>
        <p className="text-md text-gray-600">
          Follow our journey as we tackle the challenges of developing Oblivy, a privacy-preserving data access system using Path ORAM and AES Encryption.
        </p>
        <p className="text-md text-gray-500 pt-2">
          By Samson Oloruntola & Marjia Siddik 
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        <Card 
          ref={(el) => (cardsRef.current[0] = el)}
          blogTitle="First Steps Into The Functional Specification!"
          author="Samson Oloruntola"
          date="22/10/2024" 
          topic="📋 Functional Specification"
          desc="Project proposal is done and dusted, time to dive into the real challenge"
          authorImage={samsonImage}
          blogId="3" 
        />
        <Card 
          ref={(el) => (cardsRef.current[1] = el)}
          blogTitle="Submitting The Proposal: Race Against Time"
          author="Samson Oloruntola"
          date="14/10/2024" 
          topic="📄 Project Proposal"
          desc="Idea locked in, now to tackle the project proposal!"
          authorImage={samsonImage}
          blogId="2"
        />
        <Card 
          ref={(el) => (cardsRef.current[2] = el)}
          blogTitle="Trying To Plan The Project"
          author="Marjia Siddik"
          date="08/10/2024" 
          topic="📄 Project Proposal"
          desc="Who knew choosing a project idea would be this tough?"
          authorImage={marjiaImage}
          blogId="1"
        />
      </div>
    </div>
  );
}

export default MainSection;
