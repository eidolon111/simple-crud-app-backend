import express from "express";
import mongoose from "mongoose";
import Product from "./modules/product.modules.js";
import productRoute from "./routes/product.route.js";
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// route
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("WELCOME TO NODE API Server");
});

mongoose
  .connect(
    "mongodb+srv://aleisaiah12:GP1uFVjZ1nEYCSNI@cluster0.9rhxx.mongodb.net/Node-Api"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
