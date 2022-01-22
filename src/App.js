import './App.css';
import react from 'react';
import Header from "./components/Header";
import StartHero from "./components/StartHero";
import SecondHero from "./components/SecondHero";
import ThirdHero from "./components/ThirdHero";
import FourthHero from "./components/FourthHero";
import FifthHero from "./components/FifthHero";
import ReviewsHero from "./components/ReviewsHero";
import EachLesser from "./components/EachLesser";
import UnicornsExist from "./components/UnicornsExist";
import End from "./components/End";

function App() {
  return (
    <div className="App">
        <Header></Header>
        <StartHero></StartHero>
        <SecondHero></SecondHero>
        <ThirdHero></ThirdHero>
        <FourthHero></FourthHero>
        <FifthHero></FifthHero>
        <ReviewsHero></ReviewsHero>
        <EachLesser></EachLesser>
        <UnicornsExist/>
        <End/>
    </div>
  );
}

export default App;
