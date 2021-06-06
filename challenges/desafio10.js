// 10 - Adicione a quantidade de vendas dos sanduíches por dia da semana.

//   Query A: Inclui um array com sete posições em todos os sanduíches
//     Cada posição representa um dia da semana
//     As posições iniciam em 0
//     O array deve se parecer com: "vendasPorDia": [0, 0, 0, 0, 0, 0, 0]
//     Os itens do array representam as vendas no domingo, segunda, e assim por diante, respectivamente até as vendas do sábado
db.produtos.updateMany(
  {},
  { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } },
);

//   Query B: Incrementa as vendas de Big Mac às quartas-feiras em 60
db.produtos.updateOne(
  { nome: "Big Mac" },
  { $inc: { "vendasPorDia.3": 60 } },
);

//   Query C: Incrementa as vendas de todos os sanduíches de carne do tipo bovino e pão aos sábados em 120
db.produtos.updateMany(
  { tags: { $all: ["bovino", "pão"] } },
  { $inc: { "vendasPorDia.6": 120 } },
);

//   Query D: Retorna o nome e vendasPorDia de todos os documentos
db.produtos.find(
  {},
  {
    _id: 0,
    nome: 1,
    vendasPorDia: 1,
  },
);
