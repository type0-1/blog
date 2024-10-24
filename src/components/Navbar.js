import React from "react";
import ReactMarkdown from "react-markdown";

function Navbar() {
  return (
    <div className="bg-white text-black p-4 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-lg mx-auto flex justify-between items-center px-4">
        {/* Left Section: Main Title */}
        <div className="text-lg font-bold hover:text-gray-600 transition duration-300">
          <ReactMarkdown>
            Samson Oloruntola & Marjia Siddik
          </ReactMarkdown>
        </div>

        {/* Right Section: Project Name */}
        <div className="text-md italic hover:text-gray-600 transition duration-300">
          <ReactMarkdown>
            CSC 1049 - Oblivy Blog
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
