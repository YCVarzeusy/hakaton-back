const { createClient } = require("../lib/supabase")

const listFighters = async (req, res) => {
    try {
        const supabase = createClient({ req, res });
        const result = await supabase.from("fighter")
            .select(`*`).eq("state", true)
            .order("id",{ascending:false});
        res.send(JSON.stringify(result));

    } catch (error) {
        console.error('Error signing in: ', error);
        res.status(500).send('Internal Server Error');
    }

}


const ReadFighters = async (req, res) => {
    const { id } = req.params;
    try {
        const supabase = createClient({ req, res });
        const result = await supabase.from("fighter")
            .select(`*`).eq(
                "id", id
            ).eq("state", true).single();
        res.send(JSON.stringify(result));

    } catch (error) {
        console.error('Error signing in: ', error);
        res.status(500).send('Internal Server Error');
    }

}


const listLevelFighter = async (req, res) => {
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


module.exports = { 
    listFighters,
    ReadFighters,
    listLevels
};