import executeQuery from "../../Source/db";

async function handler(req, res) {

    if(req.method === "DELETE") {
        const {title} = req.body
        if(!title){
            res.status(422).json({message: "Invalid data"})
            return;
        }
await executeQuery(`DELETE FROM wishes WHERE titel = '${title}'`)
res.status(201).json({message: "Data deleted!"})
return;
    }

if(req.method === "POST") {
    const {title} = req.body
    if(!title){
        res.status(422).json({message: "Invalid data"})
        return;
    }
    const data = await executeQuery(`INSERT INTO wishes(titel) VALUES('${title}')`)
    res.status(201).json({message: "Data created!", data})
    return;
}

if(req.method === "GET") {
const data = await executeQuery(`SELECT * FROM wishes`)
res.status(201).json({message: "Data fetch", data})
return;
}
else{
    res.status(500).json({message: "Route not valid"})
}
}

export default handler;