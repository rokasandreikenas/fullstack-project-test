import express from "express";
import Category from "../models/Category";
import authMiddleware from "../middlewares/authMiddleware";

const router = express.Router();

router.get("/", authMiddleware, async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: "Error fetching categories", error: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(400).json({
      message: "Error creating category",
      error: (err as Error)?.message ?? err,
    });
  }
});

router.post("/all", async (req, res) => {
  try {
    await Category.insertMany([
      {
        name: "repair",
        color: "#ecbb3a",
        url: "https://img.icons8.com/?size=100&id=59827&format=png&color=000000",
      },
      {
        name: "painting",
        color: "#059e96",
        url: "https://img.icons8.com/?size=100&id=8141&format=png&color=000000",
      },
      {
        name: "shifting",
        color: "#e23e40",
        url: "https://img.icons8.com/?size=100&id=9341&format=png&color=000000",
      },
      {
        name: "plumbing",
        color: "#ea9319",
        url: "https://img.icons8.com/?size=100&id=24925&format=png&color=000000",
      },
      {
        name: "electric",
        color: "#1f71c5",
        url: "https://img.icons8.com/?size=100&id=9094&format=png&color=000000",
      },
    ]);
    res.status(201).json({ msg: "success" });
  } catch (error) {}
});

export default router;
