db.produtos.createIndex({ nome: "text" });

db.produtos.find(
  { $text: { $search: "Mc" } },
).count();