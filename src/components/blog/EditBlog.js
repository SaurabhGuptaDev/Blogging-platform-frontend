import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import './EditBlog.css';

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const res = await api.get(`/blogs/${id}`);
        setFormData({
          title: res.data.title,
          content: res.data.content,
        });
      } catch (error) {
        console.error(error.response.data.message);
      }
    };
    fetchBlogPost();
  }, [id]);

  const { title, content } = formData;

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.put(`/blogs/${id}`, { title, content });
      console.log(res.data);
      navigate('/');
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <div className="edit-blog-container">
      <h2>Edit Blog</h2>
      <form onSubmit={handleSubmit} className="edit-blog-form">
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          onChange={handleChange}
          required
          className="form-input"
        />
        <textarea
          placeholder="Content"
          name="content"
          value={content}
          onChange={handleChange}
          rows="10"
          required
          className="form-input"
        />
        <button type="submit" className="submit-button">Update Blog</button>
      </form>
    </div>
  );
};

export default EditBlog;
