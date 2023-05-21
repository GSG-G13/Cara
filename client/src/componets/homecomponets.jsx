import React from 'react';
import Hero from './hero';
import Advcat from './advcat';
import Products from './products';
import RepairServices from './repairservices';
import NewArrivals from './newarrivals';
import StaticAdv from './staticadv';
import NewseLetter from './newseletter';


const HomeComponets = () => {
  return (
    <>
      <Hero />
      <Advcat />
      <Products />
      <RepairServices />
      <NewArrivals />
      <StaticAdv />
      <NewseLetter />
    </>
  );
};

export default HomeComponets;
