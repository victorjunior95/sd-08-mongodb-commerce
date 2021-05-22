db.produtos.count(
    { nome: { $regex: /Mc/i },
 },
);

// i ao lado da expressão indica a opção case-insensitive