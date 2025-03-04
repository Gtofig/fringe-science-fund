import { Helmet } from 'react-helmet';
import Hero from '../components/sections/Hero';
import Mission from '../components/sections/Mission';
import ForScientists from '../components/sections/ForScientists';
import ForInvestors from '../components/sections/ForInvestors';
import CTA from '../components/sections/CTA';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Fringe Science Fund - Funding the Next Scientific Revolution</title>
        <meta
          name="description"
          content="The Fringe Science Fund supports bold, unconventional research that challenges mainstream orthodoxy and pushes the boundaries of human knowledge."
        />
      </Helmet>

      <Hero />
      <Mission />
      <ForScientists />
      <ForInvestors />
      <CTA />
    </>
  );
};

export default Home;
