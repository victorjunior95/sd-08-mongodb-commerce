db.produtos.updateMany({ nome: { $ne: "McChicken" } },
 { $set: { "ingredientes.$[]": "catchup" } });

 db.produtos.find({}, { ingredientes: 1, _id: 0 }).pretty();