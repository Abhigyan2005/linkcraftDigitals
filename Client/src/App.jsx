import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import "./css/App.css";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/src/javascript/animation.js";
    script.id = "animation-script";

    if (!document.getElementById("animation-script")) {
      document.body.append(script);
    }
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
