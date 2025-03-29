import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import IconLinks from "../../components/IconLinks/IconLinks";
import Footer from "../../components/Footer/Footer";
import SearchResultsContainer from "../../components/SearchResultsContainer/SearchResultsContainer";

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("q") || ""; // Hämta 'q'-parametern

  return (
    <div className="container">
      <Header />
      <NavBar />
      <SearchResultsContainer searchTerm={searchTerm} />
      <IconLinks />
      <Footer />
    </div>
  );
};

export default SearchResults;