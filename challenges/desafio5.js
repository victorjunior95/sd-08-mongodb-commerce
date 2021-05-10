db.produtos.updateMany({ nome: { $ne: "McChicken" }, "ingredientes.$[]": { $ne: "ketchup" } },
 { $push: { ingredientes: "catchup" } });

 db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 }).pretty();