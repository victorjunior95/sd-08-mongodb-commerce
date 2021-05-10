db.produtos.updateMany({ nome: "Big Mac" }, { $currentDate: { ultimaModificacao: true } });
db.produtos.find({ ultimaModificacao: { $exists: 1 } }, { id_: 0, nome: 1 });
