// 19 - Renomeie o campo descricao para descricaoSite em todos os documentos.

//   Query A: Renomeia o campo descricao para descricaoSite em todos os documentos
db.produtos.updateMany(
  {},
  { $rename: { descricao: "descricaoSite" } },
);

//   Query B: Retorna o nome, descricao e descricaoSite de todos os documentos
db.produtos.find(
  {},
  {
    _id: 0,
    nome: 1,
    descricao: 1,
    descricaoSite: 1,
  },
);
