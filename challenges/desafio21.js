db.produtos.find(
    { $expr: { 
        $gt: ["$curtidas", "$vendidos"] },
     },
    { _id: 0, nome: 1 },
);

// Utiliza o operador $expr para buscar os documentos em que o valor de spent exceda o valor de budget : 
// quase mesma coisa do inner join SQL