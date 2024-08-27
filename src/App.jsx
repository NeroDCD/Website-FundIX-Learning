import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Benefits from "./components/Benefits";
import NewsLetter from "./components/NewsLetter";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="scrollbar overflow-auto h-screen">
      <Navbar />
      <Hero />
      <Analytics />
      <Benefits />
      <NewsLetter />
      <Pricing />
      <Footer />
    </div>
  );
};

export default App;
