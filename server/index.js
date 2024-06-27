
import cors from "cors";
import express from "express";

const app = express();


app.use(express.json({limit: "10mb"}));

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

app.get("/", (req, res) => {
    res.json("Hello Vite + React!");
});

app.use(cors({
  origin: "https://vercel2-frontend.vercel.app", // Add the correct origin here
  methods: ["GET", "POST"], // Adjust methods according to your needs
  credentials: true // Enable credentials
}));

  app.get("/hi", (req, res) => {
    res.json({ message: "yaya" });
  });

app.listen(3001, () => {
    console.log("Server running on port 3001");
    });