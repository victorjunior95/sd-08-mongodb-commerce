db.produtos.updateMany(
    {},
    { $push: { valoresNutricionais: { $each: [], $sort: { percentual: -1 } } } },
  );
 // consultei o repositório de Arnaelcio para correção da sintaxe e uso do sort
 // https://github.com/tryber/sd-08-mongodb-commerce/pull/71/files
db.produtos.find({}, { _id: 0, nome: 1, valoresNutricionais: 1 });
