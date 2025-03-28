import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Freaky Fashion";
  }, []);

  return (
    <div className="container">
      <Header />
      <NavBar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Index;

