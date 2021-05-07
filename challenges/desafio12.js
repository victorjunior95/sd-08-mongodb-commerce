db.produtos.updateMany(
  {},
  { $push: { valoresNutricionais: { $each: [], $sort: { percentual: -1 } } } },
); // $each: [] -> https://docs.mongodb.com/manual/reference/operator/update/sort/

db.produtos.find({}, { _id: 0, nome: 1, valoresNutricionais: 1 });
