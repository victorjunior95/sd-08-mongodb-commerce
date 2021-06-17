db.produtos.updateMany({}, { $set: { criadoPor: "Ronald MacDonald" } });

db.produtos.updateMany({}, { nome: 1, criadoPor: 1 });
