// db.produtos.find(
//   { nome: {
//       $text: {
//         $search: "Mc",
//         $caseSensitive: false,
//       }  
//     }
//   }
// ).count();

db.produtos.find(
  { nome: { $regex: /^Mc/i } },
);
