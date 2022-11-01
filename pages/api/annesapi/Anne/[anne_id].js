import executeQuery from "../../../../Source/db";
import NextCors from 'nextjs-cors'

module.exports = (req, res) => {
   NextCors(req, res, {
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccesStatus: 200,
})   

if(req.method === "GET") {
  const {
    query: { anne_id },
  } = req;

  const {
    query: {id}
  } = req;
  console.log(anne_id)

  if(anne_id === id) {
   const data = executeQuery(`SELECT * FROM anne WHERE id = '${id}'`)
    res.status(201).json({message: "'Købt' opdateret!"}, data)
    return;
        } 


  // const data = await executeQuery(`SELECT * FROM anne WHERE id='${id}'`)
  // res.status(201).json({message: "Data fetch", data})
  // return;
  }
  else{
      res.status(500).json({message: "Route not valid"})
  }

  }


  
    // res.send({
    //     msg: `Hello ${anne_id}!`
    // });



// import executeQuery from "../../../../Source/db";
// import NextCors from 'nextjs-cors'

// async function handler (req, res) {
// await NextCors(req, res, {
//     methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
//     origin: '*',
//     optionsSuccesStatus: 200,
// })


//       if(req.method === "GET") {
//         const {id, title} = req.body

//         const {
//           query: { anne_id },
//         } = req;

//         const data = await executeQuery(`SELECT '${title}' FROM anne WHERE id = '${id}'`)
//         res.status(201).json({data})
//         res.send({msg: `Hello ${anne_id}`});  
//         return;
//         }
//         else{
//             res.status(500).json({message: "Route not valid"})
//         }
    
      

// }
// export default handler;    

  