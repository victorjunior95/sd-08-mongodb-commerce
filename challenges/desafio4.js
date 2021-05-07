db.produtos.updateMany(
  { nome: "Big Mac" }, 
  // https://docs.mongodb.com/manual/reference/operator/update/currentDate/
  { $currentDate: { ultimaModificacao: { $type: "date" } } }, 
);

db.produtos.find({ ultimaModificacao: { $exists: 1 } }, {
  _id: 0,
  nome: 1,
});