const { createClient } = require("../lib/supabase")

const listLevelByIdFighter = async (req, res) => {
    const { id } = req.params;
    try {
        const supabase = createClient({ req, res });
        const result = await supabase.from("level")
            .select(`
                *,
                technique:technique_id(*)
            `)
            .eq("state", true)
            .eq("fighter_id", id)
            .order("id",{ascending:false});
        res.send(JSON.stringify(result));

    } catch (error) {
        console.error('Error signing in: ', error);
        res.status(500).send('Internal Server Error');
    }

}

const insertLevelToFighter = async (req, res) => {
    const id = req.params.id
    try {
        const supabase = createClient({ req, res });
        const result = await supabase.from("level")
            .insert({
                fighter_id: id,
                power: req.body.power,
                technique_id: req.body.technique_id
            });
        res.send(JSON.stringify(result));

    } catch (error) {
        console.error('Error signing in: ', error);
        res.status(500).send('Internal Server Error');
    }
}


const updateLevelToFighter = async (req, res) => {
    const id = req.params.id
    try {
        const supabase = createClient({ req, res });
        const result = await supabase.from("level")
            .update({
                fighter_id: req.body.power,
                power: req.body.power,
                technique_id: req.body.technique_id
            }).eq("id", id);
        res.send(JSON.stringify(result));

    } catch (error) {
        console.error('Error signing in: ', error);
        res.status(500).send('Internal Server Error');
    }
}





module.exports = { 
    listLevelByIdFighter,
    insertLevelToFighter,
    updateLevelToFighter
};