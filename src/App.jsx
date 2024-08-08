import "./App.css";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="overflow-x-hidden tracking-tighter text-white antialiased bg-black">
      <Navbar />
      <HeroSection />
      <About />
    </main>
  );
}

export default App;
