import express from "express";
import Database from "better-sqlite3";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();
const app = express();
const db = new Database('./db/freakyfashion.db'); 

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
app.use(express.json());
app.use(bodyParser.json());


const generateSlug = (item) => {
  return item
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '');
};


app.get("/api/products", (req, res) => {
  const searchTerm = req.query.q?.trim() || "";
  
  try {
    if (searchTerm) {
      const searchPattern = `%${searchTerm}%`;
      const products = db.prepare(`
        SELECT * FROM products 
        WHERE item LIKE ? OR description LIKE ? OR brand LIKE ?
      `).all(searchPattern, searchPattern, searchPattern);
      
      return res.json(products);
    }
    
    
    const products = db.prepare("SELECT * FROM products").all();
    res.json(products);
    
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/api/products/featured", (req, res) => {
  const products = db.prepare(`
    SELECT * FROM products 
    ORDER BY RANDOM()
    LIMIT 8
  `).all();
  res.json(products);
});


app.delete("/api/products/:id", (req, res) => {
  const { id } = req.params;
  
  try {
    
    const product = db.prepare("SELECT * FROM products WHERE id = ?").get(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    
    const stmt = db.prepare("DELETE FROM products WHERE id = ?");
    const result = stmt.run(id);
    
    if (result.changes > 0) {
      res.json({ success: true, message: "Product deleted successfully" });
    } else {
      res.status(500).json({ error: "Failed to delete product" });
    }
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: "Server error" });
  }
});


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


app.get("/api/products/:slug/similar", (req, res) => {
  const { slug } = req.params;
  
  const mainProduct = db.prepare(`
    SELECT * FROM products WHERE slug = ?
  `).get(slug);

  if (!mainProduct) {
    return res.status(404).json({ error: "Main product not found" });
  }

  
  const similarProducts = db.prepare(`
    SELECT * FROM products 
    WHERE id != ?
    ORDER BY RANDOM()
    LIMIT 5
  `).all(mainProduct.id);

  res.json(similarProducts);
});


app.post("/api/products", async (req, res) => {
  const { image, item, brand, description, price, sku, published } = req.body;
  const slug = generateSlug(item);

  try {
    const stmt = db.prepare(`
      INSERT INTO products (image, item, brand, description, price, sku, slug, Published)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const result = stmt.run(image, item, brand, description, price, sku, slug, published);
    res.json({ id: result.lastInsertRowid, ...req.body, slug });
  } catch (err) {
    console.error("Error inserting product:", err);
    res.status(500).json({ error: "Failed to insert product" });
  }
});



const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});