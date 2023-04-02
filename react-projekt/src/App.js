import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import FirstSection from "./components/FirstSection";
import AboutSection from "./components/AboutSection";
import OfferSection from "./components/OfferSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FirstSection />
      <AboutSection />
      <OfferSection />
      <Footer />
    </div>
  );
}

export default App;
