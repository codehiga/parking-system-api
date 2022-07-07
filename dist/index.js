import express from "express";
const app = express();
const PORT = 8080;
app.get("/", (req, res) => {
    res.send("API Online!");
});
app.listen(PORT, () => {
    console.log("ON!");
});
