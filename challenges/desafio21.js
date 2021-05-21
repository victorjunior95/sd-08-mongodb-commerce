db.produtos.find(
    { $expr: { $gt: ["$curtidas", "$vendidos"] } },
    { nome: 1, _id: 0 },
);
//  $expr: compara dois campos de um documento.
//  { $expr: { <expression> } }
//  ex: comparação onde spent é maior que budget:
//  db.monthlyBudget.find( { $expr: { $gt: [ "$spent" , "$budget" ] } } )
//  https://docs.mongodb.com/manual/reference/operator/query/expr/
