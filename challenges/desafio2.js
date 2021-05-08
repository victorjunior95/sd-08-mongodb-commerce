db.produtos.updateMany({ valorUnitario: { $exists: false } },
  { $set: { valorUnitario: NumberInt("0") } });

db.produtos.find({}, { valorUnitario: 1, nome: 1, _id: 0 });
