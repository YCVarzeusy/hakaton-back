const router = require("express").Router();

const { createClient } = require("../lib/supabase")


router.get("/", async  (req, res) => {
    try {
        const supabase = createClient({ req, res });
        const result = await supabase.auth.signInWithPassword({
            email: 'jkob1994@gmail.com',
            password: '123456'
        });
        res.send(JSON.stringify(result));
    } catch (error) {
        console.error('Error signing in: ', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router