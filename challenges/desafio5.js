db.produtos.updateMany(
  { nome: {
    $nin: ["McChicken"] } },
    { $push: { ingredientes: "ketchup" },
  },
);

db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 });
