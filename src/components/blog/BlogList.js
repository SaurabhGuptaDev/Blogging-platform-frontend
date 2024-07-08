import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import './BlogList.css';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await api.get('/blogs');
        setBlogs(res.data);
      } catch (error) {
        console.error(error.response.data.message);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="blog-list-container">
      <h2>All Blogs</h2>
      {blogs.map(blog => (
        <div key={blog._id} className="blog-item">
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
