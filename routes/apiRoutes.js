const db = require("../models");
const express = require('express');
const router = express.Router();

router.post("/api/request", async (req, res) => {
    try {
        const data = await db.Request.create(req.body);
        res.json(data);
    } catch(err) { res.status(422).json({ msg: err}) }
});

router.post("/api/message", async (req, res) => {
    try {
        const data = await db.Message.create(req.body);
        res.json(data);
    } catch(err) { res.status(422).json({ msg: err}) }
});

module.exports = router;