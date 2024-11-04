const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use("/components", express.static(path.join(__dirname, "components")));
app.use("/pages", express.static(path.join(__dirname, "pages")));
app.use("/script", express.static(path.join(__dirname, "script")));
app.use("/style", express.static(path.join(__dirname, "style")));
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.use((req, res) => {
  res.status(404).send("404: Not Found");
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
