import About from "@/components/About";
import Contact from "@/components/Contact";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import Now from "@/components/Now";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="relative overflow-x-clip">
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Content />
        <Stack />
        <Now />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
