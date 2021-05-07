db.produtos.find(
  // https://docs.mongodb.com/manual/reference/operator/query/regex/
  { nome: { $regex: /mc/i } },
).count();