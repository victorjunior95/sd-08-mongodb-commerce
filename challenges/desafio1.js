db.produtos.updateMany({}, { $set: { criadoPor: "Ronald McDonald" } });
db.produtos.find({}, { nome: 1, criadorPor: 1, _id: 0 });
