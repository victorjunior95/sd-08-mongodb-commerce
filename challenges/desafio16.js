db.produtos.count({ ingredientes: { $size: 4 } });
// size : corresponde os arrays com o numero de elementos especificado 
// https://docs.mongodb.com/manual/reference/operator/query/size/
