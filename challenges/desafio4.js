db.produtos.updateOne(
    { nome: "Big Mac" },
    { $currentDate: { ultimaModificacao: true } },
);
//  db.collection.updateOne(filter, update, options)¶
//  https://docs.mongodb.com/manual/reference/method/db.collection.updateOne/
//  consultei o repositório de Arnaelcio para esta parte.
//  https://github.com/tryber/sd-08-mongodb-commerce/pull/71/files

db.produtos.find(
    { ultimaModificacao: { $exists: 1 } },
    { _id: 0, nome: 1 },
);
