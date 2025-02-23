import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import ToolKit from "./components/ToolKit";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className='min-h-screen bg-blue-50'>
      <Hero />
      <Experience />
      <Projects />
      <About />
      <ToolKit />
      <Contact />
      <Footer />
    </main>
  );
}
