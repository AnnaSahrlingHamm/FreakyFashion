import express from "express";
import Database from "better-sqlite3";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();
const app = express();
const db = new Database('./db/freakyfashion.db'); 

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Hjälpfunktion för att generera slug
const generateSlug = (item) => {
  return item
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '');
};

// 1. Hämta alla produkter
app.get("/api/products", (req, res) => {
  const searchTerm = req.query.q || "";
  
  if (searchTerm) {
    // Sökfunktionalitet
    const searchPattern = `%${searchTerm}%`;
    const products = db.prepare(`
      SELECT * FROM products 
      WHERE item LIKE ? OR description LIKE ?
    `).all(searchPattern, searchPattern);
    return res.json(products);
  }
  
  // Vanlig hämtning av alla produkter
  const products = db.prepare("SELECT * FROM products").all();
  res.json(products);
});

app.get("/api/products/featured", (req, res) => {
  const products = db.prepare(`
    SELECT * FROM products 
    ORDER BY RANDOM()
    LIMIT 8
  `).all();
  res.json(products);
});


// 2. Hämta en enskild produkt via slug
app.get("/api/products/:slug", (req, res) => {
  const { slug } = req.params;
  console.log(`Fetching product with slug: ${slug}`);
  
  const product = db.prepare(`
    SELECT * FROM products 
    WHERE slug = ?
  `).get(slug);

  if (!product) {
    console.log(`Product not found with slug: ${slug}`);
    return res.status(404).json({ error: "Product not found" });
  }
  
  res.json(product);
});

// 3. Hämta liknande produkter (endast en implementation)
app.get("/api/products/:slug/similar", (req, res) => {
  const { slug } = req.params;
  
  const mainProduct = db.prepare(`
    SELECT * FROM products WHERE slug = ?
  `).get(slug);

  if (!mainProduct) {
    return res.status(404).json({ error: "Main product not found" });
  }

  // Hämta 5 slumpmässiga produkter (exkludera huvudprodukten)
  const similarProducts = db.prepare(`
    SELECT * FROM products 
    WHERE id != ?
    ORDER BY RANDOM()
    LIMIT 5
  `).all(mainProduct.id);

  res.json(similarProducts);
});

// Övriga routes (POST, PUT, DELETE)
app.post("/api/products", async (req, res) => {
  const { image, item, brand, description, price, sku } = req.body;
  const slug = generateSlug(item);
  
  const stmt = db.prepare(`
    INSERT INTO products (image, item, brand, description, price, sku, slug)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);
  
  const result = stmt.run(image, item, brand, description, price, sku, slug);
  res.json({ id: result.lastInsertRowid, ...req.body, slug });
});

// Starta servern
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});