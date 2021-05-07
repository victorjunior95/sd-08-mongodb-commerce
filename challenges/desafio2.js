db.produtos.updateMany({ valorUnitario: { $exists: false } },
  { avaliacao: NumberInt("0") });

db.produtos.find({}, { valorUnitario: 1, nome: 1, _id: 0 });
