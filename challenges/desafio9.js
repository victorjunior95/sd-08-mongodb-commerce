// 9 - Remova o último ingrediente do sanduíche Cheddar McMelt.
  // Para isso, escreva no arquivo desafio9.js duas queries, nesta ordem:

    // a) Crie uma query que faça a remoção do último ingrediente no sanduíche Cheddar McMelt.

    // b) Crie uma query que retorne o nome e ingredientes de todos os documentos.
db.produtos.updateMany({ nome: "Cheddar McMelt" }, { $pop: { ingredientes: 1 } });

db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });
