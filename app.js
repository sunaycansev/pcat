const express = require("express");

const app = express();

app.get("/", (req, res) => {
  const photo = {
    id: 1,
    name: "Photo name",
    description: "Photo descripton",
  };
  res.send(photo);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} portudna başlatıldı`);
});
