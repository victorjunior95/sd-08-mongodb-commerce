db.produtos.createIndex({ descricao: "text" }, { default_language: "pt" });
db.produtos.count(
    { $text: { $search: "frango hamburguer" } }, 
  );

  // https://www.redspark.io/en/mongodb-entendendo-full-text-search/