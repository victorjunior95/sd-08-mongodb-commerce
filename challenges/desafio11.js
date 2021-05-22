db.produtos.updateMany(
  {},
    {
      $push: {
        tags: {
           $each: ["combo", "tasty"],
           $sort: 1,
        },
      },
    
    },
);

db.produtos.find({}, { _id: 0, nome: 1, tags: 1 });

// O operador serve pra colocar vários elementos dentro de algo, ele também serve para objetos
// o sort 1  descendente, 0 ascendente como no SQL