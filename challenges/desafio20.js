db.produtos.updateMany({ nome: "Big Mac" },
  { $unset: { curtidas: "" } });

db.produtos.find({}, { curtidas: 1, nome: 1, _id: 0 });
