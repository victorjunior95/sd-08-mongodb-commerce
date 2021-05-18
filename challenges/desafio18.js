db.produtos.createIndex(
    { descricao: "text" },
    { default_language: "portuguese" },
);

db.produtos.find({ $text: { $search: "\"feito com\"", $caseSensitive: false } }).count();
// uso do escape para buscas em frases:
// https://docs.mongodb.com/manual/reference/operator/query/text/#std-label-text-query-operator-behavior
