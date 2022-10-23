import executeQuery from "../../Source/db";
import NextCors from 'nextjs-cors'

async function handler(req, res) {

    await NextCors(req, res, {
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccesStatus: 200,
    })

    if(req.method === "PUT") {
        const {id, købt} = req.body
        if(!id || !købt){
            res.status(422).json({message: "Invalid data"})
            return;
        }
await executeQuery(`UPDATE anne SET købt = '${købt}' WHERE id = '${id}'`)
res.status(201).json({message: "Data deleted!"})
return;
    }

    if(req.method === "DELETE") {
        const {id} = req.body
        if(!id){
            res.status(422).json({message: "Invalid data"})
            return;
        }
await executeQuery(`DELETE FROM anne WHERE id = '${id}'`)
res.status(201).json({message: "Data deleted!"})
return;
    }

    if(req.method === "POST") {
        const {titel, image, url, id, købt} = req.body

        if(!username || !password){
            res.status(422).json({message: "Invalid data"})
            return;
        }

        const data = await executeQuery(`INSERT INTO anne(titel, image, url, id, købt) VALUES('${titel}', '${image}', '${url}', '${id}', '${købt}')`)
        res.status(201).json({message: "Data created!", data})
        return;
    }

if(req.method === "GET") {
const data = await executeQuery(`SELECT * FROM anne`)
res.status(201).json({message: "Data fetch", data})
return;
}
else{
    res.status(500).json({message: "Route not valid"})
}
}

export default handler;