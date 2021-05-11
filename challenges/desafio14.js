db.produtos.updateMany({ valoresNutricionais: {
  $elemMatch: { percentual: { $gt: 20, $lt: 40 }, tipo: "sódio" } } },
 { $push: { tags: "contém sódio" } });

 db.produtos.find({}, { tags: 1, nome: 1, _id: 0 }).pretty();
