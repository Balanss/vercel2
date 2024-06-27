
import cors from "cors";
import express from "express";

const app = express();

app.use(cors({
    origin: "https://vercel2-frontend.vercel.app", // Add the correct origin here
    methods: ["GET", "POST"], // Adjust methods according to your needs
    credentials: true // Enable credentials
  }));
  

app.use(express.json({limit: "10mb"}));




app.get("/", (req, res) => {
    res.json("Hello Vite + React!");
});


 app.get("/hi", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "https://vercel2-frontend.vercel.app");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.json({ message: "yaya" });
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
    });