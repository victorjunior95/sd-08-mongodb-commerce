db.produtos.updateMany(
  {
    $and: [
      {
        "valoresNutricionais.2.tipo": "sódio",
      },
      {
        $or: [
          {
            "valoresNutricionais.2.percentual": { $gt: 20, $lt: 40 },
          },
        ],
      },
    ],
  },
  {
    $addToSet: {
      tags: "contém sódio",
    },
  },
);

db.produtos.find(
  {},
  {
    _id: 0,
    nome: 1,
    tags: 1,
  },
);
