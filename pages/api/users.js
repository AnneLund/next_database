import executeQuery from "../../Source/db";
import NextCors from 'nextjs-cors'

async function handler(req, res) {

    await NextCors(req, res, {
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccesStatus: 200,
    })

    if(req.method === "PUT") {
        const {username, password} = req.body
        if(!username || !password){
            res.status(422).json({message: "Invalid data"})
            return;
        }
await executeQuery(`UPDATE users SET username = '${username}' WHERE id = '${username}'`)
res.status(201).json({message: "Data updated!"})
return;
    }

    if(req.method === "DELETE") {
        const {id} = req.body
        if(!id){
            res.status(422).json({message: "Invalid data"})
            return;
        }
await executeQuery(`DELETE FROM users WHERE id = '${id}'`)
res.status(201).json({message: "Data deleted!"})
return;
    }

if(req.method === "POST") {
    const {username} = req.body.username
    const {password} = req.body.password

    const data = await executeQuery(`SELECT * FROM users WHERE username = ? AND password = ?`)
    [username, password]
    res.status(201).json({message: "Data created!", data})

    if(err){
        res.status(422).json({err: "Invalid data"})
        return;
    }

    if (result.length > 0) {
        res.status( result);
        }else({message: "Wrong username/password comination!"});
}




if(req.method === "GET") {
const data = await executeQuery(`SELECT * FROM users`)
res.status(201).json({message: "Data fetch", data})
return;
}
else{
    res.status(500).json({message: "Route not valid"})
}
}

export default handler;