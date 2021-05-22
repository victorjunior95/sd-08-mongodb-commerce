db.produtos.updateMany(
  {}, 
    {
      $push: {
        valoresNutricionais: {
          $each: [],
          $sort: {
            percentual: -1,
          },
        },
      },
    },
);

db.produtos.find({}, { _id: 0, nome: 1, valoresNutricionais: 1 });

// Em um obj, você pode passar a key do obj que vocẽ que aplicar o sort.
// O pulo do gato aqui é não dar push em nada, então acaba apenas aplicando o sort de fato.