db.produtos.count({ ingredientes: { $size: 4 } });
// size : retorna o aqrray com numero de elementos especificado 
// https://docs.mongodb.com/manual/reference/operator/query/size/
