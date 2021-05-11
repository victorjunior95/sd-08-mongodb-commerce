db.produtos.createIndex({ descricao: "text" }, { default_language: "portuguese" });
db.produtos.find({ $text: { $serach: "frango hamburguer" } }).count();
