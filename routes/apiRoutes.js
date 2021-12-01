const db = require("../models");

module.exports = function(app) {
    app.post("/api/request", async (req, res) => {
        try {
            const data = await db.Request.create(req.body);
            res.json(data);
        } catch(err) { res.status(422).json({ msg: err}) }
    });

    app.post("/api/message", async (req, res) => {
        try {
            const data = await db.Message.create(req.body);
            res.json(data);
        } catch(err) { res.status(422).json({ msg: err}) }
    });
};