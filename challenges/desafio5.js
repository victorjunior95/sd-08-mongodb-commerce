db.produtos.updateMany(
    {
        nome: { $not: 
            {
                $eq: "McChicken",
            },
        },
    },
    {
        $addToSet: {
            ingredientes: "ketchup", 
        },
    },
    {
        upsert: true,
    },
);

db.produtos.find(
    {},
    {
        _id: 0,
        nome: 1,
        ingredientes: 1,
    },
);