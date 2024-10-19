import React from 'react';
import Card from "../models/Card.jsx";
import authorImage1 from '../images/Samson.jpeg'; // Add the correct path to your image

function MainSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 p-4 max-w-screen-lg mx-auto">
      <Card 
        blogTitle="**Submitting The Proposal**"
        author="**Samson Oloruntola**"
        date="14/10/2024" 
        topic="**4. Project Proposal 📄**"
        desc="Idea chosen, finally time to get the project proposal form submitted."
        authorImage={authorImage1}
      />
      <Card 
        blogTitle="**Trying To Plan The Project**"
        author="**_Marjia Siddik_**"
        date="08/10/2024" 
        topic="**3. Project Proposal 📄**"
        desc="Choosing a project idea is much more difficult than we thought!"
        authorImage={authorImage1}
      />
      <Card 
        blogTitle="**Developing The Feature**"
        author="**Jane Doe**"
        date="05/10/2024" 
        topic="**2. Feature Development 🧠**"
        desc="Implementing the core features required for the project."
        authorImage={authorImage1} 
      />
      <Card 
        blogTitle="**Testing The Application**"
        author="**John Doe**"
        date="01/10/2024" 
        topic="**1. Testing 📄**"
        desc="Running tests to ensure the application functions correctly."
        authorImage={authorImage1}
      />
    </div>
  );
}

export default MainSection;
