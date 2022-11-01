module.exports = (req, res) => {
    const {
        query: { anne_id },
      } = req;
    
      res.send({
          msg: `Hello ${anne_id}!`
      });
  };