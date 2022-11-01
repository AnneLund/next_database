import executeQuery from "../Source/db";
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
await executeQuery(`UPDATE users SET username = '${username}' WHERE username = '${username}'`)
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
        const {username, password} = req.body

        if(!username || !password){
            res.status(422).json({message: "Invalid data"})
            return;
        }

        const user = await executeQuery(`INSERT INTO users(username, password) VALUES('${username}', '${password}')`)
        res.status(201).json({message: "Data created!", user})
        return;
    }


if(req.method === "GET") {

const user = await executeQuery(`SELECT * FROM users`)
res.status(201).json({message: "Data fetch", user})

return;
}
else{
    res.status(500).json({message: "Route not valid"})
}
}

export default handler;