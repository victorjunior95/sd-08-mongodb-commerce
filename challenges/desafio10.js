db.produtos.updateMany({},
    { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] },
  });
  
db.produtos.updateOne(
    { nome: "Big Mac" },
    { $inc: { "vendasPorDia.3": 60 } },
);
  
db.produtos.updateOne(
    { tags: { $all: ["bovino", "pão"] } },
    { $inc: { "vendasPorDia.6": 120 } },
);
  
db.produtos.find({}, { _id: 0, nome: 1, vendasPorDia: 1 });

// A sintaxe para pegar algo dentro de um array pelo posição tem que usar o "", não se esqueça disso.
// O All verificar se os elementos existem dentro de um array, se você não usá-lo ele vai iria verificar 
// apenas "["bovino", "pão"] === ["bovino", "pão"]", na mesma ordem. Mais uma vez, esse se parece com o includes