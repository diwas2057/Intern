import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skill";
function App() {
 return (
 <BrowserRouter>
 <div>
 <Navbar />
 <Routes>
 <Route path='/' element={<Home />} />
 <Route path='/skills' element={<Skills/>}/>
 <Route path ='/about' element={<About />} />
 </Routes>
 </div>
 </BrowserRouter>
 );
}
export default App;
