const database = require('../Database/Database.json');

const PrecoTotal = require('../Utils/PrecoTotal');
const PrecoVenda = require('../Utils/PrecoVenda');
const SituacaoProduto = require('../Utils/SituacaoProduto');

module.exports = {
   index(req, res) {
      return res.json(database.produtos);
   },

   show(req, res) {
      const { id } = req.params;

      let response = database.produtos.find(x => x.id == id);

      if (response == undefined) {
         return res
            .status(400)
            .json({
               Error: `Não existe Produto om este id.`
            });
      }

      return res.json(response);
   },

   store(req, res) {
      const {
         id,
         nome,
         quantidade,
         valorUnitario,
         complementos
      } = req.body;

      if (id == null || nome == null || nome == "" || quantidade == null || valorUnitario == null || complementos == null) {
         return res
            .status(400)
            .json({
               Error: `O campo id, nome, quantidade ou valorUnitario não existem no corpo da requisição ou estão nulos.`
            });
      }

      let item = {
         id,
         nome,
         quantidade,
         valorUnitario,
         precoTotal: PrecoTotal(quantidade, valorUnitario),
         precoVenda: PrecoVenda(valorUnitario),
         lucro: PrecoVenda(valorUnitario) - valorUnitario,
         situacaoProduto: SituacaoProduto(quantidade),
         complementos: [],
      };

      database.produtos.push(item);

      return res.json(item);

   },

   update(req, res) {
      const {
         nome,
         quantidade,
         valorUnitario
      } = req.body;

      const { id } = req.params;

      let response = database.produtos.find(x => x.id == id);

      if (response == undefined) {
         return res
            .status(400)
            .json({
               Error: `Não existe Produto om este id.`
            });
      }

      response.nome = nome;
      response.quantidade = quantidade;
      response.valorUnitario = valorUnitario

      return res.json(response);
   },

   delete(req, res) {
      const { id } = req.params;

      let response = database.produtos.find(x => x.id == id);

      if (response == undefined) {
         return res
            .status(400)
            .json({
               Error: `Não existe Produto om este id.`
            });
      }

      const indice = database.produtos.findIndex(x => x.id === id);

      return res.json(database.produtos.splice(indice, 1));

   }

};