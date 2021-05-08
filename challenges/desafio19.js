db.produtos.updateMany({}, { $rename: { descricao: "descricaoSite" } });
db.produtos.find({}, { descricao: 1, descricaoSite: 1, nome: 1, _id: 0 });