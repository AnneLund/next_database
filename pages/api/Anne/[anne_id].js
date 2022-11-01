import executeQuery from "../../../Source/db";
import NextCors from 'nextjs-cors'

async function handler (req, res) {
await NextCors(req, res, {
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccesStatus: 200,


    
})

 const {
        query: { anne_id },
      } = req;

      if(req.method === "GET") {
        const data = await executeQuery(`SELECT * FROM anne`)
        res.status(201).json({message: "Data fetch", data})
        return;
        }
        else{
            res.status(500).json({message: "Route not valid"})
        }
    
      res.send({
          msg: `Hello ${anne_id}!`
      });    

}
export default handler;    

  