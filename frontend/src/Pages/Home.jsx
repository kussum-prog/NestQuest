import React from 'react';
import Hero from '../Components/Home/Hero';
import Header from "../Components/Home/Header";

import Footer from '../Pages/Footer';
import Use from './Use';
import RentOutProperty from './RentOutProperty';
import Cards from '../Components/Home/Cards';
import styles from '../styles';




const Home = () => {
  return (
    <div>

     {/* Navbar Section  */}
     <div className={`${styles.padding} ${styles.flexcenter}`}>
      <div className={` ${styles.boxWidth}`}>
        <Header />
        </div>
     </div>




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
