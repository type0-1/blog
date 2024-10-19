import ReactMarkdown from "react-markdown";
import Navbar from "./components/Navbar.js";
import MainSection from "./components/MainSection.js";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      
      <div className="p-6">
        <ReactMarkdown className="text-4xl font-bold text-center mb-4">
          # Blog on Oblivy: Secure Data Access with Path ORAM and AES Encryption
        </ReactMarkdown>
      </div>

      <MainSection />
    </div>
  );
}

export default App;
