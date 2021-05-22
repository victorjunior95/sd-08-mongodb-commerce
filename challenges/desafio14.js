db.produtos.updateMany(
  { 
    valoresNutricionais: {
      $elemMatch: {
        tipo: "sódio",
        percentual: { $gt: 20, $lt: 40 },
      },
    },
  },
  {
    $push: {
      tags: "contém sódio",
    },
  },
);

db.produtos.find({}, { nome: 1, tags: 1, _id: 0 });

// https://stackoverflow.com/questions/4966203/mongo-query-question-gt-lt