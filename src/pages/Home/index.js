import React from 'react';
import FeaturedVideo from '../../components/FeaturedVideo';
import data from '../../data/data.json';
import Layout from '../../components/Layout';

const Home = () => {
  return (
    <>
      <Layout>
        <FeaturedVideo data={data} />
      </Layout>
    </>
  );
};

export default Home;
