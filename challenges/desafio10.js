// 10 - Adicione a quantidade de vendas dos sanduíches por dia da semana.
  // Para isso, escreva no arquivo desafio10.js quatro queries, nesta ordem:

    // a) Crie uma query que inclua um array com sete posições em todos os sanduíches. Cada uma delas representará um dia da semana, e cada posição iniciará em 0. O array deve se parecer como abaixo:
      // "vendasPorDia": [0, 0, 0, 0, 0, 0, 0]
      // O primeiro item desse array representa as vendas no domingo, o segundo item representa as vendas na segunda-feira, e assim até chegar ao último item, que representa as vendas no sábado.

    // b) Crie uma query que incremente as vendas de Big Mac às quartas-feiras em 60.

    // c) Crie uma query que incremente as vendas de todos os sanduíches de carne do tipo bovino e pão aos sábados em 120.

    // d) Crie uma query que retorne o nome e vendasPorDia de todos os documentos.
db.produtos.updateMany({}, { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } });

db.produtos.updateOne({ nome: "Big Mac" }, { $inc: { "vendasPorDia.3": 60 } });

db.produtos.updateMany({ tags: { $in: ["bovino", "pão"] } },
{ $set: { "vendasPorDia.6": 120 } });

db.produtos.find({}, { _id: 0, nome: 1, vendasPorDia: 1 });
