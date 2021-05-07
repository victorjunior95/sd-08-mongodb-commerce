db.produtos.updateMany(
  { "ValoresNutricionais.2.percentual": { $gt: 20, $lt: 40 } },
  { $push: { tags: "contém sódio" } },
);

db.produtos.find({}, { _id: 0, valoresNutricionais: 1 });
