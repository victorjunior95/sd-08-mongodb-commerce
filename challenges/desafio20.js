db.produtos.updateOne(
    { nome: "Big Mac" },
    { $unset: 
        { curtidas: "" }, 
    },
);

db.produtos.find({}, { _id: 0, nome: 1, curtidas: 1 });

// Se o set seta, o unset deseta