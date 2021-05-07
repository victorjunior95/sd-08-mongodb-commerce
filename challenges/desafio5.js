db.produtos.updateMany(
  { _id: { $ne: ObjectId("5f280af11532b7276329ba4a") } },
  { $addToSet: { ingredientes: "ketchup" } },
);

db.produtos.find(
  { },
  { nome: 1, ingredientes: 1, _id: 0 },
);
