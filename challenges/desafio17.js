/* uso do text: {
  $text:
  {
    $search: <string>,
    $language: <string>,
    $caseSensitive: <boolean>,
    $diacriticSensitive: <boolean>
  }
} */
// utilizaremos o search e o caseSensitive, embora este não seja necessário nesse caso.
// https://docs.mongodb.com/manual/reference/operator/query/text/

// é necessário criar um indice para suporta  a query de busca de texto
// https://docs.mongodb.com/manual/core/index-text/

db.produtos.createIndex(
    { descricao: "text" },
    { default_language: "portuguese" },
);
//  consultei repositório de Arnaelcio para correção da criação do Índice.
//  https://github.com/tryber/sd-08-mongodb-commerce/pull/71/files
//  E para a correção em meu mongo, precisei utilizar os método dropIndex:
//  https://docs.mongodb.com/manual/reference/method/db.collection.dropIndex/ ,
//  E getIndexes() , para verificar o nome do Index á ser dropado
//  https://docs.mongodb.com/manual/reference/method/db.collection.getIndexes/#mongodb-method-db.collection.getIndexes

db.produtos.find({ $text: { $search: "frango hamburguer", $caseSensitive: false } }).count();
