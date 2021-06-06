// 17 - Conte quantos documentos contêm as palavras frango e hamburguer utilizando o operador $text.

//   Query A: Cria um índice do tipo text no campo descricao com o idioma padrão portuguese
db.produtos.createIndex(
  { descricao: "text" },
  { default_language: "portuguese" },
);

//   Query B: Retorna a quantidade de documentos que contêm as palavras frango e hamburguer utilizando o operador $text
db.produtos.count({ $text: { $search: "frango hamburguer" } });
