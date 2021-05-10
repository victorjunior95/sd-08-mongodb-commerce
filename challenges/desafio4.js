db.produtos.update({ nome: "Big Mac" }, { $set: { ultimamodificacao: Date() } });
db.produtos.find({ ultimamodificacao: { $exists: 1 } }, { nome: 1, id_: 0 });