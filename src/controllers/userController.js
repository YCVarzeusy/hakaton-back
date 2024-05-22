const { createClient } = require("../lib/supabase")

const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        console.log('---------------------------------email: ', email);
        const supabase = createClient({ req, res });
        const result = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });
        res.send(JSON.stringify(result));
    } catch (error) {
        console.error('Error signing in: ', error);
        res.status(500).send('Internal Server Error');
    }

}



const profile = async (req, res) => {
    try {
        const supabase = createClient({ req, res });
        const user = supabase.auth.user();
        res.send(JSON.stringify(user));
    } catch (error) {
        console.error('Error getting profile: ', error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = { signin };