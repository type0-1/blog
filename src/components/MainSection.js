import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card from "../models/Card.jsx";
import samsonImage from '../images/Samson.jpeg'; 
import marjiaImage from '../images/Marjia.jpeg';

gsap.registerPlugin(ScrollTrigger);

const cardData = [
    {
      blogTitle: "Server and Frontend File Organization",
      author: "Samson Oloruntola",
      date: "21st Jan. 2025",
      topic: "⚙️ Development Streamlining",
      desc: "Added .gitignore and organized files for seamless server, API, and frontend workflows.",
      authorImage: samsonImage,
      blogId: 34,
    },
    {
      blogTitle: "Signup Page Implementation",
      author: "Samson Oloruntola",
      date: "21st Jan. 2025",
      topic: "🎨 UI Development",
      desc: "Developed a signup page, updated index.css, and implemented a Flask signup route.",
      authorImage: samsonImage,
      blogId: 33,
    },
    {
      blogTitle: "Database Cleanup and CSS Adjustments",
      author: "Marjia Siddik",
      date: "18th Jan. 2025",
      topic: "🗄️ Backend Refinements",
      desc: "Deleted outdated database rows and refined CSS for better performance.",
      authorImage: marjiaImage,
      blogId: 32,
    },
    {
      blogTitle: "Storing Dataset Metadata in Backend",
      author: "Samson Oloruntola",
      date: "18th Jan. 2025",
      topic: "🗄️ Metadata Management",
      desc: "Enhanced the server to store dataset metadata for better data tracking.",
      authorImage: samsonImage,
      blogId: 31,
    },
    {
      blogTitle: "Improved Dataset Storage Path",
      author: "Marjia Siddik",
      date: "18th Jan. 2025",
      topic: "📂 Storage Optimization",
      desc: "Revised database storage paths for improved project structure and accessibility.",
      authorImage: marjiaImage,
      blogId: 30,
    },
    {
      blogTitle: "Access Control Database Implementation",
      author: "Samson Oloruntola",
      date: "18th Jan. 2025",
      topic: "🔑 Access Control",
      desc: "Implemented database structures for foundational access control management.",
      authorImage: samsonImage,
      blogId: 29,
    },
    {
      blogTitle: "Initial ACL Backend Implementation",
      author: "Samson Oloruntola",
      date: "18th Jan. 2025",
      topic: "🔒 Security Development",
      desc: "Launched the first Access Control List (ACL) backend implementation.",
      authorImage: samsonImage,
      blogId: 28,
    },
    {
      blogTitle: "Basic Stash Class Unit Testing",
      author: "Marjia Siddik",
      date: "13th Jan. 2025",
      topic: "🧪 Testing Infrastructure",
      desc: "Created unit tests for the Stash class, ensuring reliable foundational operations.",
      authorImage: marjiaImage,
      blogId: 27,
    },
    {
      blogTitle: "Server File Reorganization",
      author: "Samson Oloruntola",
      date: "13th Jan. 2025",
      topic: "⚙️ Development Organization",
      desc: "Reorganized server files into directories and added template unit tests.",
      authorImage: samsonImage,
      blogId: 26,
    },
    {
      blogTitle: "Encryption Integration with Tree Class",
      author: "Samson Oloruntola",
      date: "12th Jan. 2025",
      topic: "🔐 Encryption Enhancements",
      desc: "Integrated encryption into Tree class for secure read/write operations.",
      authorImage: samsonImage,
      blogId: 25,
    },
    {
      blogTitle: "Pytest Fixtures and Encryption Testing",
      author: "Marjia Siddik",
      date: "12th Jan. 2025",
      topic: "🧪 Testing Improvements",
      desc: "Added pytest fixtures and foundational encryption tests for enhanced reliability.",
      authorImage: marjiaImage,
      blogId: 24,
    },
  {
    blogTitle: "Implementing the Encryption Class with AES-256",
    author: "Marjia Siddik",
    date: "7th Jan. 2025",
    topic: "🔒 Encryption Development",
    desc: "Developed AES-256 encryption methods for encrypting and decrypting data blocks.",
    authorImage: marjiaImage,
    blogId: 23,
  },
  {
    blogTitle: "Unit Testing for the Tree Class and Data Block Refinements",
    author: "Samson Oloruntola",
    date: "5th Jan. 2025",
    topic: "🧪 Testing and Debugging",
    desc: "Developed unit test for the Tree class and refined data block structures.",
    authorImage: samsonImage,
    blogId: 22,
  },
  {
    blogTitle: "Creating the Homepage Template and Upload Functionality",
    author: "Marjia Siddik",
    date: "4th Jan. 2025",
    topic: "🎨 UI Development",
    desc: "Designed a homepage template, added upload functionality, and resolved bugs.",
    authorImage: marjiaImage,
    blogId: 21,
  },
  {
    blogTitle: "Advancing Tree Logic and Stash Implementation",
    author: "Samson Oloruntola",
    date: "4th Jan. 2025",
    topic: "🔒 ORAM Feature Development",
    desc: "Completed stash implementation, enhanced tree logic, and added debugging tools.",
    authorImage: samsonImage,
    blogId: 20,
  },
  {
    blogTitle: "Organizing and Expanding Path ORAM Modules",
    author: "Samson Oloruntola",
    date: "3rd Jan. 2025",
    topic: "🔒 ORAM Module Development",
    desc: "Reorganized Path ORAM into modules and began implementing key features in tree.py.",
    authorImage: samsonImage,
    blogId: 19, 
  },
  {
    blogTitle: "Building the Path ORAM Directory Structure",
    author: "Samson Oloruntola",
    date: "2nd Jan. 2025",
    topic: "🔒 ORAM Implementation",
    desc: "Initiated the Path ORAM structure with key methods for secure data operations.",
    authorImage: samsonImage,
    blogId: 18,
  },
  {
    blogTitle: "Setting Up the Database",
    author: "Marjia Siddik",
    date: "1st Jan. 2025",
    topic: "💾 Database Integration",
    desc: "Built a solid database foundation with SQLite3 and Python integration for CRUD operations.",
    authorImage: marjiaImage,
    blogId: 17,
  },
  {
    blogTitle: "Setting Up the Backend and Frontend",
    author: "Samson Oloruntola",
    date: "31st Dec. 2024",
    topic: "⚙️ Development Setup",
    desc: "Laid the foundation by setting up the backend and frontend for the project.",
    authorImage: samsonImage,
    blogId: 16,
  },
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
