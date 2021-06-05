// 11 - Insira os elementos combo e tasty no array tags de todos os sanduíches e aproveite para deixar os elementos em ordem alfabética ascendente.

//   Query A: Insere os elementos combo e tasty no array tags de todos os sanduíches e ordena os elementos de tags em ordem alfabética ascendente
db.produtos.updateMany(
  {},
  {
    $push: {
      tags: {
        $each: ["combo", "tasty"],
        $sort: 1,
      },
    },
  },
);

//   Query B: Retorna o nome e tags de todos os documentos
db.produtos.find({}, { _id: 0, nome: 1, tags: 1 });
