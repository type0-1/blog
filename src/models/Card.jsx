import ReactMarkdown from "react-markdown";
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

function Card({ blogTitle, author, date, topic, desc, authorImage, blogId }) {
  return (
    <div className="relative bg-white shadow-lg rounded-lg w-full mx-auto my-6 border border-gray-200 flex flex-col md:h-[265px] sm:h-[300px] hover:shadow-xl transition-shadow duration-300">
      
      {/* Color banner */}
      <div className="h-2 w-full bg-[#F25900] rounded-t-lg"></div>
      
      <div className="p-6 flex flex-col h-full">

        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-semibold text-[#DE5100]">{blogId}.</span> 
            <ReactMarkdown className="md:text-md sm:text-sm text-[#F25900]">
              {topic}
            </ReactMarkdown>
          </div>
          
          <ReactMarkdown className="text-sm text-gray-400">
            {date}
          </ReactMarkdown>
        </div>
        
        <hr className="border-gray-300 my-2" />
        
        <div className="flex-grow">
          <ReactMarkdown className="sm:text-xl md:text-2xl font-bold text-gray-800 mb-1">
            {blogTitle}
          </ReactMarkdown>
          <ReactMarkdown className="md:text-md sm:text-sm text-gray-600 mb-2">
            {desc}
          </ReactMarkdown>
        </div>
     
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <img 
              src={authorImage} 
              alt="Author" 
              className="w-10 h-10 rounded-full mr-3" 
            />
            <ReactMarkdown className="text-sm text-gray-800 font-bold">
              {author}
            </ReactMarkdown>
          </div>

          <Link 
            to={`/blog/${blogId}`}  // Only pass the blogId in the URL
            className="text-[#F25900] py-2 px-4 rounded flex items-center border border-[#F25900] hover:bg-[#C44900] hover:text-white transition duration-300"
          >
            <span>Learn more</span>
            <ChevronRightIcon className="w-5 h-5 ml-2" /> 
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
