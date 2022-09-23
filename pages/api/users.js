import executeQuery from "../../Source/db";
import NextCors from 'nextjs-cors'

async function handler(req, res) {

    await NextCors(req, res, {
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccesStatus: 200,
    })

    if(req.method === "PUT") {
        const {id, username} = req.body
        if(!id || !username){
            res.status(422).json({message: "Invalid data"})
            return;
        }
await executeQuery(`UPDATE users SET username = '${username}' WHERE id = '${id}'`)
res.status(201).json({message: "Data deleted!"})
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
    const {id} = req.body
    if(!id){
        res.status(422).json({message: "Invalid data"})
        return;
    }
    const data = await executeQuery(`INSERT INTO users(id) VALUES('${id}')`)
    res.status(201).json({message: "Data created!", data})
    return;
}

if(req.method === "GET") {
const {username, password} = req.headers
if (username && password) {
const data = await executeQuery(`SELECT * FROM users WHERE username = '${username}'`)
if (password == data.password) {
res.status(201).json({message: "Data fetch", data})
return;     
}
else{
    res.status(401).json({message: "Kode og bruger passer ikke sammen!"})
}   
} 

}

else{
    res.status(500).json({message: "Route not valid"})
}
}

export default handler;