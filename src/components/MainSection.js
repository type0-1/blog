import React from 'react';
import Card from "../models/Card.jsx";
import samsonImage from '../images/Samson.jpeg'; 
import marjiaImage from '../images/Marjia.jpeg';

function MainSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 p-4 max-w-screen-xl mx-auto">
      <Card 
        blogTitle="First Steps Into The Functional Specification!"
        author="Samson Oloruntola"
        date="22/10/2024" 
        topic="📋 Funtional Specification - Documentation"
        desc="Project proposal is done and dusted, time to dive into the real challenge"
        authorImage={samsonImage}
        blogId="3" 
      />
      <Card 
        blogTitle="Submitting The Proposal: Race Against Time"
        author="Samson Oloruntola"
        date="14/10/2024" 
        topic="📄 Project Proposal - Documentation"
        desc="Idea locked in, now to tackle the project proposal!"
        authorImage={samsonImage}
        blogId="2"
      />
      <Card 
        blogTitle="Trying To Plan The Project"
        author="Marjia Siddik"
        date="08/10/2024" 
        topic="📄 Project Proposal - Documentation"
        desc="Who knew choosing a project idea would be this tough?"
        authorImage={marjiaImage}
        blogId="1"
      />
    </div>
  );
}

export default MainSection;
