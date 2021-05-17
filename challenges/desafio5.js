db.produtos.updateMany(
    { nome: { $ne: "McChicken" } },
    { $addToSet: { ingredientes: "ketchup" } },
  );
//  consultei o repositório de Arnaelcio para a parte do condicional(addTSet).
//  https://github.com/tryber/sd-08-mongodb-commerce/pull/71/files 
// { $addToSet: { <field1>: <value1>, ... } } adiciona um valor num campo, 
// caso ele nao faça parte do campo.
// https://docs.mongodb.com/manual/reference/operator/update/addToSet/
  
db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });
