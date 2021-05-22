db.produtos.find(
    { vendidos: {
         $mod: [5, 0],
         } },
    { _id: 0, nome: 1, vendidos: 1 },
);

// O valor de vendidos é divido pelo primeiro elemento do array do mod, caso for zero, que é o segundo elemento do mod dá bom.