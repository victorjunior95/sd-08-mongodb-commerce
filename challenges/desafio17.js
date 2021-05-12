db.produtos.dropIndexes();
db.produtos.createIndex({ ingredientes: "text" });
db.produtos.count({ $text: { $search: "frango hamburguer -empanado" } }, { ingredientes: 1 });