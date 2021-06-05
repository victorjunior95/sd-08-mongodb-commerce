// 12 - Ordene em todos os documentos os elementos do array valoresNutricionais pelo campo percentual de forma descendente.

//   Query A: Ordena em todos os documentos os elementos do array valoresNutricionais pelo campo percentual de forma descendente
//     Dica: mesmo sem adicionar nenhum novo elemento, utilizar também o modificador $each
db.produtos.updateMany(
  {},
  {
    $push: {
      valoresNutricionais: {
        $each: [],
        $sort: { percentual: -1 },
      },
    },
  },
);

//   Query B: Retorna o nome e valoresNutricionais de todos os documentos
db.produtos.find({}, { _id: 0, nome: 1, valoresNutricionais: 1 });
