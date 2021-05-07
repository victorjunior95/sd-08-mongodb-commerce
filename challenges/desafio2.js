db.produtos.updateMany({ valorUnitario: { $exists: false } }, 
    { $mul: { valorUnitario: NumberDecimal("0.00") } });
db.produtos.find({}, { _id: 0, nome: 1, valorUnitario: 1 });

// https://stackoverflow.com/questions/24824657/how-do-i-update-mongodb-document-fields-only-if-they-dont-exist