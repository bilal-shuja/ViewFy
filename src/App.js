import { BrowserRouter as Router, Routes, Route   } from "react-router-dom";
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import HowToOperate from './Components/HowToOperate.jsx';
import Packages from './Components/Packages.jsx';
import AboutUS from './Components/AboutUS.jsx';
import Footer from './Components/Footer.jsx';
import Navbar from './Components/Navbar.jsx';
import Main from './Components/Main.jsx';
import './App.css';

function App() {
  return (
    <div id="wrapper">
      <Router >
           <Navbar/>
           <Routes>
           <Route path="/" element={<Main/>}/>
           <Route path="/AboutUS" element={<AboutUS/>}/>
           <Route path="/HowToOperate" element={<HowToOperate/>}/>
           <Route path="/Packages" element={<Packages/>}/>
           </Routes>
           <Footer/>
        
           </Router>

           <FloatingWhatsApp 
           phoneNumber="+923206226173"
           accountName="Welcome to Viewfy"
           />
    </div>
  );
}

export default App;
