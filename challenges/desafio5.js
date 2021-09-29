// 5 - Adicione ketchup aos ingredientes para todos os sanduíches menos o McChicken, garantindo que não haja duplicidade nos ingredientes.
  // Para isso, escreva no arquivo desafio5.js duas queries, nesta ordem:

    // a) Crie uma query que adicione ketchup aos ingredientes para todos os sanduíches menos o McChicken, garantindo que não haja duplicidade nos ingredientes.

    // b) Crie uma query que retorne o nome e ingredientes de todos os documentos.
db.produtos.updateMany({ nome: { $ne: "McChicken" } }, { $addToSet: { ingredientes: "ketchup" } });

db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });
