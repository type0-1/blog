import ReactMarkdown from "react-markdown";

function Card({ blogTitle, author, date, topic, desc, authorImage }) {
  return (
    <div className="relative bg-white shadow-lg rounded-lg p-6 w-full mx-auto my-6 border border-gray-200 flex flex-col h-[275px]">
      
      {/* Date and Topic container */}
      <div className="flex justify-between items-center mb-2">
        <ReactMarkdown className="text-md text-[#F25900]">
          {topic}
        </ReactMarkdown>
        
        <ReactMarkdown className="text-sm text-gray-400">
          {date}
        </ReactMarkdown>
      </div>
      
      {/* Line Separator */}
      <hr className="border-gray-300 my-2" />
      
      {/* Main Content */}
      <div>
        {/* Short Description */}
        <ReactMarkdown className="text-md text-gray-700 mb-2 h-[60px] overflow-hidden">
          {desc}
        </ReactMarkdown>
        
        {/* Main Headline */}
        <ReactMarkdown className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-1 h-[40px]">
          {blogTitle}
        </ReactMarkdown>
      </div>
      
      {/* Author and Button aligned */}
      <div className="flex justify-between items-center mt-6">
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

        <button className="bg-[#F25900] text-white py-2 px-4 rounded hover:bg-[#CB4B00]">
          Learn more
        </button>
      </div>
    </div>
  );
}

export default Card;
