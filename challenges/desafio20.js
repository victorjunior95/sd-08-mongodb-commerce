// 20 - Remova o campo curtidas do item Big Mac.
  // Para isso, escreva no arquivo desafio20.js duas queries, nesta ordem:

    // a) Crie uma query que faça a remoção do campo curtidas do item Big Mac.

    // a) Crie uma query que retorne o nome e curtidas de todos os documentos.
db.produtos.updateMany({ nome: "Big Mac" }, { $unset: { curtidas: "" } });

db.produtos.find({}, { _id: 0, nome: 1, curtidas: 1 });
