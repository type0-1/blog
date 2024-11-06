import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card from "../models/Card.jsx";
import samsonImage from '../images/Samson.jpeg'; 
import marjiaImage from '../images/Marjia.jpeg';

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    blogTitle: "First Steps Into The Functional Specification!",
    author: "Samson Oloruntola",
    date: "5th Nov. 2024",
    topic: "📋 Functional Specification",
    desc: "Project proposal is done and dusted, time to dive into the real challenge",
    authorImage: samsonImage,
    blogId: 3,
  },
  {
    blogTitle: "Submitting The Proposal: Race Against Time",
    author: "Samson Oloruntola",
    date: "14th Oct. 2024",
    topic: "📄 Project Proposal",
    desc: "Idea locked in, now to tackle the project proposal!",
    authorImage: samsonImage,
    blogId: 2,
  },
  {
    blogTitle: "Trying To Plan The Project",
    author: "Marjia Siddik",
    date: "8th Oct. 2024",
    topic: "📄 Project Proposal",
    desc: "Who knew choosing a project idea would be this tough?",
    authorImage: marjiaImage,
    blogId: 1,
  },
];

function MainSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Animate the entire section containing the introduction lines with a delay
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    // Stagger animation for card elements
    gsap.fromTo(
      ".card-element",  // Target each card by its class
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.25,  // Stagger effect to make each card appear one at a time
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto my-14 p-4">
      {/* Description Above the Cards */}
      <div ref={sectionRef} className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 pt-8">
          A Privacy-Preserving Data Access System
        </h1>
        <p className="text-md text-gray-600">
          Follow our journey as we tackle the challenges of developing Oblivy, a privacy-preserving data access system using Path ORAM and AES Encryption.
        </p>
        <p className="text-md text-gray-500 pt-2">
          By Samson Oloruntola & Marjia Siddik 
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {cardData.map((card) => (
          <div className="card-element" key={card.blogId}>
            <Card 
              blogTitle={card.blogTitle}
              author={card.author}
              date={card.date}
              topic={card.topic}
              desc={card.desc}
              authorImage={card.authorImage}
              blogId={card.blogId}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainSection;
