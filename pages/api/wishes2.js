import executeQuery from "../../Source/db";
import NextCors from 'nextjs-cors'

async function handler(req, res) {

    await NextCors(req, res, {
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccesStatus: 200,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
    })

    if(req.method === "PUT") {
        const {id, købt} = req.body
        if(!id || !købt){
            res.status(422).json({message: "Invalid data"})
            return;
        }
await executeQuery(`UPDATE wishes2 SET købt = '${købt}' WHERE id = '${id}'`)
res.status(201).json({message: "Data deleted!"})
return;
    }

    if(req.method === "DELETE") {
        const {id} = req.body
        if(!id){
            res.status(422).json({message: "Invalid data"})
            return;
        }
await executeQuery(`DELETE FROM wishes2 WHERE id = '${id}'`)
res.status(201).json({message: "Data deleted!"})
return;
    }


    if(req.method === "POST") {
        const {titel, description, image, url, købt} = req.body

        // if(!username || !password){
        //     res.status(422).json({message: "Invalid data"})
        //     return;
        // }

        const data = await executeQuery(`INSERT INTO wishes2(titel, description, image, url, købt) VALUES('${titel}', '${description}', '${image}', '${url}', '${købt}')`)
        res.status(201).json({message: "Data created!", data})
        return;
    }

if(req.method === "GET") {
const data = await executeQuery(`SELECT * FROM wishes2`)
res.status(201).json({message: "Data fetch", data})
return;
}
else{
    res.status(500).json({message: "Route not valid"})
}
}

export default handler;