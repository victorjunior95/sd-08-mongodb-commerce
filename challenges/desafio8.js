db.produtos.updateMany(
    { nome: "Quarteirão com Queijo" },
    { $pop: { ingredientes: -1 } },
);
// $pop remove o primeiro elemento de um array
// https://docs.mongodb.com/manual/reference/operator/update/pop/#mongodb-update-up.-pop

db.produtos.find({}, { _id: false, nome: true, ingredientes: true });
