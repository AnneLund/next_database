import executeQuery from "../../../Source/db";
import NextCors from 'nextjs-cors'

async function handler (req, res) {
await NextCors(req, res, {
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccesStatus: 200,
})


      if(req.method === "GET") {
        const {id} = req.body

        // const {
        //   query: { data },
        // } = req;

        await executeQuery(`SELECT * FROM anne WHERE id = '${id}'`)
        res.status(201).json()  
        return id;
        }
        else{
            res.status(500).json({message: "Route not valid"})
        }
    
      

}
export default handler;    

  