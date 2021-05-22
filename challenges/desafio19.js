db.produtos.updateMany({},
    { $rename: { descricao: "descricaoSite" }, 
});
db.produtos.find({}, { _id: 0, nome: 1, descricaoSite: 1 });

/*  Você pode querer renomear um determinado atributo de um ou mais documentos. Para isso, utilize o operador $rename .
 Esse operador recebe um documento contendo o nome atual do campo e o novo nome. Pode ser utilizado com os métodos updateOne() ou updateMany() , e também pode receber um critério de seleção de documentos.  */