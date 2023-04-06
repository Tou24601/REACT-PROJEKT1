import "./App.css";
import Navbar from "./components/Navbar";
import FirstSection from "./components/FirstSection";
import AboutSection from "./components/AboutSection";
import OfferSection from "./components/OfferSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <FirstSection />
      <AboutSection />
      <OfferSection />
      <Footer />
    </>
  );
};

export default App;
