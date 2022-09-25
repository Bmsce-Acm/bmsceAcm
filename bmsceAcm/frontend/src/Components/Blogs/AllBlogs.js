import React from 'react';
import { getAllBlogs } from '../../Api/blogsApi.js';
import { Link } from "react-router-dom";

const AllBlogs = () => {

    const allBlogs = getAllBlogs();

    return (
        <div className='blogs_container'>
            <div className="blogs-grid">
                {
                    allBlogs.map((blog) => (
                        <a href="" className="blogs_block">
                            <div className="blogs left-right-blogs-block">
                                <div className="blogs-image-container">
                                    <img src={blog.images[0]} />
                                </div>
                                <h1 className="blogs-blue-text-long">
                                    {blog.title}
                                </h1>
                                <div className="blogs-content-box">
                                    <p>{blog.description}</p>
                                    <Link to={`/blog/${blog.id}`}>
                                        <span
                                            className="goto-blogs"
                                        >
                                            Read more &gt;
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default AllBlogs