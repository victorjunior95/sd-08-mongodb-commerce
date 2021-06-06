// 20 - Remova o campo curtidas do item Big Mac.

//   Query A: Remove o campo curtidas do item Big Mac
db.produtos.updateOne(
  { nome: "Big Mac" },
  { $unset: { curtidas: "" } },
);

//   Query B: Retorna o nome e curtidas de todos os documento
db.produtos.find(
  {},
  {
    _id: 0,
    nome: 1,
    curtidas: 1,
  },
);
