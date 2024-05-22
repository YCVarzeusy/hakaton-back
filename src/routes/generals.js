const router = require("express").Router();

const { createClient } = require("../lib/supabase")


router.get("/", async  (req, res) => {
    res.send("Hello World");
});

module.exports = router