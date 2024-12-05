import Navbar from "./component/Navbar.jsx";
import Hero from "./component/Hero.jsx";
import Highlight from "./component/Highlight.jsx";
import Model from "./component/Model.jsx";
import Feature from "./component/Feature.jsx";
import Footer from "./component/Footer.jsx";
import HowItWorks from "./component/HowItWorks.jsx";
const App = () => {
  return (
    <div className="bg-black ">
      <Navbar />
      <Hero />
      <Highlight />
      <Model />
      <Feature />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default App;
