module.exports = situacaoProduto = (quantidade) => {
     if(quantidade < 50)
          return "estável";
     else if(quantidade >= 50 && quantidade < 100)
          return "boa";
     else if(quantidade >= 100)
          return "excelente";
}