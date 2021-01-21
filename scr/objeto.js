/*
    Object
        *objeto
        *Propriedades /Atributos
        *Funcionalidades / Métodos

    {propriedade:"valor"}
*/
console.log({
    name:"Lucas",
    idade: "22",
    andar: function() {
        console.log('andar')
    }
})

// Create constant Objects

const person = {
    name: 'Lucas',
    age: 22,
    weight: 65.8,
    isAdmin: true
}
console.log(person.name)
console.log(person.age)

// Apresentando do DevTools utilizando Interpolação
console.log(`${person.name} tem ${person.age} anos.`)