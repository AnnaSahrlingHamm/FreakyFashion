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

// 🟢 Hämta alla produkter
app.get("/api/products", (req, res) => {
    const products = db.prepare("SELECT * FROM products").all();
    res.json(products);
});

// 🟢 Hämta en enskild produkt
app.get("/api/products/:slug", (req, res) => {
    const product = db.prepare("SELECT * FROM products WHERE slug = ?").get(req.params.id);
    if (!product) {
        return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
});

// 🟢 Lägg till en ny produkt
app.post("/api/products", (req, res) => {
    console.log("Inkommande data:", req.body);
    const { image, item, brand, description, price, slug, sku } = req.body;
    const stmt = db.prepare("INSERT INTO products (image, item, brand, description, price, slug, sku) VALUES (?, ?, ?, ?, ?, ?, ?)");
    const result = stmt.run(image, item, brand, description, price, slug, sku);
    res.json({ id: result.lastInsertRowid, image, item, brand, description, price, slug, sku});
});

// 🟢 Uppdatera en produkt
app.put("/api/products/:id", (req, res) => {
    const { name, done } = req.body;
    const stmt = db.prepare("UPDATE tasks SET image = ?, item = ?, brand = ?, description = ?, price = ?, slug = ?, sku = ? WHERE id = ?");
    const result = stmt.run(image, item, brand, description, price, slug, sku, req.params.id);
    if (result.changes === 0) {
        return res.status(404).json({ error: "Product not found" });
    }
    res.json({ id: req.params.id, name, done });
});

// 🟢 Ta bort en produkt
app.delete("/api/products/:id", (req, res) => {
    const stmt = db.prepare("DELETE FROM products WHERE id = ?");
    const result = stmt.run(req.params.id);
    if (result.changes === 0) {
        return res.status(404).json({ error: "Product not found" });
    }
    res.json({ message: "Product deleted" });
});

app.post("/api/customers", (req, res) => {
    const { first_name, last_name, email, address, postal_code, city, phone_number } = req.body; 
    const stmt = db.prepare("INSERT INTO customers (first_name, last_name, email, address, postal_code, city, phone_number) VALUES (?, ?, ?, ?, ?, ?, ?)");
    const result = stmt.run(first_name, last_name, email, address, postal_code, city, phone_number);
    res.json({ id: result.lastInsertRowid, first_name, last_name, email, address, postal_code, city, phone_number});
});

// Starta servern
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
