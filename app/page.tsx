import About from "@/components/About";
import AmbientBackground from "@/components/AmbientBackground";
import Contact from "@/components/Contact";
import Content from "@/components/Content";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import Now from "@/components/Now";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";

export default function Home() {
  return (
    <>
      <Intro />
      <AmbientBackground />
      <Cursor />
      <Navbar />
      <main id="main" className="relative z-10 overflow-x-clip">
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Content />
        <Stack />
        <Now />
        <Contact />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
      <div className="site-grain" aria-hidden="true" />
    </>
  );
}
