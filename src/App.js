import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navabar/Navbar";
import Project from "./components/Project/Project";
import Experience from "./components/Exp/Experience";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Error from "./components/Error/Error";
import Footer from "./components/Footer/Footer";
import Dashboard from "./components/controller/Dashboard";
import Login from "./components/auth/Login";
import { Lodder } from "./context/Lodder";
import Spinner from "./components/loading/Spinner";
import Change from "./components/auth/Change";

function App() {
  const { lodder } = Lodder();
  return (
    <>
      {lodder === true ? <Spinner /> : ""}

      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/exerience" element={<Experience />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashbord" element={<Dashboard />} />
          <Route path="/*" element={<Error />} />
          <Route path="/login" element={<Login />} />
          <Route path="/change" element={<Change />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
