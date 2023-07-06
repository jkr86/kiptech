import Head from "next/head";
import CardsSection from "./components/CardsSection";
import Companies from "./components/Companies";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LocationSearch from "./components/LoactionSearch";
import NaavBar from "./components/NavBar";

export default function Home() {
  return (
    <main>
      <div className="max-w-[1220px] mx-auto">
        <NaavBar />
        <div className="mx-auto max-w-[1092px]">
          <Hero />
          <Companies />
          <LocationSearch />
          <CardsSection />
        </div>
        <Footer />
      </div>
    </main>
  );
}
