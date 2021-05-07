db.produtos.updateMany({}, {
  $push: {
    tags: {
      $each: [
        "combo",
        "tasty",
      ],
      // Consulta ao PR do companheiro Tiago Bovolin - https://github.com/tryber/sd-08-mongodb-commerce/pull/11
      // https://docs.mongodb.com/manual/reference/operator/update/sort/
      $sort: 1,
    },
  },
});

db.produtos.find({}, {
  _id: 0,
  nome: 1,
  tags: 1,
});