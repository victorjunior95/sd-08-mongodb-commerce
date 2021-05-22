db.produtos.updateMany({}, {
    $pull: { ingredientes: "cebola" },
  });
  db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 });

// O operador pull retira um valor do obj, depois verifica se não dá para puxar mais de um usando o in.