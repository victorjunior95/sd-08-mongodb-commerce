db.produtos.updateMany({ nome: { $ne: "McChicken" } }, { $set: { ingredientes: "ketchup" } });

db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });
