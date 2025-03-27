import React from 'react';
import Hero from '../Components/Home/Hero';
import Header from "../Components/Home/Header";
import Cards from '../Components/Cards';
import Footer from '../Pages/Footer';
import Use from './Use';


const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Cards />
      <Use />
      <Footer />
    </div>
  );
};

export default Home;
