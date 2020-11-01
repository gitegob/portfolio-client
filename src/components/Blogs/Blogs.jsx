/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Blogs.css';
import { getAllBlogs, getBlogs } from '../../store/actions/blogs';
import Blog from '../Blog/Blog';
import { useState } from 'react';

const Blogs = () => {
  const { blogs } = useSelector((store) => store.blogs);
  const [more, setMore] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogs());
  }, []);
  const moreClicked = () => {
    dispatch(getAllBlogs());
    setMore(!more);
  };
  const lessClicked = () => {
    dispatch(getBlogs());
    setMore(!more);
  };
  return (
    <section className="padding" id="blogs">
      <h1 className="section-title">Blog Posts</h1>
      <div id="blogposts">
        {blogs.map((blog, i) => (
          <Blog blog={blog} key={blog.id || i} />
        ))}
      </div>
      <button className="text-center" id="btna-more" button="true" onClick={more ? lessClicked : moreClicked}>
        {more ? 'Less' : 'More ...'}
      </button>
    </section>
  );
};

export default Blogs;
