db.produtos.updateMany(
    {
        valoresNutricionais: {
            $elemMatch: { tipo: "sódio", percentual: { $gt: 39 } },
        },
    },
    //  elemMatch: faz a correnspondencia de documentos com pelo menos um elemento que corresponda
    //  á todos os critérios de consulta especificados
    //  { <field>: { $elemMatch: { <query1>, <query2>, ... } } }      
    //  https://docs.mongodb.com/manual/reference/operator/query/elemMatch/     
    //  consultei o repositório de Arnaelcio para esta parte
    //  https://github.com/tryber/sd-08-mongodb-commerce/pull/71/files
    { $push: { tags: "muito sódio" } },
);

db.produtos.find({}, { _id: 0, nome: 1, tags: 1 });
