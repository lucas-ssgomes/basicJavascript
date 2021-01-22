// function scope
let subject

function createThink() {
    subject = 'study'
    
}

/*
console.log(subject)
createThink()
console.log(subject)
*/

// ** Function hoisting

/*
sayMyName();

function sayMyName() {
    console.log('Lucas')
}
*/

// Arrow function
/*
const sayMyName = (name) => {
    console.log(name)
}
sayMyName('Lucas')
*/

// callback function
/*
function sayMyName(name) {
    console.log('antes de executar a função callback')
    
    name()
    
    console.log('depois de executar a callback')
}

sayMyName(
    () => {
        console.log('Estou em uma callback')
    }
)
*/

/**
 * Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
 */

function Person(name) {
    this.name = name
    this.walk = function () {
        return this.name + " está andando"
    }
}

const lucas = new Person("Lucas")
const joao = new Person("João")
console.log(lucas.walk())
console.log(joao.walk())
