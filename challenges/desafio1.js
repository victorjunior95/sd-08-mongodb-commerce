db.produtos.updateMany({}, { $set: { criadoPor: "Ronald McDonald" } });
/* db.collection.updateMany(
   <filter>,
   <update>,
   {
     upsert: <boolean>,
     writeConcern: <document>,
     collation: <document>,
     arrayFilters: [ <filterdocument1>, ... ],
     hint:  <document|string>        // Available starting in MongoDB 4.2.1
   }
) ->  filter representa os critérios de seleção para atualização.
( os mesmo que os de consulta do find )
o obj. vazio serve para atualizar todos os documentos da seleção. */
// https://docs.mongodb.com/manual/reference/method/db.collection.updateMany/

/* o operador $set substitui os valores de um campo.
sintax: { $set: { <field1>: <value1>, ...<fieldN>: <valueN> } } */
// https://docs.mongodb.com/manual/reference/operator/update/set/

// para a relização desta parte, consultei o repositorio de Arnaelcio
// https://github.com/tryber/sd-08-mongodb-commerce/pull/71/files

db.produtos.find({}, { _id: 0, nome: 1, criadoPor: 1 });
