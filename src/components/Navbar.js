import ReactMarkdown from "react-markdown";

function Navbar() {
  return (
    <div className="bg-white text-black p-2 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-lg mx-auto flex justify-between px-2">
        <ReactMarkdown className="text-lg font-bold">
          Samson Oloruntola & Marjia Siddik
        </ReactMarkdown>

        <ReactMarkdown className="text-md italic">
          CSC 1049 - Oblivy Blog
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default Navbar;
