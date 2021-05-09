// 4 - Atribua a data corrente ao campo ultimaModificacao no sanduíche Big Mac.
db.produtos.updateMany({ nome: "Big Mac" }, { $currentDate: { ultimaModificacao: true } });

db.produtos.find({ nome: "Big Mac" }, { _id: 0, nome: 1 });