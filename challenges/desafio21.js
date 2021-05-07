db.produtos.find({ $where: "this.curtidas>this.vendidos" }, { nome: 1, _id: 0 });
