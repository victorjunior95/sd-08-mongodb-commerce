// 8 - Remova o primeiro ingrediente do sanduíche Quarteirão com Queijo.
  // Para isso, escreva no arquivo desafio8.js duas queries, nesta ordem:

    // a) Crie uma query que faça a remoção do primeiro ingrediente no sanduíche Quarteirão com Queijo.

    // b) Crie uma query que retorne o nome e ingredientes de todos os documentos.
db.produtos.updateMany({ nome: "Quarteirão com Queijo" }, { $pop: { ingredientes: -1 } });

db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });
