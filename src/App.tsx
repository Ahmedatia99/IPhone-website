import Navbar from "./component/Navbar.jsx";
import Hero from "./component/Hero.jsx";
import Highlight from "./component/Highlight.jsx";
import Model from "./component/Model.jsx";
const App = () => {
  return (
    <div className="bg-black ">
      <Navbar />
      <Hero />
      <Highlight />
      <Model />
    </div>
  );
};

export default App;
