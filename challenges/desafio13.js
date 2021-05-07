db.produtos.updateMany(
  {
    // https://docs.mongodb.com/manual/reference/operator/query/elemMatch/
    valoresNutricionais: { $elemMatch: {
      tipo: "sódio",
      percentual: { $gte: 40 },
    } },
  },
  { $push: { tags: "muito sódio" } },
);

db.produtos.find({}, {
  _id: 0,
  nome: 1,
  tags: 1,
});