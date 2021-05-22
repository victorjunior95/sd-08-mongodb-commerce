db.produtos.createIndex(
    { descricao: "text" },
    { default_language: "portuguese" },
);

db.produtos.count({ $text: { $search: "frango hamburguer" } });

// O operador $text faz uma busca "textual" em um campo indexado por um text index. 
// https://docs.mongodb.com/manual/core/index-text/
// $search é operador que irá receber os params, que sintaxe mais estranha, no caso o espaço é delimitador
// Se você quiser encontrar uma fase é só usar \ frase \
