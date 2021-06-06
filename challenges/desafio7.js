// 7 - Remova o item cebola de todos os sanduíches.

//   Query A: Remove o item cebola em todos os sanduíches
db.produtos.updateMany(
  {},
  { $pull: { ingredientes: "cebola" } },
);

//   Query B: Retorna o nome e ingredientes de todos os documentos
db.produtos.find(
  {},
  {
    _id: 0,
    nome: 1,
    ingredientes: 1,
  },
);
