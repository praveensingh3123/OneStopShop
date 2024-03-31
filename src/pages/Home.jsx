import FeatureProducts from '../components/FeatureProducts';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Trusted from '../components/Trusted';

const Home = () => {
    return (
        <>
            <HeroSection name={'One Stop Shop'} />
            <FeatureProducts />
            <Services />
            <Trusted />
        </>
    );
};

export default Home;
