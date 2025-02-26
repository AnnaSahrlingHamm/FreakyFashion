import express from "express";
import Database from "better-sqlite3";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const db = new Database('./db/freakyfashion.db'); 

app.use(cors());
app.use(express.json());

// 🟢 Hämta alla tasks
app.get("/api/products", (req, res) => {
    const tasks = db.prepare("SELECT * FROM tasks").all();
    res.json(tasks);
});

// 🟢 Hämta en enskild task
app.get("/api/products/:slug", (req, res) => {
    const task = db.prepare("SELECT * FROM tasks WHERE slug = ?").get(req.params.id);
    if (!task) {
        return res.status(404).json({ error: "Task not found" });
    }
    res.json(task);
});

// 🟢 Lägg till en ny task
app.post("/api/products", (req, res) => {
    const { image, item, brand, description, price, slug, sku } = req.body;
    const stmt = db.prepare("INSERT INTO products (image, item, brand, description, price, slug, sku) VALUES (?, ?, ?, ?, ?, ?, ?)");
    const result = stmt.run(image, item, brand, description, price, slug, sku);
    res.json({ id: result.lastInsertRowid, image, item, brand, description, price, slug, sku});
});

// 🟢 Uppdatera en task
app.put("/api/products/:id", (req, res) => {
    const { name, done } = req.body;
    const stmt = db.prepare("UPDATE tasks SET image = ?, item = ?, brand = ?, description = ?, price = ?, slug = ?, sku = ? WHERE id = ?");
    const result = stmt.run(image, item, brand, description, price, slug, sku, req.params.id);
    if (result.changes === 0) {
        return res.status(404).json({ error: "Product not found" });
    }
    res.json({ id: req.params.id, name, done });
});

// 🟢 Ta bort en task
app.delete("/api/tasks/:id", (req, res) => {
    const stmt = db.prepare("DELETE FROM tasks WHERE id = ?");
    const result = stmt.run(req.params.id);
    if (result.changes === 0) {
        return res.status(404).json({ error: "Task not found" });
    }
    res.json({ message: "Task deleted" });
});

// Starta servern
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
