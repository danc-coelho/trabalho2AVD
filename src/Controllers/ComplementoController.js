const database = require('../Database/Database.json');

module.exports = {
   store(req, res) {
      const { id, complemento } = req.params;

      let response = database.produtos.find(x => x.id == id);

      response.complementos.push(complemento);

      return res.json(response);

   }
}