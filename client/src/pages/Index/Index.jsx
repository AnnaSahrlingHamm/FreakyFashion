import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import NavBar from "../../components/NavBar/NavBar";
import Spots from "../../components/Spots/Spots";
import Footer from "../../components/Footer/Footer";
import IconLinks from "../../components/IconLinks/IconLinks";
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";

const Index = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = "Freaky Fashion";
    console.log("Test - Index komponent renderas"); 

    const fetchFeaturedProducts = async () => {
      try {
        const response = await fetch("/api/products/featured");
        if (!response.ok) {
          throw new Error('Något gick fel vid hämtning av produkter');
        }
        const data = await response.json();
        setFeaturedProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  if (loading) return <p>Laddar produkter...</p>;
  if (error) return <p>Fel: {error}</p>;

  return (
    <div className="container">
      <Header />
      <NavBar />
      <Hero />
      <Spots />
      <ProductDisplay products={featuredProducts} /> 
      <IconLinks />
      <Footer />
    </div>
  );
};
export default Index;
