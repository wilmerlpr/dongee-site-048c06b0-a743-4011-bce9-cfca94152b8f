import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Plans from './components/Plans';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Plans />
      </main>
      <Footer />
    </div>
  );
}

export default App;