// db.produtos.find({ "valoresNutricionais.0.quantidade": { $lt: 500 } }, { nome: 1, _id: 0 });

db.produtos.find(
  { valoresNutricionais: { $elemMatch: { tipo: "calorias", quantidade: { $lt: 500 } } } },
  { nome: 1, _id: 0 },
);