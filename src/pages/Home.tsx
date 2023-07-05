import VideoBG from 'components/common/VideoBG';
import About from 'components/Home/About';
import Connect from 'components/Home/Connect';
import Ecosystem from 'components/Home/Ecosystem';
import Features from 'components/Home/Features';
import Footer from 'components/Home/Footer';
import Hero from 'components/Home/Hero';
import HomeNav from 'components/Home/HomeNav';
import Team from 'components/Home/Team';
import TechStack from 'components/Home/TechStack';

function Home() {
  return (
    <div className="flex flex-col w-full items-center scroll-smooth relative">
      <HomeNav />
      <Hero />
      <About />
      <Features />
      <Ecosystem />
      <TechStack />
      <Team />
      <Connect />
      <Footer />
      <VideoBG />
    </div>
  );
}

export default Home;
