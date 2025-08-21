import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div id="hero" className="relative w-full h-screen">
      <Image
        src={"/hero3.jpg"}
        alt="Hero Background"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-purple-deep/80 via-purple-mid/60 to-purple-light/40"></div>

      <div className="relative z-10 container mx-auto px-6 text-center pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-[playfair] text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none mb-6">
            Creating Timeless Events
            <span className="block text-gold-accent">with Elegance</span>
          </h1>

          <p className="text-lg md:text-2xl text-purple-soft max-w-2xl mx-auto mb-10 leading-relaxed font-[montserrat] font-[500]">
            Transforming your special moments into extraordinary memories
            through luxury event planning and impeccable attention to detail.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#contact"
              className="border border-gold-accent bg-gold-accent text-purple-deep hover:bg-gold-accent/80 font-semibold px-8 py-2 text-lg rounded-xl transition-colors"
            >
              Plan Your Event
            </Link>
            <Link
              href="#gallery"
              className="border border-gold-accent text-gold-accent bg-white hover:bg-gold-accent/0 hover:text-white font-semibold px-8 py-2 text-lg rounded-xl transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
