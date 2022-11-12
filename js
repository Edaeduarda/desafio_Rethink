const pessoas =[

  {nome: "Fabiana Araujo", idade: 33},
  {nome: "Gabriel Gomes", idade: 25},
  {nome: "Fernando Henrique ", idade: 17},
  {nome: "Ana Luiza", idade: 2},
  {nome: "Geralda do Nascimento", idade: 93},
  {nome: "Miguel Souza", idade: 70},
  {nome: "Antonio Miguel", idade:69},

];

const hasUser = pessoas.find((user) => {
    console.log(user);
});

console.log(hasUser);

const result = pessoas;

console.log(result);

