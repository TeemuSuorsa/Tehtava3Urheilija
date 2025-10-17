require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

// CORS asetukset
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Content-type", "application/json");
  next();
});

// Reitit
app.use("/urheilija", require("./routes/uRoutes"));

// Virheenkäsittelijä
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({ message: "Jokin meni pieleen" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Palvelin käynnissä portissa ${PORT}`));
