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

db.produtos.createIndex({ text: "text" });

db.produtos.find({ $text: { $search: "frango hamburguer", $caseSensitive: false } }).count();
