import './App.css';
import react from 'react';
import Header from "./components/Header";
import StartHero from "./components/StartHero";
import SecondHero from "./components/SecondHero";
import ThirdHero from "./components/ThirdHero";
import FourthHero from "./components/FourthHero";
import FifthHero from "./components/FifthHero";
import ReviewsHero from "./components/ReviewsHero";

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
        Download
    </div>
  );
}

export default App;
