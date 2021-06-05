// 8 - Remova o primeiro ingrediente do sanduíche Quarteirão com Queijo.

//   Query A: Remove o primeiro ingrediente no sanduíche Quarteirão com Queijo
db.produtos.updateOne(
  { nome: "Quarteirão com Queijo" },
  { $pop: { ingredientes: -1 } },
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
