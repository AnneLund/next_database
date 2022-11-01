import executeQuery from "../../../Source/db";
import NextCors from 'nextjs-cors'

async function handler (req, res) {
await NextCors(req, res, {
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccesStatus: 200,
})


      if(req.method === "GET") {
        const {id, titel} = req.body
        const data = await executeQuery(`SELECT '${titel}' FROM anne WHERE id = '${id}'`)
        res.status(201).json({message: "Data fetch", data})
        return;
        }
        else{
            res.status(500).json({message: "Route not valid"})
        }
    
      res.send({
          data
      });    

}
export default handler;    

  