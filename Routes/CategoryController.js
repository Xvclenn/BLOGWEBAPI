const express = require("express");
const { v4: uuid } = require("uuid");
const router = express.Router();
const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    _id: { type: String, default: () => uuid() },
    name: String,
});

const Category = mongoose.model("Category", categorySchema);

// router.get("/", async (req, res) => {
//     const { q } = req.query;
//     const qregex = new RegExp(`${q}`, "i");
//     const list = await Category.find({ name: qregex }, "", {
//         sort: { name: 1 },
//     });
//     console.log(list);
//     res.json(list);
// });

// router.get("/:id", async (req, res) => {
//     const { id } = req.params;
//     // const one = await Category.findOne({ _id: id });
//     const one = await Category.findById(id);
//     res.json(one);
// });

router.get("/", async (req, res) => {
    const list = await Category.find({});

    res.json({ list });
});

// router.post("/", async (req, res) => {
//     const { name } = req.body;
//     console.log(req.body);

//     // const newCategory = new Category({
//     //     name: name,
//     //     _id: uuid(),
//     // });
//     // const result = await newCategory.save();

//     // console.log({ result });

//     await Category.create({
//         _id: uuid(),
//         name: name,
//     });

//     // res.json(result);
// });

router.post("/", async (req, res) => {
    const { name } = req.body;

    await Category.create({
        name,
    });

    res.sendStatus(201);
});

// router.delete("/:id", (req, res) => {
//     const { id } = req.params;
//     Category.deleteOne({ _id: id }).then(() => {
//         res.json({ deletedId: id });
//     });
// });

// router.put("/:id", (req, res) => {
//     const { id } = req.params;
//     const { name } = req.body;
//     Category.updateOne({ _id: id }, { name }).then(() => {
//         res.json({ updatedId: id });
//     });
// });

module.exports = {
    categoryRouter: router,
};
