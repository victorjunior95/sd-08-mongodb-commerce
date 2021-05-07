db.produtos.createIndex({ descricao: "text" }, { default_language: "pt" });
db.produtos.count(
    { $text: { $search: "\"feito com\"" } }, 
  );

//   https://www.redspark.io/en/mongodb-entendendo-full-text-search