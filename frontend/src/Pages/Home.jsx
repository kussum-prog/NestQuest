import React from 'react';
import Hero from '../Components/Home/Hero';
import Header from "../Components/Home/Header";
import Cards from '../Components/Cards';
import Footer from '../Pages/Footer';
import Use from './Use';
import RentOutProperty from './RentOutProperty';



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
