import ReactMarkdown from "react-markdown";
import { ChevronRightIcon } from '@heroicons/react/24/solid'; 

function Card({ blogTitle, author, date, topic, desc, authorImage, number }) {
  return (
    <div className="relative bg-white shadow-lg rounded-lg w-full mx-auto my-6 border border-gray-200 flex flex-col md:h-[265px] sm:h-[300px]">
      
      {/* Color banner */}
      <div className="h-2 w-full bg-[#F25900] rounded-t-lg text-white">_</div>
      
      <div className="p-6 flex flex-col h-full">

        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center space-x-2">
            {/* Number */}
            <span className="text-2xl font-semibold text-[#DE5100]">{number}.</span> 
            {/* Topic */}
            <ReactMarkdown className="md:text-md sm:text-sm text-[#F25900]">
              {topic}
            </ReactMarkdown>
          </div>
          
          <ReactMarkdown className="text-sm text-gray-400">
            {/* Date */}
            {date}
          </ReactMarkdown>
        </div>
        
        {/* Line Separator */}
        <hr className="border-gray-300 my-2" />
        
        {/* Main Content */}
        <div className="flex-grow">
          {/* Short Description */}
          <ReactMarkdown className="md:text-md sm:text-sm text-gray-600 mb-2 md:h-[30px] sm:h-[40px]">
            {desc}
          </ReactMarkdown>
          
          {/* Main Headline */}
          <ReactMarkdown className="sm:text-xl md:text-2xl font-bold text-gray-800 mb-1 h-[40px]">
            {blogTitle}
          </ReactMarkdown>
        </div>
        
        {/* Author and Button aligned */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            {/* Circular Author Image */}
            <img 
              src={authorImage} 
              alt="Author" 
              className="w-10 h-10 rounded-full mr-3" 
            />
            <ReactMarkdown className="text-sm text-gray-500 italic">
              {author}
            </ReactMarkdown>
          </div>

          <button className="text-[#F25900] py-2 px-4 rounded flex items-center border-[#F25900] hover:bg-[#C44900] hover:text-[white]">
            <span>Learn more</span>
            <ChevronRightIcon className="w-5 h-5 ml-2" /> {/* Icon */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
