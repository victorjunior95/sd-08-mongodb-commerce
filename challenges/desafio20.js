db.produtos.updateOne({ nome: "Big Mac" }, { $unset: { curtidas: 1 } });
// https://qastack.com.br/programming/6851933/how-to-remove-a-field-completely-from-a-mongodb-document
// https://docs.mongodb.com/manual/reference/method/db.collection.updateOne/#mongodb-method-db.collection.updateOne
