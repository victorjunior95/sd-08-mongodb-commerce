// 4 - Atribua a data corrente ao campo ultimaModificacao no sanduíche Big Mac.

//   Query A: Atribui a data corrente ao campo ultimaModificacao no sanduíche Big Mac
//     Obs. Para a data corrente, use o tipo Date
db.produtos.updateOne(
  { nome: "Big Mac" },
  { $currentDate: { ultimaModificacao: { $type: "date" } }},
);

//   Query B: Retorna o nome de todos os documentos em que o campo ultimaModificacao existe
db.produtos.find(
  { ultimaModificacao: { $exists: true } },
  {
    _id: 0,
    nome: 1,
  },
);
