db.produtos.updateMany({}, { $pull: { ingredientes: "cebola" } });
// { $pull: { <field1>: <value|condition>, <field2>: <value|condition>, ... } }
// https://docs.mongodb.com/manual/reference/operator/update/pull/
// retira um item de um array

db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });
