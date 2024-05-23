const { createClient } = require("../lib/supabase")

const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
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


const readUserSession = async (req, res) => {
    try {
        const supabase = createClient({ req, res });
        const session = await supabase.auth.getSession();
        res.send(JSON.stringify(session));
    } catch (error) {
        console.error('Error getting profile: ', error);
        res.status(500).send('Internal Server Error');
    }
}


const LogOutSession = async (req, res) => {
    try {
        const supabase = createClient({ req, res });
        const session = await supabase.auth.getSession();
        await supabase.auth.refreshSession();
        await supabase.auth.admin.signOut(session.data.session?.access_token,"local");
        res.susccess("Sesion cerrada");
    } catch (error) {
        console.error('Error getting profile: ', error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = { 
    signin,
    readUserSession,
    LogOutSession
};