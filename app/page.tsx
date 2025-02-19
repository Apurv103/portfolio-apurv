import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import ToolKit from "./components/ToolKit";
export default function Home() {
  return (
    <main className='min-h-screen bg-white dark:bg-white px-6'>
      <Hero />
      <Projects />
      <About />
      <ToolKit />
    </main>
  );
}
