db.produtos.updateMany({}, { $set: { avaliacao: NumberInt("0") } });

db.produtos.updateMany({ tags: "bovino" }, { $inc: { avaliacao: 5 } });
// { $inc: { <field1>: <amount1>, <field2>: <amount2>, ... } }
// https://docs.mongodb.com/manual/reference/operator/update/inc/
// aceita valores positivos ou negativos
// consultei o repositório de Arnaelcio para esta parte.
// https://github.com/tryber/sd-08-mongodb-commerce/pull/71/files

db.produtos.updateMany({ tags: "ave" }, { $inc: { avaliacao: 3 } });

db.produtos.find({}, { _id: 0, nome: 1, avialação: 1 });
