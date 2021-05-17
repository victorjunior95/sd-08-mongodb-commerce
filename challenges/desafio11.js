db.produtos.updateMany(
    {},
    { $push: { tags: { $each: ["combo", "tasty"] } } },
    {$sort: {tags: 1 }}
);
//  { $push: { <field1>: { <modifier1>: <value1>, ... }, ... } }
//  modifier $each -> adiciona varios valores no campo da matriz
// https://docs.mongodb.com/manual/reference/operator/update/push/#mongodb-update-up.-push

// { $sort: { <field1>: <sort order>, <field2>: <sort order> ... } }
// order: 1 -> ascendente , 2 -> descendente
// https://docs.mongodb.com/manual/reference/operator/aggregation/sort/
db.produtos.find({}, { _id: 0, nome: 1, tags: 1 });
