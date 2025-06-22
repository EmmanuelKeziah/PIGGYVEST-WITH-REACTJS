import './App.css'
import Header from './components/header/Header.jsx';
import Hero1Block from './components/hero1main/Hero1Block.jsx';
import MiniHero from './components/hero2security/MiniHero.jsx';
import HeroCard from "./components/hero3cards/HeroCard.jsx";
import Investment from './components/hero4investments/Investment.jsx';
import Meet from './components/hero5meetsaver/Meet.jsx';
// import TestimonialLeft from "./components/hero6testimonials/TestimonialLeft";
// import TestimonialRight from "./components/hero6testimonials/TestimonialRight";
// import Sponsors from './components/hero7sponsors/Sponsors.jsx';
// import Extras from './components/hero8extras/Extras.jsx';
// import Footer from './components/footer/Footer.jsx';

const App = () => {

  return (
    <div className='mainContainer'>
      <Header />
      <Hero1Block />
      <MiniHero />
      <HeroCard />
      <Investment />
      <Meet />
      {/* <TestimonialLeft  /> */}
      {/* <TestimonialRight /> */}
      {/* <Sponsors /> */}
      {/* <Extras /> */}
      {/* <Footer /> */}

        
    </div>
  );
}

export default App
