import Hero from "../Components/Hero";
import Products from "../Components/Products";
import Deals from "../Components/Deals";
import Footer from "../Components/Footer";
import '../App.css'

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Deals />
      <Footer />
    </>
  );
}
