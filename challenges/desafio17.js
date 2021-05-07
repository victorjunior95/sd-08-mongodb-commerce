// reference: https://docs.mongodb.com/manual/tutorial/specify-language-for-text-index/

db.produtos.createIndex({ descricao: "text" }, { language_override: "portuguese" });

db.produtos.count({ $text: { $search: "frango hambúrguer" } });
