import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import './App.css';

import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { getUserDetails, clearErrors } from "./Actions/userActs.js";

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Events from './Components/Events/Events';
import Blogs from './Components/Blogs/Blogs';
import BlogPage from './Components/Blogs/BlogPage';
import About from './Components/About/About';
import Gallery from './Components/Gallery/Gallery';

function App() {

    const alert = useAlert();
    const dispatch = useDispatch();

    const { isAdmin, user, message, loading, error } = useSelector((state) => state.user);

    useEffect(() => {
        if (error) {
            dispatch(clearErrors());
        }
        dispatch(getUserDetails());
    }, [error, dispatch, alert]);

    let username;
    if (message)
        username = null;
    else
        username = user?.username;

    return (
        <div className="App">
            <Router>
                <Navbar isAdmin={isAdmin} username={username} />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/events" element={<Events />} />
                    <Route exact path="/blogs" element={<Blogs />} />
                    <Route exact path="/blog/:id" element={<BlogPage />} />
                    <Route exact path="/team" element={<About />} />
                    <Route exact path="/gallery" element={<Gallery />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
