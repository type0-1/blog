import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card from "../models/Card.jsx";
import samsonImage from '../images/Samson.jpeg'; 
import marjiaImage from '../images/Marjia.jpeg';

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    blogTitle: "Finalizing the Functional Specification and Submission",
    author: "Marjia Siddik",
    date: "25th Nov. 2024",
    topic: "📋 Functional Specification Milestone",
    desc: "Completed and finalized the functional specification draft.",
    authorImage: marjiaImage,
    blogId: 15,

  },
  {
    blogTitle: "Mapping and Testing: Preparing Oblivy for Robust Development",
    author: "Marjia Siddik",
    date: "24th Nov. 2024",
    topic: "📋 Functional Specification",
    desc: "Developed more diagrams and evaluated testing approaches.",
    authorImage: marjiaImage,
    blogId: 14,

  },
  {
    blogTitle: "From Lengthy Documents to Clear Diagrams: Redefining the Functional Specification",
    author: "Samson Oloruntola",
    date: "23rd Nov. 2024",
    topic: "📋 Functional Specification",
    desc: "Now we're talking. The start of creating diagram and mockups for clarity.",
    authorImage: samsonImage,
    blogId: 13,

  },
  {
    blogTitle: "Refining the Functional Specification After Supervisor Feedback",
    author: "Samson Oloruntola",
    date: "21st Nov. 2024",
    topic: "📋 Functional Specification Update",
    desc: "Shortened the functional specification based on supervisor feedback.",
    authorImage: samsonImage,
    blogId: 12,
  },
  {
    blogTitle: "Redefining Oblivy: From Visualization Tool to Functional System",
    author: "Marjia Siddik",
    date: "20th Nov. 2024",
    topic: "🔄 Project Evolution",
    desc: "Transforming Oblivy into a functional system.",
    authorImage: marjiaImage,
    blogId: 11,
  },
  {
    blogTitle: "Defining Software Attributes and Organizing Specific Requirements for Oblivy",
    author: "Samson Oloruntola",
    date: "15th Nov. 2024",
    topic: "📋 Functional Specification",
    desc: "Looking more into the specific requirements, as well as software attributes.",
    authorImage: samsonImage,
    blogId: 10,
  },
  {
    blogTitle: "Setting Performance Metrics, Database Needs, and Design Standards for Oblivy",
    author: "Marjia Siddik",
    date: "14th Nov. 2024",
    topic: "📋 Functional Specification",
    desc: "Performance metrics, database needs, design standards and all that jazz.",
    authorImage: marjiaImage,
    blogId: 9,
  },
  {
    blogTitle: "Establishing External Interfaces and Core System Functions for Oblivy",
    author: "Marjia Siddik",
    date: "13th Nov. 2024",
    topic: "📋 Functional Specification",
    desc: "Looking at the external interfaces and system functions for Oblivy.",
    authorImage: marjiaImage,
    blogId: 8,
  },
  {
    blogTitle: "Defining Core Aspects of Development",
    author: "Samson Oloruntola",
    date: "12th Nov. 2024",
    topic: "📋 Functional Specification",
    desc: "Now we go on and think about the core aspects of developing Oblivy.",
    authorImage: samsonImage,
    blogId: 7,
  },
  {
    blogTitle: "Refining System Requirements and Focusing on Core Essentials",
    author: "Samson Oloruntola",
    date: "10th Nov. 2024",
    topic: "📋 Functional Specification",
    desc: "Looking into system requirements and focusing on essentials.",
    authorImage: samsonImage,
    blogId: 6,
  },
  {
    blogTitle: "Continuing on with Section 2 of the Functional Specification",
    author: "Marjia Siddik",
    date: "7th Nov. 2024",
    topic: "📋 Functional Specification",
    desc: "Getting into the nitty gritty with Oblivy :D",
    authorImage: marjiaImage,
    blogId: 5,
  },
  {
    blogTitle: "Working on Section 2 of the Functional Specification",
    author: "Marjia Siddik",
    date: "6th Nov. 2024",
    topic: "📋 Functional Specification",
    desc: "The functional spec isn't all sunshine and rainbows.",
    authorImage: marjiaImage,
    blogId: 4,
  },
  {
    blogTitle: "First Steps Into The Functional Specification!",
    author: "Samson Oloruntola",
    date: "5th Nov. 2024",
    topic: "📋 Functional Specification",
    desc: "Project proposal is done and dusted, time to dive into the real challenge.",
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
