// 13 - Adicione o elemento muito sódio ao final do array tags nos produtos em que o percentual de sódio seja maior ou igual a 40.
// Para isso, escreva no arquivo desafio13.js duas queries, nesta ordem:

// 1. Crie uma query que faça a adição do elemento muito sódio ao final do array tags nos produtos em que o percentual de sódio seja maior ou igual a 40.
db.produtos.updateMany({
   valoresNutricionais: {
      $elemMatch: { tipo: "sódio", percentual: { $gte: 40 } } } },
      { $push: { tags: "muito sódio" } });

// 2. Crie uma query que retorne o nome e tags de todos os documentos.
db.produtos.find({}, { nome: 1, tags: 1, _id: 0 });

// 14 - Adicione o elemento contém sódio ao final do array tags nos produtos em que o percentual de sódio seja maior do que 20 e menor do que 40.
// Para isso, escreva no arquivo desafio14.js duas queries, nesta ordem:

// Crie uma query que faça a adição do elemento contém sódio ao final do array tags nos produtos em que o percentual de sódio seja maior do que 20 e menor do que 40.

// Crie uma query que retorne o nome e tags de todos os documentos.
db.produtos.find({}, { nome: 1, tags: 1, _id: 0 });

// 15 - Conte quantos produtos contêm Mc no nome, sem considerar letras maiúsculas ou minúsculas.
// 16 - Conte quantos produtos têm 4 ingredientes.
// 17 - Conte quantos documentos contêm as palavras frango e hamburguer utilizando o operador $text.
// Para isso, escreva no arquivo desafio17.js duas queries, nesta ordem:

// Crie uma query que faça a criação de um índice do tipo text no campo descricao com o idioma padrão portuguese.

// Crie uma query que retorne a quantidade de documentos que contêm as palavras frango e hamburguer utilizando o operador $text.

// 18 - Conte quantos documentos contêm a expressão feito com utilizando o operador $text.
// Para isso, escreva no arquivo desafio18.js duas queries, nesta ordem:

// Crie uma query que faça a criação de um índice do tipo text no campo descricao com o idioma padrão portuguese.

// Crie uma query que retorne a quantidade de documentos que contêm a expressão feito com utilizando o operador $text.

// 19 - Renomeie o campo descricao para descricaoSite em todos os documentos.
// Para isso, escreva no arquivo desafio19.js duas queries, nesta ordem:

// Crie uma query que faça a renomeação do campo descricao para descricaoSite em todos os documentos.

// Crie uma query que retorne o nome, descricao e descricaoSite de todos os documentos.

// 20 - Remova o campo curtidas do item Big Mac.
// Para isso, escreva no arquivo desafio20.js duas queries, nesta ordem:

// Crie uma query que faça a remoção do campo curtidas do item Big Mac.

// Crie uma query que retorne o nome e curtidas de todos os documentos.

// 21 - Retorne o nome dos sanduíches em que o número de curtidas é maior que o número de sanduíches vendidos.
// 22 - Retorne o nome e a quantidade de vendas (vendidos) dos sanduíches em que o número de vendas é múltiplo de 5.
