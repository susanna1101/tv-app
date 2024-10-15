import React from 'react';
import FeaturedVideo from '../../components/FeaturedVideo';
import data from '../../data/data.json';
import MainMenu from '../../components/Menu';

const Home = () => {
  return (
    <>
      <MainMenu />
      <FeaturedVideo data={data} />
    </>
  );
};

export default Home;
