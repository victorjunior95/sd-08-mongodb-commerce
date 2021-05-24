//  mod: seleciona documentos onde um valor de um campo
//  dividido pro um divisor tenha um resto específico.
//  { field: { $mod: [ divisor, remainder ] } }
//  https://docs.mongodb.com/manual/reference/operator/query/mod/
db.produtos.find({ vendidos: { $mod: [5, 0] } },
    { _id: 0, nome: 1, vendidos: 1 });