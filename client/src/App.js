import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import ChatPage from "./Pages/ChatPage";
import About from "./Pages/About";
import Market from "./Pages/Market";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Footer from "./Pages/Footer";
import UserProfile from "./Pages/UserProfile";
function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/chats" element={<ChatPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Market" element={<Market />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/userprofile" element={<UserProfile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
