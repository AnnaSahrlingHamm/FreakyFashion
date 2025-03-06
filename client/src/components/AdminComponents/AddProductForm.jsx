import React, { useState } from "react";
import styles from "./AddProductForm.module.css";

function AddProductForm() {
  const [formData, setFormData] = useState({
    item: "",         
    description: "",  
    image: "",        
    brand: "",        
    sku: "",          
    price: ""         
  });
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const product = { ...formData }; // Använd ett objekt, inte en array

    fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((resp) => {
        console.log("Product added");
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  };

  return (
    <section className={styles.storAdminContainer}>
      <header id={styles.adminheader}>
        <h3>Administration</h3>
      </header>
      <div className={styles.adminindexcontainer}>
        <nav>
          <h3>Produkter</h3>
        </nav>
        <article className={styles.newProductMain}>
          <h1 id={styles.newProductTitle}>Ny produkt</h1>
          <br />
          <form onSubmit={handleSubmit}>
          <h3>Namn</h3>
            <input
              type="text"
              name="item"
              placeholder="Ange namn"
              value={formData.item}
              onChange={handleInputChange}
              maxLength="25"
              required
            />

            <h3>Beskrivning</h3>
            <textarea
              name="description"
              placeholder="Ange beskrivning"
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>

            <h3>Bild</h3>
            <input
              type="url"
              name="image"
              placeholder="Lägg till bild-URL"
              value={formData.image}
              onChange={handleInputChange}
              required
            />

            <h3>Märke</h3>
            <input
              type="text"
              name="brand"
              placeholder="Ange märke"
              value={formData.brand}
              onChange={handleInputChange}
            />

            <h3>SKU</h3>
            <input
              type="text"
              name="sku"
              placeholder="Ange SKU (ABC123)"
              value={formData.sku}
              onChange={handleInputChange}
              pattern="[A-Z]{3}[0-9]{3}"
              required
              title="SKU måste vara i formatet ABC123 (tre bokstäver A-Z följt av tre siffror 0-9)"
            />


            <h3>Pris</h3>
            <input
              type="text"
              name="price"
              placeholder="Ange pris"
              value={formData.price}
              onChange={handleInputChange}
            />

            <br />
            <br />
            <button type="submit">Lägg till</button>
          </form>
        </article>
      </div>
    </section>
  );
}

export default AddProductForm;