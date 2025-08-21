import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className=" h-screen">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
