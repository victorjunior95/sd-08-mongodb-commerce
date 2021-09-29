// 3 - Adicione o campo avaliacao em todos os documentos da coleção e efetue alterações nesse campo.
  // Para isso, escreva no arquivo desafio3.js quatro queries, nesta ordem:

    // a) Crie uma query que inclua o campo avaliacao do tipo NumberInt e com o valor 0 em todos os documentos da coleção.

    // b) Crie uma query que incremente o valor do campo avaliacao em 5 em todos os sanduíches de carne do tipo bovino. Dica: utilize como filtro o campo tags.

    // c) Crie uma query que incremente o valor do campo avaliacao em 3 em todos os sanduíches de ave.

    // d) Crie uma query que retorne o nome e avaliacao de todos os sanduíches.
db.produtos.updateMany({}, { $set: { avaliacao: NumberInt("0") } });

db.produtos.updateMany({ tags: { $regex: /bovino/i } }, { $inc: { avaliacao: 5 } });

db.produtos.updateMany({ tags: { $regex: /ave/i } }, { $inc: { avaliacao: 3 } });

db.produtos.find({}, { _id: 0, nome: 1, avaliacao: 1 });
