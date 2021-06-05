// 9 - Remova o último ingrediente do sanduíche Cheddar McMelt.

//   Query A: Remove o último ingrediente no sanduíche Cheddar McMelt
db.produtos.updateOne(
  { nome: "Cheddar McMelt" },
  { $pop: { ingredientes: 1 } },
);

//   Query B: Retorna o nome e ingredientes de todos os documentos
db.produtos.find(
  {},
  {
    _id: 0,
    nome: 1,
    ingredientes: 1
  }
);
