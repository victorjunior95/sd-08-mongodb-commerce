db.produtos.updateMany({
  valoresNutricionais: { $elemMatch: { percentual: { $gte: 40 }, tipo: "sódio" } } },
 { $push: { tags: "muito sódio" } });

 db.produtos.find({}, { tags: 1, nome: 1, _id: 0 }).pretty();
