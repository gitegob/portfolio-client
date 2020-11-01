import React from 'react';
import './Blog.css';
import Icon from '../#Shared/Icon/Icon';
import Comment from '../Comment/Comment';

const Blog = ({ blog }) => {
  return (
    <>
      <div className="blogpost padding margin">
        <a href={blog.link || '#'} target="_blank" rel="noopener noreferrer">
          <h3 className="blog-title text-center">{blog.title}</h3>
        </a>
        <p className="blog-body">{blog.body}</p>
        <div className="blog-bottom">
          <h4 className="blog-authorName">{blog.authorName || 'Brian Gitego'}</h4>
          <div className="blog-date">Posted {blog.createdAt}</div>
        </div>
        <div className="reactions">
          <div>
            <Icon solid name="fa-eye" />
            <div className="text-center">50</div>
          </div>
          <Comment blog={blog} />
        </div>
      </div>
    </>
  );
};

export default Blog;
