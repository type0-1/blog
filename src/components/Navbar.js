import React from "react";
import ReactMarkdown from "react-markdown";

function Navbar() {
  return (
    <div className="bg-white text-black p-4 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between px-4">
        
        {/* Center Section: Project Title */}
        <div className="text-xl tracking-wide text-gray-800 font-bold italic text-center">
          <ReactMarkdown>
            OBLIVY
          </ReactMarkdown>
        </div>

        {/* Right Section: Refined GitLab Button */}
        <div>
          <a 
            href="https://gitlab.computing.dcu.ie/oloruns2/2025-csc1049-soloruntola-oblivy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#683F27] font-bold bg-[#FF9D64] py-2 px-6 rounded-full shadow-sm text-xs transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#FFB587] hover:border hover:border-[#B26B43]"
          >
            GitLab
          </a>
        </div>
        
      </div>
    </div>
  );
}

export default Navbar;
