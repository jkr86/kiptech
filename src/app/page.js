import Head from "next/head";
import Companies from "@/app/components/Companies";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar1";
import LocationAndCards from "@/app/components/LocationAndCards";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen flex flex-col items-between max-w-[1220px] mx-auto">
        <Navbar />
        <div className="flex-1 mx-auto max-w-[1092px]">
          <Hero />
          <Companies />
          <LocationAndCards />
        </div>
        <Footer />
      </div>
    </main>
  );
}
