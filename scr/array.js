/**
    Array
        * Uma lista
        * Agrupamento de dados
        
        ["Lucas", 22]
 */
console.log([
    "Lucas", 
    22,
    "sorvete"
])

// Declaring constant Array

const animals = [
    'Lion',
    'Monkey',
    {
        name: 'Cat',
        age: 3
    }
]

// acessar valores dentro do Array
console.log(animals[1])

// posição dentro do Array é indefined
console.log(animals[3])

// acessar valores dentro do Array sendo um Objeto
console.log(animals[2].age)
// Melhor padronizar sempre o tipo dos array para evitar problemas