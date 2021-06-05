// 1 - Inclua o campo criadoPor em todos os documentos, colocando "Ronald McDonald" no valor desse campo.

//   Query A: Adiciona o campo criadoPor em todos os documentos, colocando "Ronald McDonald" como valor
db.produtos.updateMany(
  {},
  {
    $set: { criadoPor: "Ronald McDonald" },
  },
);

//   Query B: Retorna o nome e criadoPor de todos os produtos
db.produtos.find(
  {},
  {
    _id: 0,
    nome: 1,
    criadoPor: 1,
  },
);
