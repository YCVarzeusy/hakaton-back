const { createClient } = require("../lib/supabase")


const listTechinique = async (req, res) => {
    try {
        const supabase = createClient({ req, res });
        const result = await supabase.from("technique_list")
            .select(`*`)
            .order("id",{ascending:false});
        res.send(JSON.stringify(result));
    } catch (error) {
        console.error('Error signing in: ', error);
        res.status(500).send('Internal Server Error');
    }
}


module.exports = { 
    listTechinique
};