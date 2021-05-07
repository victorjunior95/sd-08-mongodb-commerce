db.produtos.createIndex({ descricao: "text" }, { language_override: "portuguese" });

db.produtos.count({ $text: { $search: "\"feito com\"" } });
