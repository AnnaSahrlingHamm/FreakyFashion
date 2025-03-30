import React, { useState } from "react";
import styles from "./AddProductForm.module.css";

function AddProductForm() {
  const [formData, setFormData] = useState({
    item: "",
    description: "",
    image: "",
    brand: "",
    sku: "",
    price: "",
    published: "" // Nytt fält för publiceringsdatum
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {

    console.log("Skickar produkt:", product);

    event.preventDefault();
  
    // Konvertera datumformat från yyyy-mm-dd till dd-mm-yyyy
    const [year, month, day] = formData.published.split("-");
    const formattedDate = `${day}-${month}-${year}`;
  
    const product = { 
      ...formData, 
      published: formattedDate // Uppdaterat datumformat
    };
  
    fetch("http://localhost:8000/api/products", {
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
      </header>
      <div className={styles.adminindexcontainer}>
        <nav>
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

              <h3>Publiceringsdatum</h3>
              <div className={styles.dateContainer}>
                <input
                  type="date"
                  name="published"
                  value={formData.published}
                  onChange={handleInputChange}
                  required
                />
              <span className={styles.calendarIcon}>📅</span> 
              </div>


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