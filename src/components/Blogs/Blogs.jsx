import React from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
  return (
    <section className="padding" id="blogs">
      <h1 className="section-title">Penny for my thoughts?</h1>
      <div id="blogposts">
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </div>
      <a href="#blogs" className="text-center" id="btna-more" button="true">
        More ...
      </a>
    </section>
  );
};

export default Blogs;
