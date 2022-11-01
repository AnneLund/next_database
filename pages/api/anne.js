import executeQuery from "../../../Source/db";
import NextCors from 'nextjs-cors'

async function handler(req, res) {

    await NextCors(req, res, {
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccesStatus: 200,
    })

    // if(req.method === "PUT") {
    //     const {id, købt} = req.body

    //     if (!id || !købt){
    //         res.status(422).json({message: "Invalid id!"})
    //         return;
    //     }

    //     await executeQuery(`UPDATE anne SET købt = '${købt}' WHERE id = '${id}'`)
    //     res.status(201).json({message: "Data updated!"})
  
    // }

    if(req.method === "PUT") {
        const {titel, image, id, url, description, købt} = req.body
        console.log(req.body)
        if(!id){
            res.status(422).json({message: "Invalid id!"})
            return;
        }

        if(købt && id && !titel && !description && !url && !image) {
            await executeQuery(`UPDATE anne SET købt = '${købt}' WHERE id = '${id}'`)
            res.status(201).json({message: "'Købt' opdateret!"})
            return;
                }  

          else if (titel && description && url && image && id) {
       await executeQuery(`UPDATE anne SET titel = '${titel}', image = '${image}', url = '${url}', description = '${description}' WHERE id = '${id}'`)
        res.status(201).json({message: "Data updated!"})
        return;
        }          
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
        const {titel, description, image, url, købt} = req.body

        // if(!username || !password){
        //     res.status(422).json({message: "Invalid data"})
        //     return;
        // }

        const data = await executeQuery(`INSERT INTO anne(titel, description, image, url, købt) VALUES('${titel}', '${description}', '${image}', '${url}', '${købt}')`)
        res.status(201).json({message: "Data created!", data})
        return;
    }

if(req.method === "GET") {
    const {id, titel, description, image, url, købt} = req.body
const data = await executeQuery(`SELECT * FROM anne WHERE id = '${id}'`)
res.status(201).json({message: "Data fetch", data})
return;
}
else{
    res.status(500).json({message: "Route not valid"})
}
}

export default handler;