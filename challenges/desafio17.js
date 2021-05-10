db.produtos.createIndex(
  { descricao: "text" },
  { name: "desafio17", default_language: "portuguese" }
);

db.produtos.count({ $text: { $search: "frango hamburguer" } });
