import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import { Contact } from "./components/Pages/Contact";
//import TeamForm from "./components/HomeCompo/TeamForm";
import TeamFormPage1 from "./components/HomeCompo/TeamFormPage1";
import TeamFormPage2 from "./components/HomeCompo/TeamFormPage2";
import Success from "./components/HomeCompo/Success";
function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<TeamFormPage1 />} />
            <Route path="/register/page2" element={<TeamFormPage2 />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;