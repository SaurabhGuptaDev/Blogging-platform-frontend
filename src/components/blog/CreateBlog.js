import React, { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import api from '../../services/api';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './CreateBlog.css';

const CreateBlog = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  const onEditorStateChange = editorState => setEditorState(editorState);

  const handleSubmit = async e => {
    e.preventDefault();
    const htmlContent = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    try {
      const res = await api.post('/blogs', {
        title: 'Sample Title',  // Replace with form input value
        content: htmlContent,   // HTML content from editor
      });
      console.log(res.data);
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <div className="create-blog-container">
      <h2>Create Blog</h2>
      <form onSubmit={handleSubmit} className="create-blog-form">
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={onEditorStateChange}
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default CreateBlog;
