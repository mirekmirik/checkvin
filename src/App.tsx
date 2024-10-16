import Header from "./components/Header/Header";
import FeaturesSection from "./components/FeaturesSection/FeatureSection";
import HeroSection from "./components/HeroSection/HeroSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <HeroSection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
