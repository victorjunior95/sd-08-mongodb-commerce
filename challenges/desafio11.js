db.produtos.updateMany(
    {},
    { $push: { tags: { $each: ["combo", "tasty"], $sort: 1 } } },
);
//  { $push: { <field1>: { <modifier1>: <value1>, ... }, ... } }
//  modifier $each -> adiciona varios valores no campo da matriz
// https://docs.mongodb.com/manual/reference/operator/update/push/#mongodb-update-up.-push

// { $sort: { <field1>: <sort order>, <field2>: <sort order> ... } }
// order: 1 -> ascendente , -1 -> descendente
// https://docs.mongodb.com/manual/reference/operator/aggregation/sort/

// sort dentro do updateMany:
/* db.collection.updateMany(
    <filter>,
    <update>,
    {
      upsert: <boolean>,
      writeConcern: <document>,] } } },
    }
 ) */
db.produtos.find({}, { _id: 0, nome: 1, tags: 1 });
