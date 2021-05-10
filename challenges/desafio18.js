db.produtos.createIndex(
  { descricao: "text" },
  { name: "desafio18", default_language: "portuguese" }
);

db.produtos.count({ $text: { $search: "feito" } });
