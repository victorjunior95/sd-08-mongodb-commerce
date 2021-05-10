db.produtos.update({ nome: "Big Mac" },
  { $set: { ultimaModificacao: Date() } });
db.produtos.find({ ultimaModificacao: { $exists: 1 } }, { id_: 0, nome: 1 });
