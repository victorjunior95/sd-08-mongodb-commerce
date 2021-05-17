db.produtos.updateMany(
    { nome: "Quarteirão com Queijo" },
    { $pop: { ingredientes: -1 } },
);

// $pop remove o primeiro ou o ultimo elemento de um array
// { $pop: { <field>: <-1 | 1>, ... } }
// https://docs.mongodb.com/manual/reference/operator/update/pop/#mongodb-update-up.-pop
// consultei o repositório de Arnaelcio para esta parte.
// https://github.com/tryber/sd-08-mongodb-commerce/pull/71/files

db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });
