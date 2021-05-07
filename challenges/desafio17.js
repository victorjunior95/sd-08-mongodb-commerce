db.produtos.createIndex({ descricao: "text" }, { default_language: "portuguese" });

// https://docs.mongodb.com/manual/tutorial/specify-language-for-text-index/ especificando lingua no mongodb

db.produtos.count({ $text: { $search: "frango hamburguer" } });
