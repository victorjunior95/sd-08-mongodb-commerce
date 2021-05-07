db.produtos.updateMany({}, { $push: { vendasPorDia: { $each: [0, 0, 0, 0, 0, 0, 0] } } });
db.produtos.updateOne(
    {
      nome: "Big Mac",
    }, 
    {
      $set: 
      { 
        "vendasPorDia.3": 60,       
      },
    },
  );
  db.produtos.updateMany(
    {
      tags: 
      {
        $in: ["bovino", "pão"],
      },
    }, 
    {
      $set: 
      { 
        "vendasPorDia.6": 120,       
      },
    },
  );
  db.produtos.find({}, { _id: 0, nome: 1, vendasPorDia: 1 });
  // https://stackoverflow.com/questions/11372065/mongodb-how-do-i-update-a-single-subelement-in-an-array-referenced-by-the-inde