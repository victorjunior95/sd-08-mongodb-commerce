db.produtos.updateMany({}, { criadoPor: "Ronald McDonald" });

db.produtos.find({}, { criadoPor: 1, nome: 1, _id: 0 });
