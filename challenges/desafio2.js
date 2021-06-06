// 2 - Inclua o campo valorUnitario em todos os documentos em que esse campo não existe e atribua a ele o valor "0.00", com o tipo NumberDecimal.

//   Query A: Adiciona o campo valorUnitario em todos os documentos em que esse campo não existe e atribua a ele o valor "0.00", com o tipo NumberDecimal
db.produtos.updateMany(
  { valorUnitario: { $exists: false } },
  { $set: { valorUnitario: NumberDecimal("0.00") } },
);

//   Query B: Retorna o nome e valorUnitario de todos os produtos
db.produtos.find(
  {},
  {
    _id: 0,
    nome: 1,
    valorUnitario: 1,
  },
);
