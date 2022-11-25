import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Events from './Components/Events/Events';
import EventPage from './Components/Events/EventPage';
import Blogs from './Components/Blogs/Blogs';
import BlogPage from './Components/Blogs/BlogPage';
import About from './Components/About/About';
import Gallery from './Components/Gallery/Gallery';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/event/:id/" element={<EventPage />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/blog/:slug" element={<BlogPage />} />
          <Route exact path="/team" element={<About />} />
          <Route exact path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
