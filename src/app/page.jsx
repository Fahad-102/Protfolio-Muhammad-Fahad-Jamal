import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Technologies from "@/components/sections/Technologies";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Qualification from "@/components/sections/Qualification";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Technologies />
      <About />
      <Projects />
      <Skills />
      <Qualification />
      <Contact />
      <Footer />
    </main>
  );
}
