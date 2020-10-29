import React from 'react';
import NavBar from '../components/#Shared/NavBar/NavBar';
import SideNav from '../components/#Shared/SideNav/SideNav';
import Blogs from '../components/Blogs/Blogs';
import ContactMe from '../components/ContactMe/ContactMe';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';

const Index = () => {
  return (
    <>
      <div className="not-footer" id="home">
        <NavBar />
        <SideNav />
        <Header />
        <main>
          <Skills />
          <Projects />
          <Blogs />
          <ContactMe />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Index;
