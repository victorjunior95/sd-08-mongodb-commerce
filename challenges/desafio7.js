db.produtos.updateMany({}, { $pullAll: { ingredientes: ["cebola"] } });

db.produtos.find({}, { _id: false, nome: true, ingredientes: true });
