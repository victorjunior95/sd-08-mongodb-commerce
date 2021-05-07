db.produtos.find({ nome: { $regex: /Mc/i } }, { _id: 0, nome: 1 }).count();
// Regex -> https://docs.mongodb.com/manual/reference/operator/query/regex/
