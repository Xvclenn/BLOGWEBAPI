const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { categoryRouter } = require("./routes/categoryController");

mongoose
    .connect(
        "mongodb+srv://Xvclenn:WtIG4NdR4sUm7c9y@blog-db.jjljeeg.mongodb.net/blog"
    )
    .then(() => console.log("Connected!"));

const port = 8000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/categories", categoryRouter);

const user = new mongoose.Schema({
    name: String,
});

const User = mongoose.model("User", user);

app.get("/test-mongoose", (req, res) => {
    User.create({
        name: "Baldan",
        email: "baldan@horl.mn",
        age: 18,
        createdAt: new Date(),
    });

    res.json({});
});

app.listen(port, () => {
    console.log("App is listering at port", port);
});
