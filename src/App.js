import './App.css';
import react from 'react';
import Header from "./components/Header/Header";
import StartHero from "./components/StartHero/StartHero";
import SecondHero from "./components/SecondHero/SecondHero";
import ThirdHero from "./components/ThirdHero/ThirdHero";
import FourthHero from "./components/FourthHero/FourthHero";
import FifthHero from "./components/FifthHero/FifthHero";
import ReviewsHero from "./components/ReviewsHero/ReviewsHero";
import EachLesser from "./components/EachLesser/EachLesser";
import UnicornsExist from "./components/UnicornsExist/UnicornsExist";
import End from "./components/End/End";

function App() {
  return (
    <div className="App">
        <Header/>
        <StartHero/>
        <SecondHero/>
        <ThirdHero/>
        <FourthHero/>
        <FifthHero/>
        <ReviewsHero/>
        <EachLesser/>
        <UnicornsExist/>
        <End/>
    </div>
  );
}

export default App;
