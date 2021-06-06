db.produtos.updateOne(
<<<<<<< HEAD
  { nome: "Quarteirão com Queijo" }, 
  { $pop: { ingredientes: -1 } },
  );
  db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });
=======
{ nome: "Quarteirão com Queijo" }, 
{ $pop: { ingredientes: -1 } },
);
db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });
>>>>>>> d27984e2eaa371b9cff3cbe7514a6f4f24c55bfc
