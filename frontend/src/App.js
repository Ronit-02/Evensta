import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Event from "./pages/home/Event";
import NewEvent from "./components/NewEvent";
import Navbar from "./components/Navbar";
import Contact from "./pages/contact/Contact"
import About from "./pages/about/About"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Regsiter"
import Dashboard from "./pages/dashboard/Dashboard"
import { useState } from "react";

function App() {

  const [user, setUser] = useState(true);

  const toggleUser = () => {
    setUser((prevState) => !prevState)
  }

  return (
    <BrowserRouter>

      {
        user
          ?
          <div className="bg-black">
            <Navbar toggleUser={toggleUser} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/event/:id" element={<Event />} />
              <Route path="/dashboard/:id" element={<Dashboard />} />
              <Route path="/newEvent/:id" element={<NewEvent />} />
            </Routes>
          </div>
          :
          <div className="bg-gray-900 h-screen">
            <Routes>
            <Route path="/" element={ <Login toggleUser={toggleUser} />} />
            <Route path="/register" element={ <Register />} />
            </Routes>       
          </div> 
      }
    </BrowserRouter>
  );
}

export default App;