db.produtos.updateMany(
    { nome: { $in: ["Big Mac", "Quarteirão com Queijo"] } },
    { $push: { ingredientes: "bacon" } },
  );
  
  db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 });

  // o operador in é usado quando você quer passar mais de um valor para dar match,
  // algo parecido com includes do JS, eu verifico se o valor da key nome existe dentro do array, se sim dá bom.
  // o método push por padrão coloca no final da lista, há um outro método que você pode dizer em qual posição por. Atenção, pq esse método pode replicar informações dentro de um array, eu posso colocar vários bacons aqui dentro.

  


