// 13 - Adicione o elemento muito sódio ao final do array tags nos produtos em que o percentual de sódio seja maior ou igual a 40.
db.produtos.updateMany(
  { $and: [
    { "valoresNutricionais.tipo": "sódio" },
    { "valoresNutricionais.percentual": { $gte: 40 } },
  ] },
  { $push: { tags: "muito sódio" } },
);
db.produtos.find({}, { nome: 1, tags: 1, _id: 0 }).pretty();