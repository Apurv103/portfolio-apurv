import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import ToolKit from "./components/ToolKit";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import FloatingNavbar from "./components/FloatingNavbar";
export default function Home() {
  return (
    <main className='min-h-screen bg-blue-50 '>
      <FloatingNavbar />
      <Hero />
      <Experience />
      <Projects />
      <About />
      <ToolKit />
      <Contact />
    </main>
  );
}
