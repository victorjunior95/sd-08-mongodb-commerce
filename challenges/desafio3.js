// 3 - Adicione o campo avaliacao em todos os documentos da coleção e efetue alterações nesse campo.

//   Query A: Inclue o campo avaliacao do tipo NumberInt e com o valor 0 em todos os documentos da coleção
db.produtos.updateMany(
  {},
  { $set: { avaliacao: NumberInt("0") } },
);

//   Query B: Incrementa o valor do campo avaliacao em 5 em todos os sanduíches de carne do tipo bovino.
//     Dica: utilizar como filtro o campo tags.
db.produtos.updateMany(
  { tags: { $all: ["bovino"] } },
  { $inc: { avaliacao: 5 } },
);

//   Query C: Incrementa o valor do campo avaliacao em 3 em todos os sanduíches de ave
db.produtos.updateMany(
  { tags: { $all: ["ave"] } },
  { $inc: { avaliacao: 3 } },
);

//   Query D: Retorna o nome e avaliacao de todos os sanduíchesdb.produtos.find({}, { nome: 1, avaliacao: 1, _id: 0 });
db.produtos.find(
  {},
  { 
    _id: 0,
    nome: 1,
    avaliacao: 1,
  },
);
