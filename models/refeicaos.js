class Refeicao {
  constructor(
    id,
    categoryIds,
    title,
    preco,
    complexidade,
    imageUrl,
    duracao,
    ingredientes,
    passos,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.preco = preco;
    this.complexidade = complexidade;
    this.imageUrl = imageUrl;
    this.duracao = duracao;
    this.ingredientes = ingredientes;
    this.passos = passos;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
    this.isLactoseFree = isLactoseFree;
  }
}

export default Refeicao;
