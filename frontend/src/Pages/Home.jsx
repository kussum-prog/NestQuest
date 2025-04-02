import React from 'react';
import Hero from '../Components/Home/Hero';
import Header from "../Components/Home/Header";

import Footer from '../Pages/Footer';
import Use from './Use';
import RentOutProperty from './RentOutProperty';
import Cards from '../Components/Home/Cards';



const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Cards />
      <RentOutProperty />
      <Use />
      <header />
      <Footer />
    </div>
  );
};

export default Home;
