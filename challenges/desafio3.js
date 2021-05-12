db.produtos.updateMany({}, { $set: { avaliacao: NumberInt(0) } });
db.produtos.updateMany({ tags: "bovino" }, { $inc: { avaliação: 5 } });
db.produtos.updateMany({ tags: "ave" }, { $inc: { avaliação: 3 } });
db.produtos.find({}, { _id: 0, name: 1, avaliacao: 1 });
