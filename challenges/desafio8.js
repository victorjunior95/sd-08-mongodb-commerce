db.produtos.updateOne({nome: 'Quarteirão com Queijo'}, {
    $pop: { ingredientes: -1}
    
  });
  
  db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 });
  
  //Se liga na sintaxe do pop. Ele pode retirar o primeiro ou o último elemento de um array.
  //Então, vc passa depois do array você quer retirar o -1 se é para o começo e 1 se para o fina.
  